# Reformular seção "Quem conduz / Jonas Peres"

## Estado atual verificado

- `src/components/sections/Autoridade.tsx` já usa selos flutuantes sobre a foto e mantém a bio em 2 parágrafos.
- O problema de altura no mobile persiste porque a ordem visual é: eyebrow + nome + bio primeiro, depois a foto. A bio empurra a seção para baixo antes da foto aparecer.
- `src/components/SectionLabel.tsx` centraliza no mobile e alinha à esquerda a partir de `md`; precisamos de centralização no mobile/tablet empilhado e alinhamento à esquerda só no desktop (`lg`).
- A foto não tem `max-width` no desktop, então cresce demais em telas largas.
- Não há citação no código atual, e o usuário confirmou que não deve haver citação.

## O que será feito

1. **Reordenar o conteúdo no mobile** (de cima para baixo):
   - eyebrow "QUEM CONDUZ" centralizado
   - nome + subtítulo centralizados
   - foto 4:5 com selos flutuantes
   - dois parágrafos de biografia justificados

2. **Desktop (`lg:` a partir de 1024px): manter duas colunas**
   - Grid `42%` foto + `58%` texto, gap de 48px, `items-center`.
   - Foto com `max-width: 420px` para não desequilibrar.
   - Coluna da direita alinhada à esquerda: eyebrow, nome, subtítulo e bio.
   - Entre 768px e 1023px a seção continua empilhada igual ao mobile.

3. **Ajustar `SectionLabel` localmente**
   - Manter o componente global inalterado.
   - Na seção do Jonas, forçar `items-center text-center` abaixo de `lg` e `items-start text-left` no desktop.

4. **Foto e selos**
   - Proporção `4:5`, `object-cover`, `border-radius: 20px`, `loading="lazy"`, `width`/`height` explícitos.
   - Selos nas posições: `left-4 top-[12%]`, `right-4 top-[42%]`, `left-4 top-[72%]`.
   - Salvaguarda no desktop: se os selos não couberem dentro de 420px, reduzir padding e fonte para 11px antes de mexer nas posições.

5. **Tipografia e espaçamento**
   - Nome: Poppins 700, 28px, `text-tinta`.
   - Subtítulo: 13px, `text-ouro-tinta`, tracking 0.08em, caixa alta.
   - Bio: 15px, line-height 1.6, `.texto-justificado`.
   - Reduzir gaps e margens internos para aproximar a altura mobile da meta de ~900px.

6. **Remover citação**
   - Não adicionar componente, classe reservada nem espaço vazio para citação.

## Arquivos que serão alterados

- `src/components/sections/Autoridade.tsx`
- `src/components/SectionLabel.tsx` (apenas se for necessário um prop de alinhamento responsivo; preferencialmente sem alterar o componente global)

## Validação

- `bun run build` sem erros.
- Screenshot mobile (375–393px) confirmando: ordem correta, selos legíveis, seção com altura próxima de 900px.
- Screenshot desktop (1280px+) confirmando: foto à esquerda, texto à esquerda na coluna direita, foto com `max-width` de 420px, selos sem sobreposição ao rosto.
- Verificar no DevTools que não há elemento vazio nem classe de citação.
