# Prompt único — Header, vídeo no config e Oferta

Vários itens do prompt já estão aplicados e verificados: fontes Inter (1), Google Fonts (2), CtaButton com nome do lote (4) e Hero em 3 linhas (6). Faltam 4 mudanças. Os códigos de `Header.tsx` e `Oferta.tsx` vieram com trechos de JSX corrompidos (classNames vazios e tags quebradas); eles serão reconstruídos fielmente à intenção e ao design system existente (bone/espresso/gold, Inter).

## 1. Adicionar `video` ao config

**Arquivo:** `src/config/imersao.ts` — adicionar apenas o bloco (o restante do arquivo já está idêntico ao enviado):

```ts
// ——— Vídeo do hero (VSL) ———
video: {
  // URL de EMBED do player (YouTube, Vimeo, Panda). Vazio = player-placeholder.
  embedUrl: "",
  legenda: "Assista antes de garantir sua vaga",
},
```

## 2. Hero: usar `IMERSAO.video`

**Arquivo:** `src/components/sections/Hero.tsx` — ajustar o `HeroVideo` para ler `IMERSAO.video`: com `embedUrl` preenchido renderiza um `<iframe>` responsivo (aspect-video, rounded-card, borda gold, allow fullscreen); vazio mantém o placeholder atual com ícone Play, cantos decorativos e a `legenda`. Restante do Hero permanece como está.

## 3. Criar `src/components/sections/Header.tsx`

Header fixo no topo, reconstruído a partir do código enviado:

- **Faixa deslizante (marquee)** no topo, direita → esquerda, com mensagens dinâmicas: `% de ingressos do lote garantidos`, preço do lote ativo, datas/horário, "Vagas limitadas por lote", "Pagamento seguro via Hotmart". Animação CSS `eqMarquee` injetada uma vez, desligada com `prefers-reduced-motion`, conteúdo duplicado para loop contínuo.
- **Barra do header**: fundo espresso com blur, logo/marca (ícone de equilíbrio + `IMERSAO.nome`), à direita `CountdownInline` com "Começa em" e um `CtaButton` pequeno.
- **Barra de progresso fina** na base do header mostrando o `useProgressoProgramado`.

## 4. Substituir `src/components/sections/Oferta.tsx`

Formato da referência (já bem próximo do atual, será reescrito conforme o código enviado, reconstruindo os trechos corrompidos):

- Section `#oferta` em espresso com grain, label "07 — Garanta sua vaga".
- Card `bg-bone` arredondado em grid `lg:grid-cols-[1.05fr_0.95fr]`.
- **Esquerda**: título "O que você garante ao entrar ainda hoje na Imersão Equilíbrio?" ("ainda hoje" em itálico gold-deep) + checklist de `IMERSAO.stackValor` com ícone Check, número, título, descrição e separadores.
- **Direita** (painel escuro): badge do lote ativo, texto promocional, "De R$ 497" riscado, pílulas dos 3 lotes via `useLoteAtivo` (ativo em destaque gold com parcela; passado riscado "encerrado"; futuro "em breve"), `CtaButton origem="oferta"`, `ProgressoLote tone="dark"`, linha com Lock "Pagamento Seguro · Hotmart · Garantia de 7 dias" e copy da garantia.

## 5. `src/routes/index.tsx` — Header no lugar da StickyBar

- Trocar o import de `StickyBar` por `Header` e o JSX `<StickyBar />` por `<Header />` no topo.
- `StickyBar.tsx` permanece no projeto sem uso.

## Validação

- `bun run build` passando.
- Playwright: header com faixa deslizante, logo e barra de progresso; hero com vídeo/placeholder e título em 3 linhas; todos os botões "Garantir Vaga 1º Lote"; oferta com checklist à esquerda e pílulas à direita; conferir desktop, ~800px e ~360px.
