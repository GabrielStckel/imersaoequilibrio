# VTurb + botões verdes na página /obrigado

Dois ajustes isolados em `/obrigado`. Nada na landing page.

## Parte 1 — Player VTurb no vídeo de /obrigado

IDs do novo player (diferentes do hero da landing, sem conflito):
- elemento/script: `6aa010e85c371440402918eb`
- vídeo (m3u8): `6aa010e06da0a5d652a3410c`
- conta: `ac22f9bb-c7ee-4060-9a6e-7ec3b5fa2ff8` (mesma do hero)

### 1. src/routes/obrigado.tsx — elemento no lugar do placeholder
- Na seção "Recado em vídeo", substituir o texto placeholder dentro do container `aspect-video` por:

```tsx
<vturb-smartplayer id="vid-6aa010e85c371440402918eb" style={{ display: "block", margin: "0 auto", width: "100%" }}>
  <div className="vturb-player-placeholder" style={{ position: "relative", width: "100%", padding: "56.25% 0 0", zIndex: 0, backgroundColor: "black" }} />
</vturb-smartplayer>
```
- Manter o container existente com `aspect-video` (16/9) e remover as classes de centralização do placeholder (`flex items-center justify-center bg-areia` deixam de fazer sentido com o player).
- Sem thumbnail, overlay, botão de play ou fallback próprio.
- A tipagem já existe em `src/types/vturb.d.ts` (criada para o hero) — nada a declarar de novo.

### 2. Script via useEffect, sem cleanup
```tsx
const VTURB_SRC = "https://scripts.converteai.net/ac22f9bb-c7ee-4060-9a6e-7ec3b5fa2ff8/players/6aa010e85c371440402918eb/v4/player.js";
useEffect(() => {
  if (document.querySelector(`script[src="${VTURB_SRC}"]`)) return;
  const s = document.createElement("script");
  s.src = VTURB_SRC;
  s.async = true;
  document.head.appendChild(s);
}, []);
```
- Sem remoção no cleanup (o `customElements.define` não pode rodar duas vezes); a guarda por `querySelector` cobre o StrictMode.
- Nenhuma `<script>` no JSX.

### 3. Preloads — em src/routes/__root.tsx (não existe index.html neste projeto)
Este template monta o `<head>` via SSR no `RootShell` do `__root.tsx`; os preloads do hero já vivem lá (hoje só preconnect/dns-prefetch, gateados em `pathname === "/"`).

Adicionar um bloco gateado em `pathname === "/obrigado"` com:
1. Script `_plt` (mesmo snippet já usado na landing; roda de novo sem problema pois só define se ausente).
2. `preload as="script"` do `player.js` do novo player.
3. `preload as="script"` do `smartplayer.js` (lib compartilhada).
4. `preload as="fetch" crossOrigin="anonymous"` do `main.m3u8` do vídeo `6aa010e06da0a5d652a3410c`.
5. `dns-prefetch` para cdn/scripts/images.converteai.net e license.vturb.com.
- Os preloads da landing (`pathname === "/"`) ficam intactos; como os gates são por rota, não há linhas duplicadas.

### 4. Altura reservada
- Container mantém `aspect-video`; o placeholder interno declara 56.25% (mesma proporção). Nenhuma terceira definição de altura.
- Verificação com Playwright em 360px: medir a posição do primeiro botão do WhatsApp antes e depois de o player montar — não pode se deslocar.

## Parte 2 — Botões verdes do WhatsApp

Apenas os três botões "Entrar no grupo do WhatsApp" (`BotaoGrupo` em obrigado.tsx). O botão "Suporte pelo WhatsApp" da seção 9 NÃO muda.

- Remover `botao-ouro-metal`; novo estilo:
  - fundo `#25D366`, texto `#0B2A14`, Poppins 600 17px (`font-display font-semibold text-[17px]`)
  - ícone WhatsApp SVG inline 22px em `currentColor` (herda `#0B2A14`)
  - borda `1px solid #17A94F`
  - sombra `0 6px 18px rgba(11,42,20,.18)`, sem brilho interno
  - hover: `#1FC25C`, sobe 1px, 160ms; active: `#1AAF52`
  - focus-visible: outline 2px `#0B2A14`, offset 2px
  - raio, altura (56px) e largura inalterados; rótulo e linha de apoio inalterados
- Implementação: utilitários Tailwind inline nos botões (cores em arbitrary values) — sem criar classe global nova, para não vazar verde para outras páginas.
- Selo "PAGAMENTO CONFIRMADO", ícones da lista (#7D5F1C) e filetes ficam como estão. Nenhum verde novo em outro lugar.

## Não alterar
- Landing page inteira (hero, oferta, botões dourados de compra, preloads da rota `/`).
- Header, faixa superior e rodapé da /obrigado.
- Tipografia e demais cores da página.

## Verificação
1. Build sem erros.
2. Playwright em `/obrigado` (360px e 1280px): player renderiza e dá play; console sem "already defined"; botão não se desloca ao montar o player; três botões verdes com hover/focus corretos; nenhum outro elemento verde.
3. `curl` em `/` e `/termos`: o playerId `6aa010e85c371440402918eb` só aparece em `/obrigado`.
