# Plano — reformulação do header fixo no mobile

## Objetivo

Reduzir o header móvel e priorizar marca + contagem regressiva, eliminando a duplicidade do CTA que já permanece disponível na barra fixa inferior.

## Alterações

### Header mobile

- Manter o header fixo e a barra de progresso existentes.
- Organizar a barra principal em duas colunas com altura total de 60px e padding vertical de 10px.
- Na esquerda, exibir o selo da balança em 36px e o nome completo “Equilíbrio Sistêmico”, sem truncamento, em Poppins 600 de 15px; permitir quebra em até duas linhas quando necessário.
- Na direita, remover o CTA somente abaixo de `md` e exibir o contador em duas linhas:
  - “COMEÇA EM” em 10px, caixa alta, tracking `0.1em` e dourado claro;
  - contagem no formato atual `34d 05:58:44`, com números tabulares, Poppins 600 de 15px e cor pergaminho.
- Preservar o CTA e o contador do desktop a partir de `md`, sem alterar checkout ou tracking.

### Marquee

- Manter conteúdo, animação e comportamento atual de recolher ao rolar para baixo e reaparecer ao rolar para cima.
- Fixar a tipografia móvel em 11px sem alterar a legibilidade do desktop.
- Ajustar apenas o espaçamento necessário para que header + marquee abertos somem no máximo 92px.

## Validação

- Conferir em 393px que o nome aparece inteiro, o contador está visível e o CTA do header não aparece.
- Confirmar altura de 60px para a barra principal e máximo de 92px com a marquee aberta.
- Testar recolhimento e retorno da marquee por direção da rolagem.
- Conferir em 1280px que o CTA continua presente e o layout desktop não sofreu regressão.
- Validar ausência de overflow, sobreposição e erros no navegador.
