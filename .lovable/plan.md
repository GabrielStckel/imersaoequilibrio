# Atualizar paleta e tipografia da landing page

## Objetivo
Trocar somente o sistema visual da landing page e das páginas legais: cores, fontes, contraste, tamanhos mínimos e tracking. Nenhum texto, ordem, conteúdo ou estrutura de seção será alterado.

## Implementação

1. **Substituir os tokens globais de cor**
   - Como o projeto usa Tailwind v4, definir a nova paleta em `src/styles.css`, sem criar `tailwind.config`.
   - Registrar `pergaminho`, `areia`, `espresso`, `espresso-alt`, `tinta`, `corpo`, `ouro-tinta`, `ouro`, `ouro-luz`, `terracota`, `terracota-luz`, `borda` e `borda-forte`.
   - Atualizar também fundo/cor padrão do `body`, seleção de texto e tokens semânticos relevantes para manter o sistema consistente.
   - Remover os tokens antigos que deixarem de ser usados.

2. **Aplicar a paleta por contexto em toda a interface**
   - Migrar fundos principais claros para `pergaminho`, seções alternadas para `areia` e cards claros para branco.
   - Manter apenas Hero e Oferta como grandes seções escuras; usar `espresso-alt` nas superfícies internas escuras.
   - Em fundos claros, usar `tinta` para títulos, `corpo` para leitura e `ouro-tinta` para rótulos/acento.
   - Em fundos escuros, usar `pergaminho` com opacidade mínima de 80% para texto secundário e `ouro-luz` para destaques dourados.
   - Migrar bordas para `borda`/`borda-forte` e usar `ouro` em ícones, filetes e detalhes visuais.
   - Preservar opacidades apenas em elementos decorativos sem função de leitura; remover transparência dos textos sobre fundos claros.

3. **Carregar e mapear as novas fontes**
   - Atualizar o `<link>` do Google Fonts em `src/routes/__root.tsx` para Poppins 500/600/700 e Inter 400/500/600.
   - Mapear `font-display` para Poppins e `font-sans`/`font-body` para Inter em `src/styles.css`.
   - Garantir Poppins em `h1`, `h2`, `h3`, preços, números do contador e texto dos CTAs.
   - Remover qualquer alias ou uso residual de `font-serif`.
   - Padronizar títulos com `letter-spacing: -0.02em`.

4. **Corrigir escala e legibilidade**
   - Alterar o H1 do Hero para `clamp(1.75rem, 6.2vw, 3rem)` e `line-height: 1.12`, mantendo as três linhas e a estrutura existentes.
   - Elevar toda microcopy/rótulo para no mínimo 12px.
   - Elevar corpo de texto para no mínimo 15px.
   - Limitar tracking de rótulos e legendas a `0.12em`.
   - Revisar os componentes compartilhados (`SectionLabel`, `Countdown`, `CtaButton`, `PrecoLote`, `ProgressoLote`) e todas as seções para que a regra seja consistente em mobile e desktop.

5. **Validar sem regressões**
   - Confirmar que nenhum token antigo, `font-serif`, texto abaixo de 12px, corpo abaixo de 15px ou tracking acima de `0.12em` permaneceu na landing page.
   - Verificar visualmente mobile e desktop, com foco no Hero, Header, cards, Oferta, preços, contador e CTAs.
   - Confirmar contraste, ausência de cortes/overlaps e preservação integral da copy e da estrutura.
   - Executar os testes/build disponíveis e checar erros no navegador.

## Arquivos previstos
- `src/styles.css`
- `src/routes/__root.tsx`
- `src/routes/index.tsx`, `src/routes/privacidade.tsx`, `src/routes/termos.tsx`
- Componentes visuais compartilhados e todas as seções em `src/components/`

## Limites
- Sem mudanças em textos, dados, links, tracking, lógica de lotes, countdown ou estrutura das seções.
- Sem redesenho de layout; ajustes dimensionais serão somente os necessários para cumprir os pisos tipográficos e evitar quebra de conteúdo.
