# Landing Page — Imersão Equilíbrio Sistêmico

Página de vendas one-page (PT-BR), mobile-first, estética editorial premium: off-white quente + dourado + seções escuras. Todo conteúdo variável (datas, preços, lotes, links, pixel, WhatsApp) fica num único arquivo de configuração.

## Design system
- Tokens no `src/styles.css` (`@theme`): bone `#FAF7EF`, cream `#F3ECDD`, ink `#1A160F`, espresso `#12100B`, graphite `#4A443A`, gold `#C2A24C`, gold-deep `#9A7B2E`, gold-soft `#E4D3A3`, line `#E7DFCF`; raio de card 14px e sombra suave.
- Tipografia: Fraunces (títulos) + Inter (corpo), carregadas via `<link>` no root com `display=swap`.
- Regras anti-IA aplicadas: layout assimétrico e alinhado à esquerda, ícones de linha lucide dourados (zero emoji), filetes de 1px como separadores, numeração editorial de seção, muito respiro vertical, micro-animações fade/rise no scroll (300–500ms), sem gradiente colorido.

## Configuração editável (`src/config/imersao.ts`)
Datas do evento, horário, abertura de vendas, curva/percentuais da barra de progresso, valor cheio âncora (R$ 497), os 3 lotes (R$ 47 / R$ 97 / R$ 147 com parcela, data limite e link de checkout), Meta Pixel ID, flag UTMify, texto do CTA, WhatsApp de suporte e textos da seção de autoridade (bio e números placeholder).

## Hooks
- `useCountdown(inicioEvento)` — D/H/M/S, tick de 1s, estado "Estamos ao vivo agora" após a data.
- `useProgressoProgramado()` — % entre abertura de vendas e evento, easing `easeOut` (`1-(1-f)²`), atualiza a cada 60s.
- `useLoteAtivo()` — primeiro lote cuja `ateData` não passou; alimenta preço, parcela e link de todos os CTAs.

## Seções (na ordem)
Barra sticky (mini-countdown + lote + botão), 01 Hero escuro (H1 único, countdown, barra de progresso, preço, CTA, espaço nobre para foto real do Jonas), 02 Diagnóstico (4 cards em grid assimétrico), 03 Causa raiz (com frase-destaque em Fraunces itálico e filete dourado), 04 Método (2 pilares + CTA secundário), 05 Cronograma dos 2 dias (escuro, datas do config), 06 Para quem é (checks de linha), 07 Autoridade (foto + bio + números, placeholders), 08 Oferta escura (stack de valor, bloco de preço, tabela dos 3 lotes com o ativo em destaque, selos e garantia, CTA grande), 09 FAQ em accordion, 10 CTA final + rodapé.

Cada seção é um arquivo em `src/components/sections/`, lendo tudo do config.

## Rastreio e SEO
- Meta Pixel injetado no root (só quando o ID estiver preenchido) com `PageView`; `InitiateCheckout` disparado em qualquer clique de CTA. Script UTMify condicionado à flag.
- `head()` próprio na rota `/` com title/description/og/twitter específicos da imersão; H1 único, imagens com dimensões e lazy loading, foco visível e aria nos botões.

## Placeholders (você me passa depois)
Links Hotmart por lote, Meta Pixel ID, fotos do Jonas e números de autoridade, WhatsApp de suporte, parcelamento real. Ficam todos no config — troca sem mexer no visual.
