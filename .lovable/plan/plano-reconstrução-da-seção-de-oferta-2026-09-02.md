# Plano — Reconstrução da seção de oferta

## Objetivo
Reorganizar a oferta em uma hierarquia comercial clara: três entregáveis brancos, uma pilha de valor compacta, lotes legíveis e CTA centralizado, mantendo os textos dos entregáveis, da oferta, da garantia e da segurança.

## Estrutura

### 1. Cabeçalho da seção
- Manter o rótulo “GARANTA SUA VAGA” e o subtítulo atuais.
- Ajustar o título para Poppins 700, 30px no mobile, com `ainda hoje` em `ouro-texto` e sem o sublinhado atual.
- Limitar a seção inteira a 1100px de largura.

### 2. Entregáveis sem wrapper externo
- Remover o cabeçalho/wrapper “TUDO INCLUSO NO SEU ACESSO”.
- Usar somente os três entregáveis reais da configuração; o item “Valor total do programa” deixa de ser card.
- Renderizar os três cards diretamente sobre o fundo escuro, com gap de 20px e alturas iguais:
  - mobile: uma coluna;
  - tablet: duas colunas, com o bônus ocupando a segunda linha inteira;
  - desktop: três colunas.
- Aplicar nível B branco, ícone 44px, título Poppins 600/19px e descrição Inter 15px.
- Adicionar selo `INCLUSO` contornado nos dois primeiros e `BÔNUS` em terracota com texto claro no terceiro.
- Não exibir números decorativos.

### 3. Pilha de valor
- Substituir o quarto card por um bloco centralizado de no máximo 560px, com fundo escuro, borda dourada translúcida e raio de 18px.
- Exibir as três linhas de composição e valores informados, usando alinhamento responsivo entre rótulo e valor e números tabulares.
- Separar o total com filete e mostrar:
  - `Valor total — R$ 497` riscado e secundário;
  - `Hoje você paga — R$ 47` em `ouro-texto`, Poppins 700 e 44px.
- Preservar a força da soma mantendo rótulos e valores próximos mesmo em telas largas.

### 4. Lotes, ação e segurança
- Posicionar os três lotes logo abaixo da pilha, em uma grade limitada aos mesmos 560px: três colunas em desktop e uma composição compacta sem overflow no mobile.
- Destacar o lote ativo com borda dourada e selo `LOTE ATUAL` em terracota-luz com texto espresso.
- Aplicar rótulos em `ouro-luz` 12px, valores em `pergaminho/90` e “Em breve” em `pergaminho/70` 12px.
- Centralizar CTA, progresso, pagamento e garantia dentro dos mesmos 560px.
- Elevar os textos de segurança e garantia para 13px em `pergaminho/85`, mantendo o cadeado em `ouro-luz`.
- Preservar a seleção automática do lote ativo, checkout, CTA dinâmico e progresso existentes.

## Detalhes técnicos
- Atualizar a configuração para que `stackValor` represente apenas os três entregáveis; a pilha de valores será uma estrutura comercial própria, sem duplicar o quarto card.
- Reutilizar os tokens e utilitários existentes (`card-nivel-b`, `icone-card`, `ouro-texto`, `filete-ouro`) e classes semânticas da paleta.
- Manter o brilho radial e o fundo espresso já aplicados à seção.

## Validação
- Conferir mobile, tablet e desktop: 1/2/3 colunas para entregáveis, bônus em largura total no tablet, cards com mesma altura no desktop e ausência do wrapper antigo.
- Confirmar pilha e lotes centralizados em 560px, seção limitada a 1100px, contraste dos lotes/garantia e ausência de overflow.
- Verificar lote ativo, CTA, progresso, console e textos preservados.
