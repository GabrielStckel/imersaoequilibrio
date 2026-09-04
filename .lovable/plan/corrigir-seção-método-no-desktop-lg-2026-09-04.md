# Corrigir seção "Método" no desktop (lg:)

## Objetivo
Alinhar os dois cards de pilares na seção `Metodo.tsx` equalizando alturas de título e ancorando as listas na base, sem alterar o mobile.

## Cabeçalho da seção
- No grid do cabeçalho:
  - `lg:items-end` → `lg:items-start`
- No parágrafo de abertura:
  - Remover `lg:pb-2`
  - Adicionar `texto-justificado`
  - Manter `lg:text-[20px]` e `lg:leading-[1.6]`

## Cards de pilares
### Título (h3)
- Garantir `lg:max-w-none`
- Adicionar `lg:min-h-[62px]` para forçar 2 linhas de altura em ambos os títulos
- Manter `lg:text-[24px]` e `lg:leading-[1.3]`

### Tipografia interna (lg:)
- Rótulo do pilar: `lg:text-[13px]`, manter `uppercase tracking-[0.12em] text-ouro-tinta`
- Parágrafo: manter `lg:text-[17px] lg:leading-[1.7]` e `lg:texto-justificado`
- Itens da lista: `lg:text-[17px] lg:leading-[1.6]` e `lg:space-y-3` (12 px entre bullets)
- Padding do card: `lg:p-9` (36 px)

### Ancorar lista na base
- Adicionar `lg:mt-auto` ao `<ul>` de bullets
- Isso empurra o divisor + lista para a base do card, independente do tamanho do parágrafo

## Fechamento
- No container do fechamento:
  - `lg:mt-10` (40 px de respiro acima)
  - Centralizar em desktop: `lg:text-center lg:mx-auto`
  - Remover a limitação de largura no desktop: `lg:max-w-none`
- Texto: manter `lg:text-[18px] lg:leading-[1.75]`

## Inalterado
- Copy/texto: nenhuma palavra será reescrita.
- Mobile (`< lg`): mantém layout, tamanhos e espaçamentos atuais.
- Cores e estilos de fundo permanecem os mesmos.

## Validação
- `bun run build` sem erros.
- Verificação visual no desktop: divisores acima das listas de bullets nos dois cards exatamente na mesma altura.