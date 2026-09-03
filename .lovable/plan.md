# Instalação do Meta Pixel (apenas browser)

Objetivo: instalar o Meta Pixel ID `489930819102829` apenas no lado do cliente, sem Conversions API, sem edge function e sem armazenar o token de API no projeto.

## O que será alterado

### 1. `src/config/imersao.ts`
- Preencher `metaPixelId` com `"489930819102829"`.

### 2. `src/components/Tracking.tsx`
- Manter o script base oficial do Meta Pixel injetado no `<head>` (código padrão `fbevents.js`, sem biblioteca de terceiros).
- Adicionar a tag `<noscript>` com o pixel de imagem logo após a abertura do `<body>` (renderizada pelo próprio componente `Tracking`, que é montado dentro de `<main>`).
- Implementar PageView em mudanças de rota da SPA usando `useRouter` do TanStack Router, disparando `fbq('track', 'PageView')` ao trocar de rota (`/`, `/termos`, `/privacidade`).
- Implementar ViewContent para a seção `#oferta` usando `IntersectionObserver` com `threshold: 0.5`, disparando `fbq('track', 'ViewContent')` uma única vez por sessão (controle via `sessionStorage`).

### 3. `src/lib/tracking.ts`
- Ajustar `trackInitiateCheckout` para receber e enviar `value: 47` e `currency: 'BRL'` de forma padronizada.
- Adicionar helpers `trackPageView()` e `trackViewContent()` para centralizar as chamadas ao `window.fbq`.

### 4. `src/components/CtaButton.tsx`
- Alterar o `onClick` para disparar `InitiateCheckout` **apenas** quando `to === "checkout"` (os CTAs da oferta e do CTA final).
- Não disparar `InitiateCheckout` nos botões de âncora (`to === "oferta"`, que vão para `#oferta`).
- Enviar os parâmetros exatos: `value: 47`, `currency: 'BRL'`.

## O que NÃO será feito
- Nenhum evento `Purchase` será criado (a compra acontece na Hotmart).
- Nenhuma Conversions API, edge function ou endpoint de servidor será criado.
- O token de API `EAAGDC8L5fUkB...` não será armazenado nem referenciado no código.

## Eventos e gatilhos finais

| Evento         | Gatilho                                                                 |
|----------------|-------------------------------------------------------------------------|
| `PageView`     | Carregamento inicial + toda mudança de rota (`/`, `/termos`, `/privacidade`). |
| `ViewContent`  | Seção `#oferta` entra 50% no viewport, uma vez por sessão.             |
| `InitiateCheckout` | Clique nos dois CTAs que abrem o checkout Hotmart (Oferta e CTA final), com `value: 47`, `currency: 'BRL'`. |

## Verificação
- `bun run build` sem erros.
- Confirmar que `metaPixelId` está preenchido e que o script `fbevents.js` aparece no `<head>` da página.
- Confirmar que o `<noscript>` de imagem do Pixel está no body.
- Confirmar que CTAs de âncora (`#oferta`) não disparam `InitiateCheckout`.
