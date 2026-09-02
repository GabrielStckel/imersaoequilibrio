# Reorganizar visualmente a seção de oferta

## Objetivo
Quebrar a sensação de campo escuro contínuo com dois blocos visualmente distintos: entregáveis em um card claro e toda a conversão/preço em um único bloco escuro premium, reduzindo a altura mobile para aproximadamente 1.550px.

## Alterações

### 1. Checklist em card claro
- Manter o título da seção sobre o fundo espresso atual.
- Transformar somente a lista de entregáveis em um card `#FCFBF8`, raio de 20px, borda `#E4DBC6`, padding `22px 18px` e a sombra dupla especificada.
- Adaptar checks, textos e divisores para o fundo claro usando os tokens existentes equivalentes a ouro-tinta, corpo e borda.
- Preservar o selo “BÔNUS” em terracota com texto branco.

### 2. Consolidar o preço em um bloco escuro
- Envolver chamada promocional, composição de valor, preço principal, cards de lote, CTA, progresso e selo Hotmart em um único painel `#221C12`.
- Aplicar borda dourada translúcida, raio de 22px, padding `26px 20px` e margem superior de 36px.
- Ajustar a hierarquia interna: chamada em ouro-luz, rótulos em pergaminho/85, valores em pergaminho, total riscado em pergaminho/50 e preço principal em Poppins 700 de 46px com o gradiente dourado claro já disponível no design system.
- Manter os cards de lote e o botão metálico com o comportamento e estilo atuais.

### 3. Preservar a barra de progresso
- Não alterar componente, lógica, texto, número, cores, tamanho ou posição relativa da barra de progresso.
- Apenas mantê-la dentro do novo agrupamento escuro, na mesma ordem atual após o CTA.

### 4. Reorganizar o selo Hotmart
- Criar três linhas centralizadas: chama + “Hotmart”; “Pagamento Seguro”; “Garantia incondicional de 7 dias”.
- Aplicar os tamanhos, pesos, cores e espaçamento de 4px solicitados.
- Manter a chama como SVG inline em laranja e adicionar o filete dourado translúcido com 20px de respiro acima.

### 5. Compactação e verificação
- Reduzir espaços verticais redundantes dentro da oferta sem comprimir a leitura, mirando cerca de 1.550px de altura em 393px de largura.
- Verificar no mobile: altura total, ausência de overflow, contraste do checklist e agrupamento integral do preço no painel escuro.
- Verificar no desktop para garantir que o layout continue equilibrado.
- Confirmar que a barra de progresso permanece visual e funcionalmente igual e executar a validação do projeto.

## Arquivos previstos
- `src/components/sections/Oferta.tsx`

Nenhuma mudança será feita na lógica/configuração da barra de progresso.
