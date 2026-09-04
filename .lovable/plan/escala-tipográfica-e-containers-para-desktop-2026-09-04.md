# Escala tipográfica e containers para desktop

## Objetivo
Criar um sistema visual próprio para desktop a partir de `1024px`, preservando integralmente tudo abaixo do breakpoint `lg` e sem alterar copy, comportamento ou regras mobile/tablet existentes.

## Alterações

### 1. Container desktop compartilhado
- Criar em `src/styles.css` o utilitário `.container-eq`, centralizado, com largura máxima base de `72rem` e `80rem` a partir de `1024px`.
- Substituir `max-w-6xl` por `container-eq` nos containers de Hero, Header, StickyBar, Diagnóstico, Causa Raiz, Método, Para Quem, Cronograma, Autoridade, FAQ e CTA final.
- Remover `mx-auto` apenas desses mesmos elementos, pois o novo utilitário assume a centralização.
- No Hero, preservar `max-w-[340px]` no mobile e ativar `container-eq` no mesmo ponto responsivo em que hoje entra `md:max-w-6xl`, sem ampliar a composição abaixo de `1024px`.

### 2. Escala tipográfica exclusiva de desktop
- Aplicar somente com variantes `lg:`:
  - H1 do Hero: `42px`, line-height `1.12`, tracking `-0.02em`.
  - Todos os H2 da landing, incluindo Oferta e CTA final: `40px`, line-height `1.15`, tracking `-0.02em`.
  - Todos os H3 de cards: `24px`, line-height `1.3`.
  - Parágrafos de abertura: `20px`, line-height `1.6`.
  - Corpo de seção: `18px`, line-height `1.75`.
  - Corpo dentro de cards: `17px`, line-height `1.7`.
  - Itens de lista: `17px`, line-height `1.6`.
  - `SectionLabel`: `13px`, tracking `0.12em`.
  - Legendas e microcopy: mínimo de `14px`.
- Manter em `12px` somente selos/badges, como “BÔNUS” e “LOTE ATUAL”.
- Eliminar no desktop as quatro variações equivalentes de corpo (`0.9375rem`, `0.95rem`, `0.97rem`, `0.98rem`) em favor da categoria única correspondente.
- Ajustar o cabeçalho de Diagnóstico para `lg:grid-cols-[1.25fr_1fr]`, acompanhando o novo H2 de 40px.
- Preservar todas as classes atuais de mobile e tablet; nenhuma classe original será removida para produzir o resultado desktop.

### 3. Limites de largura no desktop
- Método: anular `lg:max-w-[18ch]` dos H3 com `lg:max-w-none`.
- Causa Raiz: ampliar e alinhar o texto da citação com `lg:max-w-none lg:text-left`.
- Causa Raiz e Para Quem: ampliar os leads para `lg:max-w-[68ch]`.
- CTA final: usar `lg:max-w-[22ch]` no H2.
- `ProgressoLote`: usar `lg:max-w-none` sem remover o `max-w-sm` base.
- Oferta: anular `max-w-[38ch]` no texto do lote com `lg:max-w-none`.
- Não introduzir `whitespace-nowrap` nem alterar as regras de quebra existentes.

### 4. Justificação apenas no desktop dos cards
- Adicionar a justificação aos parágrafos dos cards de Diagnóstico, Método e Cronograma somente em `lg`, mantendo-os alinhados à esquerda abaixo de `1024px`.
- Usar uma variante responsiva do utilitário existente para evitar que `.texto-justificado` passe a afetar o mobile desses cards.
- Não justificar títulos, labels, listas, preços, botões ou microcopy.

## Validação
- Conferir por código que toda regra visual nova é `lg:` ou está dentro de `@media (min-width: 1024px)`, exceto a definição-base do novo container, que replica exatamente os `72rem` atuais.
- Validar a landing em `393px` antes/depois para confirmar que nada abaixo de `1024px` mudou.
- Validar em `1024px`, `1440px` e `1920px`: largura de 1280px quando houver espaço, hierarquia tipográfica, quebras, justificação, ausência de overflow e piso de 14px para textos legíveis.
- Verificar que todos os H2 computam para exatamente `40px` no desktop.
- Verificar que todos os parágrafos classificados como corpo de seção computam para exatamente `18px` no desktop; textos internos de cards permanecem na categoria própria de `17px`.
- Executar o build e revisar erros do navegador.
- Informar ao final a contagem pedida: **1 tamanho entre os H2 e 1 tamanho entre os parágrafos de corpo**.

## Detalhes técnicos
- Arquivos principais: `src/styles.css`, componentes compartilhados de label/progresso e as seções da landing em `src/components/sections/`.
- A Oferta entra na padronização tipográfica, mas conserva seu container próprio de `1100px`, pois a lista explícita de substituição por `container-eq` contém somente as 11 áreas indicadas.