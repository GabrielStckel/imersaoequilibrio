# Instalação do Meta Pixel (apenas browser)

Objetivo: instalar o Meta Pixel ID `489930819102829` apenas no lado do cliente, sem Conversions API, sem edge function e sem armazenar o token de API no projeto.

## O que será alterado

### 1. `src/config/imersao.ts`
- Preencher `metaPixelId` com `"489930819102829"`.

### 2. `src/routes/__root.tsx` (pixel base, no HTML do servidor)
Este projeto é TanStack Start e não tem `index.html`; o HTML é montado pelo `RootShell` do `__root.tsx`. Todo o bloco do pixel entra ali, estático, sem `useEffect` e sem carregamento condicional no cliente.

- **Posição:** o bloco fica no topo absoluto do `<head>`, antes de `<HeadContent />` (ou seja, antes do CSS e das fontes), para não ficar atrás delas na fila de download.
- Imediatamente antes do snippet:
  - `<link rel="preconnect" href="https://connect.facebook.net" crossorigin>`
  - `<link rel="dns-prefetch" href="https://connect.facebook.net">`
- **Snippet base oficial do Meta**, inline via `dangerouslySetInnerHTML`, contendo `fbq('init','489930819102829')` **e** `fbq('track','PageView')` logo em seguida. O PageView é disparado pelo snippet inline, antes da hidratação — fonte única do evento.
- **`<noscript>` estático** com a tag de imagem do pixel, logo após a abertura do `<body>` no `RootShell`.
- **Condicional por rota, no servidor:** o bloco inteiro (preconnect + script + noscript) só é renderizado quando o pathname for `/`. Em `/termos` e `/privacidade` nada do pixel é emitido no HTML. O pathname é lido com `useRouterState({ select: s => s.location.pathname })`, que resolve tanto no SSR quanto no cliente.

### 3. `src/components/Tracking.tsx`
- Deixa de injetar o script do pixel (isso passa para o `__root.tsx`); mantém apenas a injeção do UTMify, como hoje.
- **Nenhum disparo de PageView aqui.** Sem listener de rota, sem `trackPageView()`.
- Implementar ViewContent para a seção `#oferta` usando `IntersectionObserver` com `threshold: 0.5`, disparando `fbq('track', 'ViewContent')` uma única vez por sessão (controle via `sessionStorage` envolto em `try/catch` para não derrubar o observer quando o armazenamento estiver bloqueado).

### 4. `src/lib/tracking.ts`
- `trackInitiateCheckout` envia `currency: 'BRL'` e o `value` **lido do preço do lote ativo** (não fixo).
- Adicionar helper `trackViewContent()` para centralizar a chamada ao `window.fbq`.

### 5. `src/components/CtaButton.tsx`
- Alterar o `onClick` para disparar `InitiateCheckout` **apenas** quando `to === "checkout"` (os CTAs da oferta e do CTA final).
- Não disparar `InitiateCheckout` nos botões de âncora (`to === "oferta"`, que vão para `#oferta`).
- Enviar `value` derivado de `IMERSAO.lotes[indice].preco` (o mesmo exibido na página, ex.: 47 hoje, 97 no 2º lote) com `currency: 'BRL'`.

## O que NÃO será feito
- Nenhum evento `Purchase` será criado (a compra acontece na Hotmart).
- Nenhuma Conversions API, edge function ou endpoint de servidor será criado.
- O token de API `EAAGDC8L5fUkB...` não será armazenado nem referenciado no código.

## Eventos e gatilhos finais

| Evento         | Gatilho                                                                 |
|----------------|-------------------------------------------------------------------------|
| `PageView`     | Snippet inline no `<head>`, apenas na rota `/`, antes da hidratação. Nenhum disparo em `/termos` e `/privacidade`. |
| `ViewContent`  | Seção `#oferta` entra 50% no viewport, uma vez por sessão.             |
| `InitiateCheckout` | Clique nos dois CTAs que abrem o checkout Hotmart (Oferta e CTA final), com `value` do lote ativo e `currency: 'BRL'`. |

## Verificação
- `bun run build` sem erros.
- Ver o HTML de `/` retornado pelo servidor (`curl`): o snippet do pixel aparece no topo do `<head>`, antes do CSS, com `init` e `PageView`, e o `<noscript>` no início do `<body>`.
- Ver o HTML de `/termos` e `/privacidade`: nenhuma ocorrência de `fbevents` ou do Pixel ID.
- Confirmar que CTAs de âncora (`#oferta`) não disparam `InitiateCheckout`.
