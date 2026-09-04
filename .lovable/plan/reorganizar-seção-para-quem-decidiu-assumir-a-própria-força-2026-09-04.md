# Reorganizar seção "Para quem decidiu assumir a própria força." (ParaQuem.tsx) — desktop (lg:)

## Objetivo
Reduzir a altura da seção de ~869px para ~610px no desktop, eliminando o vazio de 443px na coluna esquerda, sem perder nenhum item das listas. A estrutura passa de "título à esquerda + listas empilhadas à direita" para "cabeçalho em cima + listas lado a lado".

## 1. Reestruturar o container principal
- O `<div className="container-eq ... lg:grid-cols-[1fr_1fr] ...">` vira um grid de **duas linhas** no desktop:
  - `lg:grid lg:grid-rows-[auto_1fr]`
  - Linha 1 (cabeçalho): `lg:grid lg:grid-cols-[1fr_1fr] lg:gap-16 lg:items-start`
  - Linha 2 (listas): `lg:grid lg:grid-cols-2 lg:gap-8 lg:items-stretch lg:pt-12`
- Mobile permanece como está (coluna única, empilhada).

## 2. Cabeçalho em duas colunas (linha 1)
- **Coluna esquerda (1fr):**
  - `SectionLabel` + `<h2>`
  - `h2` mantém `lg:text-[40px]` e `lg:leading-[1.15]`; ajustar `max-w` para forçar 2 linhas (~`lg:max-w-[18ch]`).
  - Alinhamento à esquerda (`md:text-left`, etc.).
- **Coluna direita (1fr):**
  - Parágrafo de abertura com filete de 48px acima.
  - Filete: `filete-ouro w-12` (48px), com `mb-5` (20px de respiro).
  - Parágrafo: `lg:text-[18px] lg:leading-[1.75] lg:texto-justificado`.

## 3. Listas lado a lado (linha 2)
- O wrapper que hoje empilha os dois `Reveal`s vira grid no desktop: `lg:grid lg:grid-cols-2 lg:gap-8 lg:items-stretch`.
- Cada card fica dentro do próprio `Reveal` (mantém animação individual).
- Remover `mt-6` do segundo card no desktop (`lg:mt-0`).
- Aplicar `h-full` nos cards para que ambos tenham a **mesma altura**.

## 4. Ajustes de hierarquia dentro dos cards (lg:)
- **h3 do card:** `lg:text-[19px]`, com `lg:mb-4` (16px de respiro abaixo).
- **Itens da lista:** `lg:text-[17px] lg:leading-[1.6]`, com 16px entre eles (`lg:space-y-4` ou padding equivalente).
- **Ícone (Check/X):** aumentar para `size={20}` e alinhar à primeira linha do texto (`mt-0` / `self-start`).
- **Padding do card:** `lg:p-8` (32px).

## 5. Corrigir repetição de copy
- No parágrafo de abertura, alterar o final de:
  - `"...e deseja assumir a responsabilidade pela sua própria força. É para você se:"`
  - para:
  - `"...e deseja assumir a responsabilidade pela sua própria força."`
- O card mantém o título `"É para você se:"` inalterado.
- **Nenhuma outra palavra da copy será alterada.**

## 6. Cores e estilos existentes
- Preservar as cores atuais dos cards:
  - Card "É para você se:": fundo branco, borda `borda`.
  - Card "Não é para": fundo `areia`, borda `terracota/25`, ícones `terracota`.
- Não alterar sombras, bordas arredondadas ou animações.

## 7. Verificação
- Confirmar que a seção tem ~610px de altura no viewport de 1280px+.
- Confirmar que os dois cards da linha 2 têm a mesma altura.
- Confirmar que nenhum item das listas foi removido ou alterado.
- Validar build (`bun run build` ou equivalente).

## Mobile
- Nenhuma mudança no layout mobile: manter coluna única, listas empilhadas, espaçamentos e tamanhos atuais.