# Plano — Âncoras escuras e ritmo claro da landing page

## Objetivo
Deixar Hero e Oferta como as únicas âncoras escuras da página, limpar completamente os fundos das demais seções e reduzir o ritmo vertical no mobile para 64px, sem alterar textos, conteúdo ou lógica comercial.

## Implementação

### 1. Hero
- Manter `bg-espresso` e substituir o gradiente vertical atual por um único brilho radial quente, sutil, vindo do topo.
- Destacar a expressão-chave do H1 com `ouro-texto`, mantendo Poppins 700 e o restante em `text-pergaminho`.
- Padronizar o subtítulo em Inter 16px e `text-pergaminho/80`.
- Ajustar o rótulo superior para 12px, `tracking-[0.1em]` e `text-ouro-luz`.
- Refinar o contador: caixas `espresso-alt`, borda dourada translúcida de 28%, números Poppins 700 em `ouro-luz` e rótulos de 11px em `pergaminho/70`.
- Encerrar o Hero com corte seco e filete dourado de 1px, sem fade.

### 2. Oferta
- Manter `bg-espresso` e remover textura, ruídos e glows soltos, usando apenas o brilho radial solicitado vindo de baixo.
- Remover o grande invólucro claro que transforma toda a oferta em um card; os entregáveis permanecem individualmente brancos em nível B/C sobre o fundo escuro.
- Adaptar títulos e rótulos da coluna de entregáveis para contraste correto no fundo escuro.
- Manter o card principal do lote em nível C e aplicar ao preço ativo `ouro-texto`, Poppins 700, 52px e números tabulares.
- Trocar o selo de escassez/promocional para `terracota-luz` com texto `espresso`, sem misturar ouro e terracota no mesmo elemento.

### 3. Demais seções e espaçamento
- Preservar a alternância existente entre `bg-pergaminho` e `bg-areia` nas seções claras.
- Remover todos os fundos decorativos, texturas, glows e gradientes dessas seções.
- Trocar `py-24` por `py-16` no mobile, mantendo o espaçamento desktop atual com `lg:py-32`.
- Manter cards, filetes internos e elementos funcionais; remover apenas decoração de fundo.

## Validação
- Confirmar que somente Hero e Oferta usam fundo escuro.
- Conferir em mobile e desktop: ritmo de 64px nas seções claras, legibilidade do contador, Hero sem fade, entregáveis brancos sobre a Oferta escura e preço ativo em 52px.
- Verificar ausência de texturas/gradientes de fundo nas seções claras, overflow horizontal e erros no console.
