# Ajustes de rastreamento: repasse de parâmetros ao checkout + rotas curtas

Sem alteração de copy, layout, imagens ou seções.

## 1. Helper de checkout com parâmetros filtrados

**Estado atual (confirmado):** todos os links/botões de compra da página (header via `to="oferta"` + oferta, hero, oferta, CTA final) passam por `CtaButton`, que usa `useCheckoutUrl`. O hook hoje repassa **todos** os parâmetros da URL para o Hotmart. `StickyBar` usa `to="oferta"` (âncora interna, sem checkout direto). O campo `IMERSAO.lotes[].checkout` não é usado por nenhum link.

**Mudanças:**
- Criar `src/lib/checkout.ts` com `buildCheckoutUrl()`:
  - lê `window.location.search` (fora do browser, retorna a base);
  - extrai apenas a whitelist: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `src`, `sck`, `xcod`;
  - monta a URL final a partir de `CHECKOUT_BASE` (`https://pay.hotmart.com/R107409111D?off=19cnl1jc&checkoutMode=10`), preservando `off` e `checkoutMode` e anexando os parâmetros capturados via `URLSearchParams`;
  - sem parâmetros na whitelist, retorna a base exata de hoje.
- Atualizar `src/hooks/useCheckoutUrl.ts` para delegar a `buildCheckoutUrl()` (mantém a API do hook, que já hidrata com o valor final após o mount).
- Como todo checkout passa por `CtaButton`/`useCheckoutUrl`, isso cobre header, hero (via seção oferta), oferta, CTA final e qualquer futuro uso.

## 2. Rotas curtas de redirecionamento

Criar quatro arquivos de rota, cada um redirecionando com `replace` (sem entrada no histórico) via `<Navigate>` do TanStack Router, renderizando nada além do redirect (sem conteúdo que pisque):

| Arquivo | Destino |
|---|---|
| `src/routes/wpp.tsx` | `/?utm_source=whatsapp&utm_medium=mensagem&utm_campaign=equilibrio-out26&utm_content=frio&src=wpp` |
| `src/routes/bio.tsx` | `/?utm_source=instagram&utm_medium=bio&utm_campaign=equilibrio-out26&utm_content=frio&src=igbio` |
| `src/routes/story.tsx` | `/?utm_source=instagram&utm_medium=stories&utm_campaign=equilibrio-out26&utm_content=frio&src=igstory` |
| `src/routes/dm.tsx` | `/?utm_source=instagram&utm_medium=direct&utm_campaign=equilibrio-out26&utm_content=frio&src=igdm` |

- Usar `createFileRoute("/wpp")` etc. com `<Navigate to="/" search={{...}} replace />` — o redirect acontece antes de qualquer conteúdo da home renderizar.
- Acesso direto pela URL já é suportado pelo hosting do TanStack Start (fallback de SPA nativo, sem arquivos de rewrite).

## 3. Validação

- Build/typecheck ok.
- Playwright: abrir `/wpp`, `/bio`, `/story` e `/dm` diretamente → confirmar URL final na home com os parâmetros corretos; clicar em um botão de compra e confirmar que o link Hotmart contém `src=...` (e UTMs) preservando `off=19cnl1jc&checkoutMode=10`; abrir `/` sem parâmetros → checkout igual ao de hoje.

## Nota técnica

- A mudança no hook também filtra parâmetros que hoje vazariam para o Hotmart (comportamento atual repassa tudo); após a mudança só a whitelist é repassada, conforme pedido.
