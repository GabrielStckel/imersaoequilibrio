# Posicionar o Meta Pixel no topo absoluto do `<head>`

## Objetivo
Garantir que, na rota `/`, o bloco do Meta Pixel seja a primeira coisa renderizada no `<head>` depois apenas de `<meta charset>` e `<meta viewport>`, ficando antes de qualquer `<link>` de CSS, preload ou fonte.

## O que será alterado

### `src/routes/__root.tsx`

1. **Mover `<meta charset>` e `<meta viewport>` para o `RootShell`.**
   - Esses metas deixam de ser emitidos exclusivamente pelo `head()` do root route.
   - Passam a ser renderizados manualmente no início do `<head>` dentro do `RootShell`, de forma incondicional para todas as rotas.

2. **Reordenar o bloco do pixel no `RootShell`.**
   Nova ordem dentro de `<head>` quando `comPixel` for true:
   ```text
   1) <meta charset="utf-8" />
   2) <meta name="viewport" content="width=device-width, initial-scale=1" />
   3) <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="anonymous" />
   4) <link rel="dns-prefetch" href="https://connect.facebook.net" />
   5) <script>/* snippet inline do Meta Pixel */</script>
   6) <HeadContent />  (title, metas, preloads, stylesheets)
   ```

3. **Remover duplicação no `head()` do root route.**
   - Retirar `charSet` e `viewport` do objeto `meta` do `head()` do root route, já que passarão a ser renderizados pelo `RootShell`.
   - Manter os demais metas (`author`, `og:type`, `twitter:card`) e links (stylesheet, preload de fonte, favicon).

4. **Manter `<noscript>` no início do `<body>`.**
   - O `<noscript>` com a tag de imagem do pixel continua sendo renderizado no início do `<body>`, apenas quando `comPixel` for true.

## O que NÃO será alterado
- O conteúdo do snippet do Meta Pixel.
- A condição de renderização do pixel (apenas na rota `/`).
- A lógica de `ViewContent`, `InitiateCheckout` ou UTMify em outros arquivos.
- O `<noscript>` continua no `<body>`, não no `<head>`.

## Verificação
- `bun run build` sem erros.
- Verificar o HTML de `/` via `curl`: a ordem no `<head>` deve ser charset, viewport, preconnect do Facebook, dns-prefetch do Facebook, snippet inline, e só depois title/metas/stylesheet/preload/favicon.
- Verificar `/termos` e `/privacidade`: nenhuma ocorrência de pixel, mas charset/viewport continuam presentes no topo.
