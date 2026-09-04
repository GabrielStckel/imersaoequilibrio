# Otimizar carregamento das fontes

## Objetivo
Reduzir de seis para cinco os arquivos de fonte baixados e priorizar os dois pesos críticos da primeira dobra com preload.

## Alterações

### 1. `src/styles.css`
- Remover `@import "@fontsource/poppins/latin-500.css";`.
- Manter os outros cinco imports: Inter 400/500/600 e Poppins 600/700.

### 2. `src/components/sections/CausaRaiz.tsx`
- Localizar as duas ocorrências de `font-display` combinado com `font-medium`.
- Trocar `font-medium` por `font-semibold` em ambas, eliminando a dependência do Poppins 500.

### 3. `src/routes/__root.tsx`
- Adicionar o import:
  ```ts
  import inter400Woff2 from "@fontsource/inter/files/inter-latin-400-normal.woff2?url";
  ```
- Adicionar no array `links` do `head()` uma tag de preload para o Inter 400, no mesmo padrão do Poppins 700:
  ```ts
  {
    rel: "preload",
    href: inter400Woff2,
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  }
  ```

## O que NÃO será alterado
- Nenhuma fonte será migrada para CDN do Google Fonts.
- Pesos do Inter permanecem intactos.
- Tamanhos de fonte, espaçamentos e layout não serão mexidos.

## Verificação
- `src/styles.css` deve conter **cinco** `@import` de fontsource.
- `src/routes/__root.tsx` deve conter **duas** tags `rel="preload"` de fonte.
