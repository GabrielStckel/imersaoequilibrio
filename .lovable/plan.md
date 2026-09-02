# Ajustes finos mobile — selo e logo

## Escopo
Aplicar alterações exclusivamente no mobile (abaixo do breakpoint `md`). Desktop permanece inalterado.

## 1. Selo "+10 anos como constelador" na seção "Quem conduz"

Arquivo: `src/components/sections/Autoridade.tsx`

- Alterar a posição vertical do primeiro selo (índice 0) para `top-[4%]` no mobile.
- Manter `top-[12%]` no desktop (`lg:`).
- Preservar `left-4`, largura, estilo e o texto em uma única linha.
- Os outros dois selos (`top-[42%]` e `top-[72%]`) permanecem inalterados.

Mudança esperada:
```text
{ classes: "left-4 top-[4%] lg:top-[12%]" }
```

## 2. Logo do header

Arquivo: `src/components/sections/Header.tsx`

- Reduzir a altura da ampulheta para `24px` no mobile (`h-[24px]`).
- Reduzir o espaçamento entre logo e texto para `10px` no mobile (`gap-[10px]`).
- Manter altura 30px e gap 10px (equivalente a `gap-2.5`) a partir de `md`.
- Preservar nome em 14px Poppins 600, uma linha, e altura total do header em 56px.

Mudança esperada no link do logo:
```text
<a ... className="flex min-h-11 min-w-0 items-center gap-[10px] md:gap-2.5 md:py-1">
  <img ... className="h-[24px] w-auto shrink-0 object-contain md:h-[30px]" />
```

## Verificação
- Build (`bun run build`) sem erros.
- Screenshot mobile confirmando selo acima da linha dos olhos e logo menor/mais próximo do nome.
