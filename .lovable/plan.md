# Reestruturar lista "É para você se" na seção ParaQuem

## Objetivo
Reduzir a altura da lista "É para você se:" de ~700px para menos de 380px, consolidando os 5 cards individuais em um único card compacto, alinhado visualmente com o bloco "Esta imersão não é para:".

## Mudanças em `src/components/sections/ParaQuem.tsx`

### 1. Card único para os 5 itens "É para você se:"
- Substituir a `<ul>` atual com 5 `<li>` independentes por um único card envolvendo todos os itens.
- Estilo do card:
  - `background: #FFFFFF`
  - `border: 1px solid #E4DBC6`
  - `border-radius: 18px`
  - `box-shadow: 0 1px 2px rgba(25,21,16,.05), 0 6px 18px rgba(25,21,16,.06)`
  - `padding: 20px 18px`
- Título dentro do card:
  - Texto: "É para você se:"
  - `15px`, `Poppins 600`, `text-tinta`
  - `margin-bottom: 14px`
- Cada item:
  - Grid de 2 colunas: `18px` para ícone, `1fr` para texto, `gap: 12px`
  - Ícone: `<Check size={16} strokeWidth={2} color="#7D5F1C" />`
    - Sem quadrado de fundo, sem borda, sem caixa em volta
  - Texto: `15px`, `Inter 400`, `text-corpo`, `line-height: 1.45`, alinhado à esquerda
  - `padding-top: 11px`, `padding-bottom: 11px` por item
  - Divisor de `1px solid #E4DBC6` entre itens, sem divisor após o último

### 2. Alinhar métricas com o bloco "Esta imersão não é para:"
- Confirmar que o bloco "não é para" usa:
  - `border-radius: 18px`
  - `padding: 20px 18px` (ou equivalente em Tailwind)
  - `line-height: 1.45` nos textos
  - ícone de `16px`
- A única diferença permitida entre os blocos:
  - Fundo: branco (`#FFFFFF`) vs areia (`bg-areia`)
  - Ícone: check dourado (`#7D5F1C`) vs X terracota (`text-terracota`)

### 3. Correção de copy no bloco "Esta imersão não é para:"
Remover o prefixo "Para quem" dos três itens:
- "Quem procura uma solução rápida, sem atravessar o que precisa ser olhado."
- "Quem quer só teoria, sem se expor às vivências e ao próprio movimento interno."
- "Quem não pretende participar ao vivo. A imersão é construída sobre vivências em tempo real: assistir depois entrega a compreensão, mas não a experiência."

## Validação
- Medir a altura da lista "É para você se:" no mobile (< 380px).
- Verificar que os dois blocos compartilham raio, padding, line-height e tamanho de ícone.
- Confirmar que não há caixas de ícone de 44px no card branco.
- Rodar `bun run build` sem erros.
