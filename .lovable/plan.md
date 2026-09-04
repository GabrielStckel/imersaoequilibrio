# Acelerar o carregamento no celular

O vídeo do topo hoje é baixado com prioridade máxima, disputando banda com as fontes e o estilo da página. A mudança adia esse download para quando o navegador estiver livre, sem alterar nada do que aparece na tela.

## O que muda

1. **Cabeçalho da página (`src/routes/__root.tsx`)**
   - Remover as três tags `rel="preload"` do player (dois scripts e o vídeo `main.m3u8`).
   - Trocar os `dns-prefetch` de `scripts.converteai.net` e `cdn.converteai.net` por `preconnect` com `crossOrigin="anonymous"`.
   - Manter intactos: snippet do Meta Pixel, `VTURB_PLT_SNIPPET`, preconnect do Facebook, e os dns-prefetch de `images.converteai.net` e `license.vturb.com`.
   - Resultado: sobra exatamente **um** `rel="preload"` no arquivo, o da fonte Poppins 700.

2. **Carregamento sob demanda (`src/components/sections/Hero.tsx`, `HeroVideo`)**
   - Manter a trava anti-duplicidade (`document.querySelector`) e a tag `<vturb-smartplayer>` com o placeholder 16/9 (CLS zero).
   - Agendar a injeção do script com `requestIdleCallback` (timeout 2000 ms); fallback `setTimeout` de 1200 ms quando a API não existir.
   - Listener `pointerdown` com `{ once: true }` no wrapper do player: se a pessoa tocar no vídeo antes, o script é injetado na hora e o agendamento é cancelado.
   - Cleanup do `useEffect` cancela o agendamento e remove o listener.

## Não muda
Layout, textos, imagens, demais seções e o Meta Pixel permanecem exatamente como estão. Nada de IntersectionObserver.

## Verificação
Contar as ocorrências de `rel="preload"` em `__root.tsx` (esperado: 1) e conferir no navegador que o player só carrega após a ociosidade ou ao toque no vídeo.
