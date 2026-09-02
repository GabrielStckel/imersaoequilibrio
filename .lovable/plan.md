# Atualização do link de checkout

## Objetivo
Substituir o placeholder `XXXXX` e centralizar a URL de checkout, aplicando-a apenas nos dois CTAs de pagamento (Oferta e CTA final). Hero, StickyBar e demais CTAs intermediários continuam rolando para `#oferta`. Repassar a query string da página para o checkout dinamicamente, sem parâmetros UTM vazios hardcoded.

## Passos

1. **Criar configuração centralizada**
   - Novo arquivo `src/config/checkout.ts` exportando:
     ```ts
     export const CHECKOUT_BASE = "https://pay.hotmart.com/R107409111D?off=19cnl1jc&checkoutMode=10";
     ```
   - Manter `IMERSAO.lotes` com `checkout` apenas como fallback legado, sem uso ativo.

2. **Criar hook de URL dinâmica**
   - Novo arquivo `src/hooks/useCheckoutUrl.ts`.
   - Durante SSR/hidratação inicial retorna `CHECKOUT_BASE` puro.
   - Após montagem, concatena `window.location.search` (sem duplicar `?`), preservando `off` e `checkoutMode`:
     ```ts
     const extras = window.location.search.replace(/^\?/, "");
     return extras ? `${CHECKOUT_BASE}&${extras}` : CHECKOUT_BASE;
     ```
   - Usa `useEffect` + `useState` para evitar hydration mismatch.

3. **Evoluir `CtaButton.tsx`**
   - Adicionar prop opcional `to?: "checkout" | "oferta"` (padrão `"oferta"`).
   - Quando `to === "oferta"`, o `href` é `"#oferta"`.
   - Quando `to === "checkout"`, usa `useCheckoutUrl()`.
   - Preservar tracking, estilos, tamanhos e acessibilidade.

4. **Aplicar nos componentes**
   - `src/components/sections/Oferta.tsx`: `<CtaButton to="checkout" ... />` no bloco de preço.
   - `src/components/sections/CtaFinal.tsx`: `<CtaButton to="checkout" ... />` no CTA final.
   - `src/components/sections/Hero.tsx`, `StickyBar.tsx`, `Header.tsx`, `Metodo.tsx`, `CausaRaiz.tsx`, `Diagnostico.tsx`: manter/alterar para `<CtaButton to="oferta" ... />` (âncora para a seção de oferta).

5. **Limpeza de UTM hardcoded**
   - Garantir que `CHECKOUT_BASE` não contenha `utm_source`, `utm_campaign`, `utm_medium`, `utm_content` nem `utm_term`.
   - Remover quaisquer parâmetros UTM vazios que existam no código.

6. **Verificação final**
   - Buscar por `XXXXX` em todo o projeto e confirmar que não restou nenhuma ocorrência.
   - Rodar `bun run build` para validar tipos e build.
   - Verificar visualmente no preview que Oferta e CTA final abrem o link correto e que Hero/StickyBar ainda rolam para `#oferta`.
