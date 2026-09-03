# Instalação do Meta Pixel (apenas browser)

Objetivo: instalar o Meta Pixel ID `489930819102829` apenas no lado do cliente, sem Conversions API, sem edge function e sem armazenar o token de API no projeto.

## O que será alterado

### 1. `src/config/imersao.ts`
- Preencher `metaPixelId` com `"489930819102829"`.

### 2. `src/components/Tracking.tsx`
- Manter o script base oficial do Meta Pixel injetado no `<head>` (código padrão `fbevents.js`, sem biblioteca de terceiros).
- **Remover o `fbq('track','PageView')` do snippet base** — o script só inicializa o pixel. Todo `PageView` sai do listener de rota, inclusive o da primeira renderização, evitando disparo duplicado.
- Implementar PageView usando `useRouter` do TanStack Router, disparando `fbq('track', 'PageView')` no mount inicial e em cada troca de rota (`/`, `/termos`, `/privacidade`) — fonte única do evento.
- Implementar ViewContent para a seção `#oferta` usando `IntersectionObserver` com `threshold: 0.5`, disparando `fbq('track', 'ViewContent')` uma única vez por sessão (controle via `sessionStorage` envolto em `try/catch` para não derrubar o observer quando o armazenamento estiver bloqueado).

### 3. `src/routes/__root.tsx`
- Este projeto é TanStack Start e não tem `index.html`; o HTML do shell é o `RootShell` do `__root.tsx`. Colocar o `<noscript>` do pixel (tag de imagem de rastreio) **estático**, logo após a abertura do `<body>` no `RootShell`. Por sair do HTML renderizado no servidor, o noscript funciona de verdade — não é código morto renderizado pelo React.

### 4. `src/lib/tracking.ts`
- `trackInitiateCheckout` envia `currency: 'BRL'` e o `value` **lido do preço do lote ativo** (não fixo).
- Adicionar helpers `trackPageView()` e `trackViewContent()` para centralizar as chamadas ao `window.fbq`.

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
| `PageView`     | Carregamento inicial + toda mudança de rota (`/`, `/termos`, `/privacidade`). |
| `ViewContent`  | Seção `#oferta` entra 50% no viewport, uma vez por sessão.             |
| `InitiateCheckout` | Clique nos dois CTAs que abrem o checkout Hotmart (Oferta e CTA final), com `value: 47`, `currency: 'BRL'`. |

## Verificação
- `bun run build` sem erros.
- Confirmar que `metaPixelId` está preenchido e que o script `fbevents.js` aparece no `<head>` da página.
- Confirmar que o `<noscript>` de imagem do Pixel está no body.
- Confirmar que CTAs de âncora (`#oferta`) não disparam `InitiateCheckout`.
