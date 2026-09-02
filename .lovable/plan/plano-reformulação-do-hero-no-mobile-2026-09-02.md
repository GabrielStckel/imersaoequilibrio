# Plano — reformulação do Hero no mobile

## Objetivo

Reorganizar apenas o Hero mobile para destacar título, proposta, vídeo, preço e CTA nessa ordem, com alinhamento central e hierarquia comercial mais clara. O desktop mantém sua composição atual.

## Alterações

### 1. Conteúdo e ordem mobile

- Centralizar todo o conteúdo móvel em um contêiner de até 340px.
- Aplicar a ordem:
  1. título;
  2. texto de apoio;
  3. player 16:9;
  4. card de preço.
- Ocultar somente no mobile:
  - “IMERSÃO ONLINE E AO VIVO · 06 E 07 DE OUTUBRO”;
  - “Jonas Peres · Ao vivo pelo Zoom · 19h30 às 21h30”;
  - “ASSISTA ANTES DE GARANTIR SUA VAGA”.
- Preservar esses três textos no desktop.
- Manter literalmente todos os demais textos existentes.

### 2. Título e texto de apoio

- Ajustar o H1 mobile para `clamp(1.5rem, 5.6vw, 2.5rem)`, line-height `1.18`, tracking `-0.02em`, balanceamento de linhas e alinhamento central.
- Remover as quebras rígidas no mobile para permitir no máximo três linhas dentro da largura definida; manter a composição de três linhas do desktop.
- Criar um tratamento dourado claro específico para destaque sobre fundo escuro, com gradiente `linear-gradient(100deg, #C9A83F 0%, #F2DFA0 45%, #C9A83F 100%)`, sem alterar o dourado usado sobre fundos claros.
- Mover o texto de apoio para logo abaixo do H1 no mobile, com 15px, line-height `1.5`, `text-pergaminho/85`, largura máxima de 320px e margem superior de 14px.
- No desktop, conservar a posição atual do texto junto ao vídeo.

### 3. Card de preço mobile

- Reordenar o card apenas no mobile para:
  1. grupo de preço;
  2. CTA;
  3. selo “Pagamento seguro via Hotmart · Garantia incondicional de 7 dias”;
  4. barra e texto de progresso;
  5. rótulo “A imersão começa em” e contador de quatro caixas.
- Montar o grupo de preço centralizado com gap de 4px:
  - “De R$ 797” riscado, 15px e `text-pergaminho/70`;
  - preço dinâmico do lote ativo em Poppins 700, 46px, números tabulares e gradiente dourado claro;
  - parcelamento e nome do lote ativos em 14px e `text-pergaminho/85`.
- Separar o grupo do CTA por 20px.
- Manter o botão em largura total e altura de 52px no mobile, preservando checkout, nome do lote e tracking.
- Centralizar progresso, selo e contador no card móvel.
- Manter a ordem, tamanhos e alinhamentos atuais do bloco no desktop.

## Detalhes técnicos

- Ajustar `Hero.tsx` com variantes responsivas, sem duplicar lógica comercial.
- Estender `PrecoLote.tsx` somente se necessário para aceitar a apresentação móvel sem alterar os usos existentes.
- Adicionar o gradiente claro como utilitário semântico em `src/styles.css`, em vez de aplicar cores soltas no componente.
- Manter o valor global da pilha em R$ 497; “De R$ 797” será uma ancoragem exclusiva do Hero mobile conforme confirmado.

## Validação

- Em 393px, confirmar: contêiner de até 340px, H1 centralizado em no máximo três linhas, texto de apoio logo abaixo, vídeo 16:9 e card na nova ordem.
- Confirmar CTA com 52px, preço em destaque, progresso antes do contador e ausência dos três textos removidos no mobile.
- Em 1280px, confirmar que eyebrow, legenda e linha Jonas/Zoom continuam presentes e que a composição desktop permanece intacta.
- Verificar ausência de overflow, sobreposição, erros no navegador e regressões no checkout/tracking.
