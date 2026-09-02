# Tratamento metálico do dourado

## Objetivo
Transformar o dourado chapado em um acabamento metálico consistente, preservando integralmente textos, estrutura, responsividade, links, tracking e lógica dos lotes.

## Implementação

1. **Criar os utilitários globais**
   - Adicionar em `src/styles.css` os utilitários Tailwind v4 `ouro-metal`, `ouro-texto` e `filete-ouro` com os gradientes informados.
   - Criar o acabamento reutilizável de moldura metálica para superfícies escuras: borda dourada translúcida e brilho superior interno.
   - Criar o brilho animado dos CTAs com pseudo-elemento, ativado somente em `prefers-reduced-motion: no-preference`, além do estado pressionado 6% mais escuro.

2. **Atualizar todos os CTAs “Garantir Vaga”**
   - Aplicar o ouro metálico aos botões sólidos compartilhados em `CtaButton`.
   - Usar texto espresso, Poppins 600 a 16px, raio de 12px, borda metálica, sombra interna/externa e altura mínima de 48px em todos os tamanhos, inclusive no header mobile.
   - Preservar foco acessível, seta, links de checkout e rastreamento; manter o brilho contido dentro do botão.
   - Manter a variante outline sem preenchimento metálico, respeitando o contraste do contexto.

3. **Aplicar o ouro por contexto**
   - Substituir filetes e divisores dourados decorativos sólidos pelo novo `filete-ouro`, inclusive nos pontos de destaque do Hero, Oferta, cronograma e rótulos de seção onde o elemento é puramente decorativo.
   - Manter textos pequenos em cor sólida: `ouro-tinta` sobre fundos claros e `ouro-luz` sobre fundos escuros.
   - Padronizar ícones em cards claros para `ouro-tinta` e ícones em superfícies escuras para `ouro-luz`.
   - Aplicar moldura metálica aos cards realmente destacados sobre fundo escuro, sem transformar todos os cards em destaque.

4. **Destacar o preço principal**
   - Aplicar `ouro-texto` somente ao preço grande do lote ativo na Oferta, incluindo o “47” e preservando a legibilidade da cifra.
   - Não aplicar gradiente a rótulos, parcelas, preços secundários ou qualquer texto menor que 24px.

5. **Revisão visual e técnica**
   - Confirmar que nenhum elemento mistura ouro e terracota e que o ouro médio não é usado como texto sobre bege.
   - Verificar desktop e mobile, com atenção ao botão do header, ao brilho do hover, à Oferta e aos divisores.
   - Validar redução de movimento, contraste, ausência de overflow/recortes e execução sem erros.

## Arquivos principais
- `src/styles.css`
- `src/components/CtaButton.tsx`
- `src/components/PrecoLote.tsx`
- `src/components/SectionLabel.tsx`
- `src/components/sections/Header.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/Oferta.tsx`
- Demais seções com filetes, ícones ou molduras douradas identificadas na auditoria
