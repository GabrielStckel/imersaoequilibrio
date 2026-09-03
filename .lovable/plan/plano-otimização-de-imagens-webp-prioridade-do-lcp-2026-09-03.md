# Plano — Otimização de imagens (WebP + prioridade do LCP)

## Contexto
As duas imagens (`/jonas.png` e `/logo-equilibrio.png`) somam 1.576 KiB, ~99% do peso do site. O `jonas.png` é o LCP (8,7s no mobile). O usuário vai subir os arquivos WebP otimizados; este plano prepara o código para recebê-los. Os arquivos otimizados devem manter as mesmas dimensões dos originais (jonas 1000×1000, logo 512×512); se mudarem, os width/height serão ajustados com os valores reais.

## 1. Troca de referências PNG → WebP
- `src/config/imersao.ts` linha 96: `foto: "/jonas.png"` → `"/jonas.webp"` (atualiza o comentário).
- `src/components/sections/Header.tsx` linha 72: `src="/logo-equilibrio.png"` → `"/logo-equilibrio.webp"`.
- Após o usuário subir os WebP: remover `public/jonas.png` e `public/logo-equilibrio.png`.
- `public/favicon.png` NÃO é tocado (favicon permanece PNG).

## 2. Imagem do Hero (LCP) — `src/components/sections/Hero.tsx`
No `<img>` de fallback do `HeroVideo` (linhas 26–32):
- `width={640} height={360}` → `width={1000} height={1000}` (proporção real 1:1, igual ao container).
- Adicionar `fetchPriority="high"`, `loading="eager"`, `decoding="async"`.

## 3. Preload do LCP — `src/routes/__root.tsx`
- No `head()` do `Route`, adicionar em `links`:
  `{ rel: "preload", as: "image", href: "/jonas.webp", fetchPriority: "high" }`
- Posição: depois do bloco do Meta Pixel (preconnect/dns-prefetch) na ordem de links, antes do stylesheet não é controlável por causa do gerenciamento de recursos do React 19 (stylesheets sobem automaticamente). Será o mais cedo possível dentro das regras do framework.
- Apenas na rota `/`: o `head()` do `__root` é global. Se o preload precisar ser exclusivo da home, ele será movido para o `head()` de `src/routes/index.tsx` — decisão a confirmar na implementação; o padrão será colocar em `index.tsx` para atender ao "apenas na rota /".

## 4. Seção "Quem conduz" — `src/components/sections/Autoridade.tsx`
- Manter `loading="lazy"` (já está assim). Nenhuma mudança além do novo caminho via config (`autoridade.foto`).
- Adicionar `decoding="async"` (não interfere no lazy e evita bloqueio do main thread).

## 5. Logo do header — `src/components/sections/Header.tsx`
- Manter `width={30} height={30}` (arquivo é 512×512 quadrado; o atributo só define proporção, que é 1:1 — correto).
- Adicionar `loading="eager"` e `decoding="async"` (está acima da dobra em header fixo).

## 6. Não fazer
- Não gerar, converter ou redimensionar imagens (o usuário sobe os WebP).
- Não criar srcset/picture/componente responsivo.
- Nenhuma outra alteração na página.

## Verificação
- `rg` por `jonas.png` / `logo-equilibrio.png` para garantir zero referências restantes.
- `curl http://localhost:8080/` e conferir: preload de `/jonas.webp` no head, atributos do `<img>` do Hero e do logo.
- `bun run build` sem erros.
- Aguardar o upload dos arquivos WebP para remover os PNGs antigos e validar ausência de 404.

## Detalhes técnicos
- O React 19 reordena recursos do head (stylesheets/preloads automáticos primeiro); o preload manual do LCP ficará o mais alto possível, mas não necessariamente antes do stylesheet.
- O Hero usa `IMERSAO.autoridade.foto`, então a troca no config já propaga.
