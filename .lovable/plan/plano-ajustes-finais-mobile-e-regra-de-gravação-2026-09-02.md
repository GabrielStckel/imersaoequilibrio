# Plano — ajustes finais mobile e regra de gravação

## Objetivo

Aplicar os últimos ajustes de usabilidade mobile, melhorar a performance das fontes e remover qualquer promessa de gravação incluída no ingresso. A gravação passa a existir apenas como opção externa no checkout, sem card, preço, seção ou promessa visual na landing page.

## Alterações

### 1. CTA fixo no rodapé do mobile

- Recriar `src/components/sections/StickyBar.tsx` como uma barra inferior visível somente abaixo de `md`.
- Exibir após aproximadamente 600px de rolagem, com fade de 200ms e respeito a `prefers-reduced-motion`.
- Usar fundo `#16130D`, borda superior `rgba(201,168,63,.30)` e sombra superior.
- Mostrar lote ativo, preço promocional e valor cheio riscado.
- Botão à direita com `botao-ouro-metal`, texto “Garantir vaga”, altura mínima de 48px e checkout/tracking preservados.
- Aplicar `env(safe-area-inset-bottom)` e padding final de 76px na página para evitar sobreposição do rodapé.
- A barra permanece oculta enquanto a seção `#oferta` estiver visível na viewport, para não competir com o CTA principal da oferta.

### 2. Header fixo mais compacto

- Adicionar detecção de direção da rolagem no header.
- Esconder a marquee ao rolar para baixo e restaurá-la ao rolar para cima, mantendo o header fixo.
- Manter o comportamento no desktop se já estiver adequado; a redução de altura é prioridade no mobile.
- Garantir que o botão do header tenha no mínimo 44px de altura.

### 3. Alvos de toque

- Adicionar padding vertical suficiente nos links do rodapé (`Termos`, `Privacidade` e `WhatsApp`) para alcançar pelo menos 44px de área clicável.
- Revisar os demais links e botões visíveis na home para não deixar alvo interativo abaixo de 44px.

### 4. Bloco “para quem não é”

- Adicionar ao final de `ParaQuem.tsx` um bloco de qualificação negativa com três itens:
  - quem procura solução rápida;
  - quem quer só teoria sem se expor;
  - quem não pretende participar ao vivo, usando o texto exato fornecido sobre vivências em tempo real.
- Usar ícone `X` em `text-terracota` e estilo visual compatível com os cards atuais, sem transformar o bloco em uma nova seção de venda.

### 5. FAQ com seis perguntas

- Expandir o FAQ de 3 para 6 itens.
- Acrescentar:
  - “Preciso ter experiência com terapia sistêmica?”
  - “O que exatamente eu recebo depois da compra?”
  - “Como funciona a garantia de 7 dias?”
- Substituir a resposta de “E se eu não puder assistir ao vivo?” pelo texto exato informado.
- Remover a promessa atual de gravação por 6 meses.

### 6. Remover gravação como benefício da página

- Remover menções a “6 meses de acesso”, “acesso à gravação”, “replay” e acesso vitalício onde aparecerem.
- Atualizar os Termos de Uso para deixar claro que o ingresso inclui os dois encontros ao vivo; a gravação não é incluída, é opcional no checkout e não pode ser reproduzida ou distribuída.
- Manter a pilha de valor exatamente como:
  - R$ 297 + R$ 97 + R$ 103 = R$ 497
- Não incluir a gravação nessa soma.
- Não criar botão, card, preço, selo ou seção para gravação na landing page.

### 7. Fontes locais

- Instalar `@fontsource/poppins` e `@fontsource/inter`.
- Substituir o carregamento remoto do Google Fonts em `src/routes/__root.tsx` por imports locais em `src/styles.css`.
- Manter Inter 400/500/600 e Poppins 500/600/700.
- Adicionar preload do arquivo WOFF2 de Poppins 700 usado no H1, por meio do asset local gerado pelo build.
- Remover preconnects externos de fontes quando deixarem de ser necessários.

## Validação

- Rodar build de produção.
- Validar com navegador em 393px e 1280px:
  - CTA fixo aparece após 600px e some na oferta;
  - header reduz ao rolar para baixo e volta ao rolar para cima;
  - nenhum alvo principal fica abaixo de 44px;
  - bloco “não é” e FAQ aparecem corretamente;
  - não há overflow horizontal nem cobertura do rodapé;
  - não restam menções a “6 meses”, “replay” ou gravação incluída;
  - a pilha continua somando R$ 497;
  - Poppins e Inter são carregadas de arquivos locais, sem requisições ao Google Fonts.
