# Ajuste de largura e destaque na seção Oferta (apenas desktop)

## Objetivo
Deixar a seção "O que você garante ao entrar ainda hoje na Imersão Equilíbrio?" mais larga na página e colocar o foco visual no painel direito de preços (1º Lote · Valor promocional, R$ 47, lotes futuros, CTA e garantia). **Aplicar somente no desktop; mobile deve voltar ao layout anterior.**

## Problema atual
- O container está limitado a `max-w-6xl`.
- O grid divide a largura em `1.25fr_0.75fr`, dando mais espaço para os cards de benefícios à esquerda do que para o painel de preço.
- O painel de preço parece compacto em telas grandes.

## Alterações propostas

### 1. Aumentar a largura total da seção (somente desktop)
- Trocar o container interno de `max-w-6xl` para `max-w-[88rem]` em telas grandes (`lg:`), mantendo `max-w-6xl` ou `max-w-7xl` em telas menores.
- Aproveitar melhor telas grandes sem estourar em notebooks menores.

### 2. Rebalancear o grid (somente desktop)
- Alterar a proporção do grid desktop de `1.25fr_0.75fr` para `1fr_1fr` ou `1.1fr_0.9fr`, dando mais largura horizontal para o painel de preço.
- Manter a quebra em uma única coluna no mobile/tablet.

### 3. Ampliar o painel de preço (somente desktop)
- Aumentar o padding interno do painel direito no desktop (`lg:p-12` ou maior).
- Aumentar o tamanho do preço principal (`R$ 47`) e do label "Lote especial" no desktop.
- Deixar os cards dos lotes futuros um pouco maiores e mais legíveis no desktop.
- Garantir que o botão CTA ocupe a largura total do painel e tenha altura confortável.

### 4. Manter os 4 cards quadrados no desktop
- Preservar o layout atual de 2×2 cards quadrados no desktop (281×281 px), conforme ajuste anterior.
- Compactar levemente o conteúdo dos cards se necessário para manter o quadrado real com a nova largura maior.

### 5. Reverter o mobile ao layout anterior
- Remover qualquer forçamento de cards quadrados no mobile.
- Voltar ao layout mobile anterior: provavelmente 2 colunas com cards de altura natural, texto confortável, sem `aspect-square`.
- Preservar a legibilidade e o espaçamento mobile anterior.

### 6. Manter comportamentos existentes
- Lote ativo dinâmico via `useLoteAtivo()`.
- Cards de lotes futuros com "Em breve" abaixo do preço.
- CTA dinâmico "Garantir Vaga 1º Lote".
- Barra de progresso, selos de segurança e garantia de 7 dias.

## Validação
- Executar `bun run build`.
- Verificar screenshot desktop (≥1280px) confirmando que o painel de preço está mais largo, em destaque, e os 4 cards continuam quadrados.
- Verificar mobile (≤390px) para garantir que voltou ao layout anterior e não quebrou a responsividade.
