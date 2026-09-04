# Reorganizar seção "Causa Raiz" no desktop (lg:)

## Objetivo
Preencher o vazio de 273 px na coluna esquerda da seção `CausaRaiz.tsx` e dar melhor hierarquia visual ao blockquote, sem alterar a copy nem o mobile.

## Mudanças no cabeçalho
- No grid principal, alterar apenas no desktop:
  - `lg:grid-cols-[0.95fr_1.05fr]` → `lg:grid-cols-[1fr_1.05fr]`
  - `lg:gap-20` → `lg:gap-[72px]`
- Na coluna esquerda, envolver o conteúdo em um container flex com:
  - `lg:flex lg:flex-col lg:justify-between lg:items-stretch`
  - título e parágrafo curto no topo
  - parágrafo de fechamento ancorado na base da coluna

## Mover o parágrafo de fechamento
- O parágrafo `"A boa notícia: o que foi aprendido pode ser desaprendido..."` sai do `Reveal` externo (abaixo da grade) e entra no final da coluna esquerda, dentro da grade.
- Manter o `Reveal` externo removido; o fechamento passa a acompanhar a coluna esquerda.
- Aplicar no desktop:
  - filete superior de 1 px, cor `ouro-tinta` com 25% de opacidade, largura total da coluna
  - `lg:pt-7` (28 px de respiro acima do texto)
  - texto em 18 px, itálico, cor `tinta/80`

## Card de citação (blockquote)
- Remover centralização no desktop:
  - `lg:max-w-none`
  - `lg:text-left`
- Aumentar o texto da citação no desktop:
  - `lg:text-[22px]`
  - `lg:italic`
  - `lg:leading-[1.5]`
- Aumentar o padding do card no desktop:
  - `lg:p-9` (36 px)
- Aumentar e reposicionar a aspa decorativa:
  - tamanho `72px`
  - cor `ouro-tinta/18`
  - posicionada no canto superior esquerdo do card, sem empurrar o texto (absolute)
- Adicionar respiro entre o card e os parágrafos vizinhos:
  - `lg:my-8` (32 px acima e abaixo)

## Parágrafos da coluna direita
- Aplicar `.texto-justificado` a todos os parágrafos da coluna direita.
- Manter desktop:
  - `lg:text-[18px]`
  - `lg:leading-[1.75]`
- Espaçamento entre os três blocos de texto da direita:
  - `lg:space-y-6` (24 px)

## Inalterado
- Copy/texto: nenhuma palavra será reescrita.
- Mobile (`< lg`): mantém layout, tamanhos e espaçamentos atuais.
- Cores e estilos de fundo permanecem os mesmos.

## Validação
- `bun run build` sem erros.
- Verificação visual no desktop: coluna esquerda preenchida de topo a base, fechamento alinhado com o fim do texto da direita, blockquote sem ilhamento e com aspa reposicionada.