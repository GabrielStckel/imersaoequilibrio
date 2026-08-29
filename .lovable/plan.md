# Ajuste no Hero + texto do botão

Implementar exatamente as 3 alterações solicitadas, adaptando o novo Hero para não depender de `IMERSAO.video` (que ainda não existe no config).

## 1. Atualizar texto base do CTA no config

**Arquivo:** `src/config/imersao.ts`

- Trocar `cta: "Quero Restaurar Meu Equilíbrio"` por:
  ```ts
  // Texto base do botão. O nome do lote ativo é adicionado automaticamente:
  // "Garantir Vaga" → "Garantir Vaga 1º Lote"
  cta: "Garantir Vaga",
  ```

## 2. Concatenar nome do lote ativo no CtaButton

**Arquivo:** `src/components/CtaButton.tsx`

- Logo após `const { lote } = useLoteAtivo();`, adicionar:
  ```ts
  const textoCta = label ?? `${IMERSAO.cta} ${lote.nome}`;
  ```
- Substituir os dois usos de `label ?? IMERSAO.cta` (texto visível do botão e `aria-label`) por `textoCta`.

## 3. Substituir o Hero pelo novo layout

**Arquivo:** `src/components/sections/Hero.tsx`

- Reescrever o componente com:
  - Título menor e mais compacto (~3 linhas), mantendo a mesma frase.
  - Subtítulo curto reposicionado para **embaixo do vídeo**.
  - Vídeo/placeholder realocado para a coluna direita em desktop, com o subtítulo logo abaixo.
  - Countdown, progresso, preço e CTA permanecem na coluna esquerda/inferior.
- **Adaptação obrigatória:** como `IMERSAO.video` não existe no config, o componente `HeroVideo` será ajustado para usar valores padrão internos (placeholder com ícone Play e legenda fixa) sem importar do config. A estrutura visual do player será reconstruída de forma funcional, preservando o estilo do código enviado.

## Validação

- Rodar `bun run build` para garantir que TypeScript e build passem.
- Verificar visualmente no preview que:
  - O título ocupa ~3 linhas sem palavra órfã.
  - O subtítulo curto aparece abaixo do vídeo.
  - Todos os botões exibem "Garantir Vaga 1º Lote" (atualizando automaticamente conforme o lote ativo).
