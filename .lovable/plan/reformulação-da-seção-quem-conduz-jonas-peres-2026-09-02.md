# Reformulação da seção "Quem conduz / Jonas Peres"

## Objetivo

Reduzir a altura da seção no mobile de ~1.361px para ~900px, eliminar a lista separada de números de autoridade e mover esses números para selos flutuantes sobre a foto do Jonas, no estilo da referência indicada.

## Escopo

- Desktop e mobile recebem a mesma hierarquia de conteúdo.
- No desktop a foto fica à esquerda e o texto à direita (layout de duas colunas).
- No mobile tudo fica empilhado e centralizado.
- Nenhuma outra seção da página é alterada.
- O bloco de citação NÃO entra nesta etapa (o cliente enviará o texto depois).

## Estrutura final (de cima para baixo)

```text
[Container de duas colunas no desktop / uma coluna no mobile]

Coluna de texto (desktop) / bloco central (mobile):
1. Eyebrow "QUEM CONDUZ" via <SectionLabel> (centralizado no mobile, alinhado à esquerda no desktop).
2. "Jonas Peres" — Poppins 700, 28px, text-tinta, centralizado no mobile e alinhado à esquerda no desktop.
3. "Terapeuta sistêmico · Antiparadigma" — 13px, text-ouro-tinta, tracking 0.08em, caixa alta.

Coluna da foto (desktop) / bloco central (mobile):
4. Foto do Jonas:
   - Proporção 4:5, object-cover, border-radius 20px, largura total do container.
   - width e height explícitos, loading="lazy".
   - Container relative para receber os selos absolutos.
5. Três selos flutuantes sobre a foto:
   - Fundo rgba(22,19,13,.82) com backdrop-blur de 8px.
   - Borda 1px rgba(201,168,63,.35), border-radius 999px.
   - Padding 7px 14px, fonte Inter 500, 12px, cor #FCFBF8.
   - O número em Poppins 700 e text-ouro-luz; o restante do texto em peso normal.
   - Posições: esquerda topo (top 12%), direita meio (top 42%), esquerda base (top 72%), com offset lateral de 16px para não encostar na borda.
   - Conteúdo:
     - "12+ anos de prática clínica"
     - "8.000+ pessoas atendidas"
     - "300+ vivências conduzidas"

Abaixo da foto:
6. Biografia:
   - Dois parágrafos mantendo a copy atual.
   - Classe .texto-justificado, 15px, line-height 1.6.
7. Nenhuma lista de números separada.
8. Nenhum espaço reservado ou comentário para a citação futura.

## Arquivos e mudanças

### 1. `src/config/imersao.ts`

Atualizar os rótulos de `autoridade.numeros` para corresponderem exatamente aos textos dos selos:

- "12+ anos de prática clínica"
- "8.000+ pessoas atendidas"
- "300+ vivências conduzidas"

### 2. `src/styles.css` (adição leve)

Criar uma utilidade `@utility selo-flutuante` com as propriedades comuns dos selos, para manter o código limpo e reutilizável. Se for mais simples, as mesmas classes podem ser aplicadas inline no componente; a decisão final fica aberta, mas o resultado visual deve ser idêntico.

### 3. `src/components/sections/Autoridade.tsx`

- Substituir o layout atual pelo novo.
- Manter `<Reveal>` para foto e texto.
- Renderizar os selos como filhos absolutos dentro do container da foto, mapeando `IMERSAO.autoridade.numeros`.
- Remover o `<dl>` com os três blocos de números.
- Ajustar padding vertical da seção para ajudar a atingir a meta de altura mobile.
- Garantir que o nome, subtítulo e eyebrow respeitem o alinhamento centralizado no mobile e à esquerda no desktop.

## Verificação

- `bun run build` sem erros.
- Screenshot mobile (375-390px) para confirmar:
  - Seção com aproximadamente 900px de altura.
  - Selos posicionados corretamente sobre a foto.
  - Texto centralizado e legível.
  - Nenhum espaço vazio ou elemento reservado para citação.
- Screenshot desktop (1280px) para confirmar:
  - Layout de duas colunas preservado.
  - Selos flutuantes visíveis e bem posicionados.
  - Eyebrow, nome e subtítulo alinhados à esquerda.
