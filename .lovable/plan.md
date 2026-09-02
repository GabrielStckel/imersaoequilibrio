# Remover 3 CTAs secundários do corpo da página

## Objetivo
Eliminar os três botões secundários de borda dourada que pedem a compra antes da seção de oferta, mantendo o respiro visual e removendo a variante/estilo morto.

## Alterações

### 1. `src/components/sections/Diagnostico.tsx`
- Remover o `<CtaButton ... variant="outline" ... />` e o container flex que o envolve.
- Manter o parágrafo final: "O desequilíbrio não escolhe área...".
- Fechar a seção com esse parágrafo e garantir 56 px de margem inferior antes da próxima seção.
- Remover importação não utilizada do `CtaButton`.

### 2. `src/components/sections/CausaRaiz.tsx`
- Remover o `<CtaButton ... variant="outline" ... />` e o container flex que o envolve.
- Manter o parágrafo final: "A boa notícia: o que foi aprendido pode ser desaprendido...".
- Garantir 56 px de margem inferior.
- Remover importação não utilizada do `CtaButton`.

### 3. `src/components/sections/Metodo.tsx`
- Remover o `<CtaButton ... variant="outline" ... />` e o container flex que o envolve.
- Manter o parágrafo final: "Dois encontros ao vivo pelo Zoom...".
- Garantir 56 px de margem inferior.
- Remover importação não utilizada do `CtaButton`.

### 4. `src/components/CtaButton.tsx`
- Remover a prop `variant?: "solid" | "outline"`.
- Remover a lógica que aplica `botao-secundario` quando `variant === "outline"`.
- Manter a lógica de `surface` (light/dark) para os botões sólidos restantes.

### 5. `src/styles.css`
- Remover o `@utility botao-secundario { ... }` completo, pois deixará de ser usado em toda a página.

## O que NÃO muda
- CTA do Hero.
- CTA dentro do bloco de preço da seção `Oferta`.
- CTA final da seção "O respeito não se pede".
- Barra fixa do rodapé (`StickyBar`).
- Header.

## Verificação
- Executar `bun run build`.
- Contar elementos com texto "Garantir" na página: esperado 4 no mobile (hero, preço, CTA final, barra fixa) e 5 no desktop (os mesmos + header).
