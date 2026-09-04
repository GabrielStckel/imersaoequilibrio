# Reorganizar a seção de oferta (desktop)

Mudanças apenas em `lg:` — mobile e tablet permanecem exatamente como estão. Nenhuma palavra da copy muda.

## 1. Liberar o sticky

Remover o `overflow-hidden` da `<section id="oferta">`. O gradiente decorativo é `absolute inset-0`, então não transborda; o `overflow-hidden` só estava desativando `position: sticky` nos filhos.

## 2. Nova estrutura em duas colunas

- Container passa de `max-w-[1100px]` para `max-w-[1280px]` no desktop.
- Linha 1: cabeçalho como hoje, largura total, centralizado (h2 já em 40px, limitado a 2 linhas).
- Linha 2: grade `lg:grid lg:grid-cols-[1fr_520px] lg:gap-14 lg:items-start`, com respiro acima.

## 3. Coluna esquerda — dois blocos

**Bloco A — "O QUE ESTÁ INCLUÍDO"** (rótulo 13px, tracking 0.12em, caixa alta, ouro-luz)
- Os itens de `stackValor` sem `bonus`.
- Perde o card claro (`bg-pergaminho`, borda, sombra) e vira lista limpa sobre o fundo escuro, mantendo os divisores entre itens.
- Itens em 17px, leading 1.6, check dourado em quadrado de 24px.

**Bloco B — "BÔNUS · R$ 197"** (mesmo formato do rótulo, em terracota)
- Os itens com `bonus: true`.
- Moldura própria: borda 1px `rgb(201 168 63 / 0.30)`, raio 16px, padding 28px, fundo `rgb(201 168 63 / 0.06)`.
- 32px de respiro entre o bloco A e o bloco B.
- O selo "BÔNUS" dentro do item é removido — a moldura e o rótulo já comunicam isso.

No mobile os dois blocos continuam empilhados, na mesma ordem de leitura atual.

## 4. Coluna direita — o card de preço vira o ponto claro

Card com `lg:sticky lg:top-[110px]`, 520px, padding 40px, raio 22px:
- Fundo `#FCFBF8`, borda 1px `#E4DBC6`, sombra `0 4px 12px rgb(0 0 0 / 0.30), 0 24px 60px rgb(0 0 0 / 0.40)`.
- "1º Lote · Valor promocional" em `text-ouro-tinta`.
- Composição de valor: rótulo `text-corpo`, valor `text-tinta`.
- "Valor total R$ 797" riscado em `text-corpo/55`.
- Preço "R$ 47" em 64px, `text-ouro-tinta` sólido (sem gradiente).
- Cards de lote: fundo branco, borda 1px `#E4DBC6`; o ativo com borda 1.5px `#7D5F1C`.
- Botão: mantém o gradiente metálico com borda 1px `#7D5F1C`, sem o brilho branco interno (`inset`) — via uma variação do estilo do botão para superfície clara.
- `ProgressoLote` com `tone="light"`.
- Selo Hotmart mantido, com textos em `text-tinta` / `text-corpo`.

Todas as inversões de cor são aplicadas só em `lg:`; no mobile o card escuro atual é preservado.

## 5. Bug do parcelamento

No card do lote ativo, o texto fixo "5x de R$ 9,68" é trocado por `{lote.parcela.replace("ou ", "")}`, para acompanhar o lote correto quando o 2º entrar.

## 6. Verificação

Medição no navegador (1440px+) confirmando:
- topo do bloco de bônus e topo do card de preço na mesma altura;
- o card acompanha a rolagem da lista da esquerda (sticky ativo);
- altura total da seção próxima de 1.150px.

## Notas técnicas

- O card de preço já é envolvido por um `Reveal`, que aplica `transform` durante a animação. O `sticky` será aplicado no próprio elemento `Reveal` (o item da grade), não no card interno, senão o transform do wrapper limita o deslocamento.
- Para o botão sem brilho interno sobre fundo claro, será adicionada uma variação em `src/styles.css` (mesma base metálica, sem o `inset` branco) usada só na versão desktop do card.
