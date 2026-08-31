# Ajuste de largura e destaque na seção Oferta

## Objetivo
Deixar a seção "O que você garante ao entrar ainda hoje na Imersão Equilíbrio?" mais larga na página e colocar o foco visual no painel direito de preços (1º Lote · Valor promocional, R$ 47, lotes futuros, CTA e garantia).

## Problema atual
- O container está limitado a `max-w-6xl`.
- O grid divide a largura em `1.25fr_0.75fr`, dando mais espaço para os cards de benefícios à esquerda do que para o painel de preço.
- O painel de preço parece compacto em telas grandes.

## Alterações propostas

### 1. Aumentar a largura total da seção
- Trocar o container interno de `max-w-6xl` para `max-w-[88rem]` (ou `max-w-7xl` se preferir mais contido), mantendo padding lateral responsivo.
- Isso aproveita melhor telas grandes sem estourar em notebooks menores.

### 2. Rebalancear o grid
- Alterar a proporção do grid desktop de `1.25fr_0.75fr` para algo como `1fr_1fr` ou `1.1fr_0.9fr`, dando mais largura horizontal para o painel de preço.
- Manter a quebra em uma única coluna no mobile/tablet.

### 3. Ampliar o painel de preço
- Aumentar o padding interno do painel direito (`p-8` → `p-10 lg:p-12`).
- Aumentar o tamanho do preço principal (`R$ 47`) e do label "Lote especial".
- Deixar os cards dos lotes futuros um pouco maiores e mais legíveis.
- Garantir que o botão CTA ocupe a largura total do painel e tenha altura confortável.

### 4. Compactar a área de benefícios (esquerda)
- Manter os 4 cards quadrados no desktop, mas reduzir levemente o padding interno para não competir com o painel de preço.
- Garantir que os textos dos cards continuem legíveis.

### 5. Manter comportamentos existentes
- Lote ativo dinâmico via `useLoteAtivo()`.
- Cards de lotes futuros com "Em breve" abaixo do preço.
- CTA dinâmico "Garantir Vaga 1º Lote".
- Barra de progresso, selos de segurança e garantia de 7 dias.

## Validação
- Executar `bun run build`.
- Verificar screenshot desktop (≥1280px) confirmando que o painel de preço está mais largo e em destaque.
- Verificar mobile (≤390px) para garantir que não quebrou a responsividade.
