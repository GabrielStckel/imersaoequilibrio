# Redesenhar a seção de Oferta

## Contexto

O usuário enviou um novo layout para a seção "Tudo que você garante ao entrar hoje" (`#oferta`). O código colado perdeu as tags JSX na formatação, mas o objetivo está bem descrito — vou implementar o arquivo completo seguindo exatamente a especificação, mantendo o sistema visual editorial (espresso/gold, Fraunces/Inter) e usando apenas os componentes/hooks já existentes.

## Mudanças

**Único arquivo alterado: `src/components/sections/Oferta.tsx`** (substituição completa).

Nada mais é tocado: `config/imersao.ts`, tokens do tema, `CtaButton`, `ProgressoLote`, `SectionLabel`, `Reveal` e `useLoteAtivo` permanecem iguais.

### Novo layout da seção

1. **Cabeçalho** — mantém `SectionLabel` "07 — Garanta sua vaga", título e subtítulo atuais.
2. **Stack de valor em grid 2×2** (desktop) / empilhado (mobile) — os 4 itens do `IMERSAO.stackValor` viram cards numerados (01.–04.) com ícone, título e descrição, bordas sutis em gold.
3. **Tabela de lotes** — subtítulo "O valor sobe a cada lote — garanta o menor agora" + linha "Valor cheio R$ 497 · o preço aumenta a cada lote":
   - **Lote ativo**: card em destaque dourado (borda/fundo gold), selo "Lote atual · aberto", nome do lote, "De R$ 497" riscado, preço grande, parcela, e o `CtaButton` dentro do card.
   - **Lotes futuros/encerrados**: no desktop, cards ao lado do ativo (3 colunas); no mobile, linhas compactas com selo "Em breve" / "Encerrado", nome, preço, parcela e nota ("Abre quando o atual fechar" / "Último lote" / "Lote encerrado").
4. **Confiança + garantia** — mantém Pagamento Seguro · Hotmart, garantia incondicional de 7 dias e o texto da garantia.

### Regras respeitadas

- Preço, parcela, checkout e status de cada lote continuam vindo de `IMERSAO.lotes` + `useLoteAtivo` (troca automática por data).
- CTA do lote ativo usa `CtaButton` com `origem="oferta"`, que abre o checkout do config e dispara o tracking.
- `ProgressoLote` passa a ser importado na seção (conforme o novo design).
- Layout responsivo: 3 lotes lado a lado no desktop, empilhados no mobile.

## Verificação

- Build sem erros.
- Screenshot da seção `#oferta` no preview confirmando: grid 2×2 do stack, 3 lotes lado a lado no desktop, lote ativo em dourado com CTA funcionando.
