# Reorganizar a barra fixa do rodapé mobile (StickyBar)

Arquivo: `src/components/sections/StickyBar.tsx` (único alterado). Manter a lógica de visibilidade atual (aparece após 600px de rolagem, some quando a oferta está visível, só mobile).

## 1. Borda superior de escassez (3px)
- Linha no topo absoluto da barra, largura total: trilho `rgba(201,168,63,.20)`, preenchimento com gradiente dourado (`.ouro-metal`) e `width: {pct}%` via `useProgressoProgramado()`.
- Substitui a informação de escassez em texto (hoje não há barra visual; o % sai da linha de texto e vira esse preenchimento).

## 2. Coluna esquerda (flex-1, min-w-0)
- Linha 1: `{lote.nome} · {pct}% VENDIDO` — 9px, tracking 0.1em, caixa alta, `text-ouro-luz`.
- Linha 2 (2px abaixo, `items-baseline`):
  - `{lote.preco}` — Poppins 700, 24px, `text-pergaminho`, `tabular-nums`.
  - `{IMERSAO.valorCheio}` (já é "R$ 797") — 13px, `text-pergaminho/50`, line-through, ml-2.

## 3. Botão à direita (pílula)
- `CtaButton` com label "Garantir vaga", `origem="sticky-mobile"`.
- Altura 44px, padding-x 22px, `rounded-full`, `shrink-0`, texto 15px Poppins 600 `text-espresso` sobre gradiente dourado.
- Sem seta. Verificar se `CtaButton` renderiza seta por padrão; se sim, ocultá-la neste uso (prop ou classe) sem afetar os demais CTAs.

## 4. Barra
- Fundo `#16130D` sólido (`bg-espresso`), `shadow-[0_-6px_20px_rgba(0,0,0,.40)]`.
- Padding `10px 16px` + `padding-bottom: max(10px, env(safe-area-inset-bottom))`.
- `items-center`, altura total ~68px + safe area.
- Remover o `border-t` (a borda viva de 3px assume esse papel).

## Verificação
- `bun run build`.
- Playwright mobile (390px): rolar até a barra aparecer; medir altura (~68px), conferir alinhamento de base dos preços, pílula sem seta, barra de 3px com 8% de preenchimento, sem overflow; confirmar que some na seção de oferta.
