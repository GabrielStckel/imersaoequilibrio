# Reorganização desktop da seção Diagnóstico

## Objetivo
Reequilibrar visualmente a seção “A vida não funciona em gavetas.” somente em `lg:`, sem alterar nenhuma palavra da copy nem o layout mobile.

## Cabeçalho
- Alterar a grade desktop para `1.25fr 1fr`, gap de 64px e alinhamento pelo topo.
- Manter `SectionLabel` e `h2` na coluna esquerda, com o título em 40px e composição em duas linhas no desktop.
- Remover a compensação `lg:pb-2` do parágrafo da direita.
- Criar na coluna direita uma âncora visual com filete de 1px × 48px em ouro-tinta e 20px até o parágrafo.
- Aplicar ao texto 18px, `leading 1.75` e justificação no desktop.
- Ajustar o padding superior da coluna direita para que o início do parágrafo se alinhe à primeira linha do `h2`, compensando a altura do `SectionLabel`.

## Cards
- Preservar duas colunas com gap de 24px e fazer a grade e os wrappers dos `Reveal` esticarem os cards por linha à mesma altura.
- Manter a ordem interna consistente: ícone, título e texto ocupando o espaço restante.
- Aplicar em `lg:`: ícone 48px, título 24px, texto 17px com `leading 1.7` e justificação, padding de 32px.

## Fechamento
- Substituir no desktop a borda corrida atual por um filete centralizado de 1px × 48px.
- Centralizar o parágrafo, aplicar 18px e criar 48px de respiro acima, preservando o comportamento atual abaixo de `lg`.

## Verificação
- Rodar o build.
- Conferir a seção em mobile e desktop, incluindo alinhamento do parágrafo com a primeira linha do título, título em duas linhas, pares de cards com a mesma altura e fechamento centralizado.
- Confirmar que a copy permaneceu byte a byte inalterada.
