# Reformulação do Hero no desktop

## Objetivo
Reorganizar apenas a experiência `lg:` do Hero, mantendo o mobile intacto e preservando o título atual abaixo de `lg`.

## Alterações
- Ajustar a grade desktop para `690px 534px`, com `gap-x-14`, e trocar somente `lg:self-center` por `lg:self-start` no bloco do vídeo.
- Ocultar a eyebrow no desktop sem alterar sua condição atual nos breakpoints menores.
- Manter um único `h1` semântico, com:
  - texto atual preservado abaixo de `lg`;
  - variante desktop em exatamente três linhas: “Por que doar-se demais” / “afasta o respeito” / “e trava o dinheiro?”;
  - 42px, `leading 1.12`, tracking `-0.02em`, alinhamento à esquerda e dourado apenas na segunda linha.
- Consolidar o texto de apoio em uma única ocorrência na coluna esquerda, com apresentação desktop de 20px, `leading 1.6` e 32px de distância do título.
- Reordenar o bloco de compra desktop para: preço, CTA de 420×60px, selo Hotmart/garantia, progresso e, por último, rótulo “A imersão começa em” com Countdown.
- Reaproveitar o selo Hotmart/garantia da Oferta como componente compartilhado, preservando a aparência atual da Oferta.
- Manter o player sem `aspect-video`, com 534px definidos pela coluna, seguido da identificação de Jonas em 15px.
- Adicionar abaixo do player, após 28px, os três itens de `IMERSAO.autoridade.numeros` empilhados, cada um precedido por filete dourado de 1px.

## Verificação
- Rodar o build do projeto.
- Conferir o Hero em viewport mobile e desktop.
- Validar no desktop: título em exatamente três linhas, topo do player alinhado ao topo do título, player com proporção aproximada de 16:9, Countdown como último elemento da compra e números empilhados.
- Confirmar no código que o texto de apoio aparece uma única vez e que não foi adicionada outra regra de alinhamento ao vídeo.
