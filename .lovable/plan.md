# Plano: Cards "Tudo incluso" quadrados no desktop

## O que será feito

1. **Adicionar o 4º benefício** em `src/config/imersao.ts` dentro de `IMERSAO.stackValor`, com título "Valor total do programa", ícone `Sparkles` e uma descrição curta sobre o valor real do programa.

2. **Remover o bloco separado** "Valor total do programa" que hoje aparece abaixo dos 3 cards em `src/components/sections/Oferta.tsx`, já que ele se tornará o 4º card.

3. **Ajustar o grid** em `Oferta.tsx`:
   - Mobile/tablet: mantém 2 colunas (`grid-cols-2`).
   - Desktop (lg+): 4 colunas (`lg:grid-cols-4`).

4. **Tornar os cards quadrados no desktop** aplicando `lg:aspect-square` nos cards e ajustando o espaçamento interno para que título, ícone e descrição fiquem bem distribuídos dentro do formato quadrado.

5. **Verificar** `bun run build` e preview desktop/mobile para garantir que não haja regressões.

## Arquivos envolvidos

- `src/config/imersao.ts`
- `src/components/sections/Oferta.tsx`
