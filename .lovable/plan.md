# Plano: três ajustes finos

## Escopo
Aplicar apenas os três ajustes solicitados, sem alterar a seção de oferta, o bloco de mídia do Hero, o texto dos botões ou outras seções.

## 1. Resíduo do corte dos botões
**Arquivos:** `src/components/sections/Diagnostico.tsx`, `src/components/sections/CausaRaiz.tsx`, `src/components/sections/Metodo.tsx`

Trocar `pb-14` por `pb-0` no wrapper final de cada uma das três seções, mantendo `mt-12`/`mt-14`/`mt-16`, `border-t` e `pt-8`:

- `Diagnostico.tsx` — wrapper com `mt-14 border-t border-borda pt-8 pb-14` vira `... pb-0`
- `CausaRaiz.tsx` — wrapper com `mt-16 border-t border-borda pt-8 pb-14` vira `... pb-0`
- `Metodo.tsx` — wrapper com `mt-12 border-t border-borda pt-8 pb-14` vira `... pb-0`

## 2. Remover linha de segurança do Hero
**Arquivo:** `src/components/sections/Hero.tsx`

Remover o parágrafo `"Pagamento seguro via Hotmart · Garantia incondicional de 7 dias"`:

- Do bloco mobile (`MobilePurchase`), logo após o CTA.
- Do bloco desktop (`DesktopPurchase`), logo após o CTA.

A seção de oferta e seu selo Hotmart permanecem intactos.

## 3. Destacar a data no Hero (mobile)
**Arquivo:** `src/components/sections/Hero.tsx`

Substituir a linha atual de data no `MobilePurchase` por um bloco com ícone de calendário e duas linhas empilhadas:

- Container: `md:hidden mx-auto mt-[14px] inline-flex items-center gap-[10px] rounded-[12px] border border-ouro/35 bg-[rgb(34_28_18_/_0.55)] px-[14px] py-[10px]`
- Ícone: `Calendar` do `lucide-react`, 16px, `strokeWidth={1.5}`, cor `text-ouro-luz`
- Linha 1: `"06 e 07 de outubro"` — `font-display text-[13px] font-semibold text-ouro-luz whitespace-nowrap`
- Linha 2: `"19h30 às 21h30 · ao vivo pelo Zoom"` — `font-body text-xs text-pergaminho/80 whitespace-nowrap`

Adicionar import do ícone `Calendar` no topo do arquivo.

## Verificação
- `bun run build` deve passar.
- Screenshot mobile do Hero deve mostrar o novo bloco de data abaixo do botão, sem a linha de segurança.
- Screenshot das três seções ajustadas não deve apresentar espaço vazio de 56px abaixo do filete.