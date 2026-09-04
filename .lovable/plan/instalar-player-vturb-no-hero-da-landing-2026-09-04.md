# Instalar player VTurb no hero da landing

Substituir o placeholder (foto do Jonas) pelo player VTurb, com injeção de script via `useEffect`, tipagem do custom element, preloads no `<head>` apenas na rota `/`, e remoção do `aspect-video` para evitar duplicar a proporção 16:9 do placeholder do VTurb.

## 1. src/config/imersao.ts

Substituir o bloco `video` por:

```ts
video: {
  vturb: {
    contaId: "ac22f9bb-c7ee-4060-9a6e-7ec3b5fa2ff8",
    playerId: "6a9ab15b1b648a12b9944656",
    videoId: "6a9ab13b0d0169708604d657",
  },
  legenda: "Assista antes de garantir sua vaga",
},
```

- Remover `embedUrl` e todas as referências a ele (hoje usado no `HeroVideo` para alternar iframe/img).
- `playerId` e `videoId` são parecidos mas diferentes — manter exatamente os valores acima.

## 2. Novo arquivo: src/types/vturb.d.ts

Declaração do custom element para o TypeScript (corrigindo a sintaxe do exemplo — `DetailedHTMLProps<...>` com os colchetes angulares completos):

```ts
declare namespace React {
  namespace JSX {
    interface IntrinsicElements {
      "vturb-smartplayer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { id?: string };
    }
  }
}
```

> Na prática, o TypeScript 5 já resolve `JSX.IntrinsicElements` global via `react/jsx-runtime`; se o namespace `React.JSX` não bastar, uso a declaração global equivalente — o efeito para o build é o mesmo.

## 3. src/components/sections/Hero.tsx — reescrever HeroVideo

- `useEffect` injeta `<script src="https://scripts.converteai.net/<contaId>/players/<playerId>/v4/player.js" async>` no `document.head`, com trava `document.querySelector(\`script[src="${scriptSrc}"]\`)` para não registrar o custom element duas vezes no StrictMode.
- Estrutura do player:

```tsx
<vturb-smartplayer id={elementoId} style={{ display: "block", margin: "0 auto", width: "100%" }}>
  <div className="vturb-player-placeholder" style={{ position: "relative", width: "100%", padding: "56.25% 0 0", zIndex: 0, backgroundColor: "black" }} />
</vturb-smartplayer>
```

dentro da moldura existente, porém:

- **REMOVER** `aspect-video` da div container (o placeholder já dá o 16:9 via padding 56.25%).
- **MANTER** `overflow-hidden` e `rounded-card` (arredondam o canto do player).
- **REMOVER** a `<img>` de fallback do Jonas e todo o condicional `embedUrl ? iframe : img`.
- **REMOVER** a legenda "Assista antes de garantir sua vaga" exibida quando não há embed.
- Manter intactos o texto de apoio e a linha "Jonas Peres · Ao vivo pelo Zoom · 19h30 às 21h30" (versão desktop).
- Importar `useEffect` do react.
- Nenhum botão de play, overlay ou moldura sobre o player.

## 4. src/routes/__root.tsx — preloads no `<head>`

No `RootShell`, dentro do bloco `{comPixel && (...)}` (só na rota `/`), adicionar na ordem:

1. Script `_plt` (antes dos preloads):
   `<script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: "!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);" }} />`
2. `<link rel="preload" as="script" href=".../players/6a9ab15b1b648a12b9944656/v4/player.js" />`
3. `<link rel="preload" as="script" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" />`
4. `<link rel="preload" as="fetch" crossOrigin="anonymous" href="https://cdn.converteai.net/ac22f9bb-c7ee-4060-9a6e-7ec3b5fa2ff8/6a9ab13b0d0169708604d657/main.m3u8" />` (o `crossOrigin` evita download duplicado)
5. `<link rel="dns-prefetch">` para `cdn.converteai.net`, `scripts.converteai.net`, `images.converteai.net`, `license.vturb.com`.

Para os hrefs do player e do m3u8, montar a URL a partir de `IMERSAO.video.vturb` (fonte única de verdade), em vez de duplicar os IDs.

## 5. Não alterar

- Nada fora do `HeroVideo` e do `<head>` do `RootShell`.
- Layout do hero, grade, título e bloco de preço ficam como estão.
- Nenhum fallback de imagem nem placeholder próprio além do do VTurb.

## Verificação

1. `bun run build` sem erros (inclui a tipagem do custom element).
2. Playwright em `http://localhost:8080/` (viewport 1280x1800):
   - player renderiza e dá play;
   - console sem "custom element already defined" nem erros de script;
   - altura do bloco de vídeo coerente com 16:9 (sem caixa alta demais).
3. `curl` em `/termos` e `/privacidade`: zero ocorrências de `converteai`/`vturb` (preloads e script só na `/`).

## Detalhes técnicos

- O `<head>` é SSR: os preloads saem no HTML inicial; o `player.js` pesado só baixa via `useEffect` pós-hidratação, e o preload `as="script"` só adianta o download.
- O `noscript`/pixel existentes permanecem intocados.
