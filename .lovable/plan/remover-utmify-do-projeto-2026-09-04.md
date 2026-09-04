# Remover UTMify do projeto

## Objetivo
Eliminar o script e a configuração da UTMify, mantendo intacto o repasse de parâmetros para o checkout (próprio) e o disparo do ViewContent.

## Alterações

### 1. `src/components/Tracking.tsx`
- Remover o primeiro `useEffect` inteiro (o que injeta `<script id="utmify">`).
- Manter o segundo `useEffect` do `IntersectionObserver` que dispara `trackViewContent` na seção de oferta.
- Atualizar o comentário JSDoc para descrever apenas o ViewContent.
- Verificar que o import de `IMERSAO` permanece, pois ainda é usado em `trackViewContent({ content_category: IMERSAO.nome })`.

### 2. `src/config/imersao.ts`
- Remover o campo `utmifyAtivo: true` da seção "Rastreio".
- Confirmar que não há tipo explícito para esse campo (o `as const` já não o declarava separadamente).

## O que NÃO será alterado
- `src/lib/checkout.ts` e `src/lib/useCheckoutUrl.ts` — repasse de UTMs permanece próprio.
- `src/routes/bio.tsx`, `dm.tsx`, `story.tsx`, `wpp.tsx` — rotas de origem inalteradas.
- Meta Pixel e demais rastreamentos.

## Verificação
- Busca case-insensitive por "utmify" no projeto deve retornar **zero** ocorrências.
- Confirmar que `buildCheckoutUrl` continua intacto e que os botões de compra ainda o utilizam.
