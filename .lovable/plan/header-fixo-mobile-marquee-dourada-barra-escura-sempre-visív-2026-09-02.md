# Header fixo mobile: marquee dourada + barra escura, sempre visíveis

## Objetivo
Transformar o header em uma barra única de duas faixas fixas e claramente separadas: marquee clara (dourada) em cima, header escuro embaixo. Sem lógica de esconder ao rolar.

## Alterações em `src/components/sections/Header.tsx`

### 1. Remover comportamento de esconder ao rolar
- Remover o `useEffect` de scroll, os estados `compacto`, `ultimaRolagem`, `rolagemAcumulada` e as classes de transição `grid-rows-[0fr]/[1fr]`.
- Marquee e header ficam sempre visíveis, empilhados.

### 2. Marquee (faixa de cima)
- Altura 28px com padding vertical 6px.
- Fundo: gradiente dourado metálico (classe `ouro-metal` já existente), texto em `text-espresso`.
- Texto: 11px, Inter 600, tracking 0.08em, caixa alta.
- Manter os mesmos textos e a animação horizontal `eqMarquee`.
- Separador entre frases: losango `◆` em `text-espresso/50` (substitui o `✦` dourado atual).

### 3. Header (faixa de baixo)
- Altura 56px, fundo `#16130D` sólido (`bg-espresso`), sem `backdrop-blur`.
- Borda inferior: `1px solid rgba(201,168,63,.28)` (`border-ouro/28` aproximado via valor arbitrário).
- Esquerda: selo da balança em 30px + "Equilíbrio Sistêmico" em uma linha: 14px, Poppins 600, letter-spacing -0.01em, `whitespace-nowrap` (remove o `max-w-[126px]` que forçava a quebra).
- Direita (mobile): contador em duas linhas alinhado à direita:
  - Linha 1: "COMEÇA EM", 9px, tracking 0.12em, `text-ouro-luz`.
  - Linha 2: countdown, 15px, Poppins 600, `text-pergaminho`, `tabular-nums` (já presente no `CountdownInline`).
- Desktop (`md:`): manter countdown inline + CTA como hoje.
- Remover a barrinha de progresso de 2px abaixo do header (e o uso de `useProgressoProgramado` no Header se ficar sem uso).

### 4. Altura total e espaçamento
- Nova altura fixa: 28 + 56 = 84px (contra ~89px atuais).
- Como o header é `sticky` (em fluxo), o conteúdo se ajusta automaticamente; verificar visualmente que o topo do Hero não fica escondido nem com espaço excessivo e ajustar o `pt` do Hero apenas se necessário.

## Verificação
- `bun run build`.
- Playwright mobile (390px): medir altura total = 84px; confirmar nome em uma linha, marquee dourada com texto espresso, separação visual entre faixas, countdown em duas linhas, sem overflow horizontal.
- Rolar a página e confirmar que marquee e header permanecem fixos e visíveis.
- Desktop: conferir que o header desktop segue intacto.
