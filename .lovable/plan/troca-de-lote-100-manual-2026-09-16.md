# Troca de lote 100% manual

Nada muda sozinho por data. O lote ativo passa a ser escolhido à mão em um único campo, e a barra de porcentagem que avançava com o tempo sai da página. Layout, cores e tipografia permanecem iguais.

## 1. Configuração (`src/config/imersao.ts`)

- Adicionar no topo do objeto: `loteAtual: 0, // 0 = 1º lote, 1 = 2º lote, 2 = 3º lote. Troque à mão.`
- Remover `ateData` dos três lotes.
- Remover o bloco `progresso` inteiro.

## 2. Lote ativo (`src/hooks/useLoteAtivo.ts`)

Sem `setInterval`, sem `useState`/`useEffect`, sem comparação de datas. Retorna direto `{ lote: IMERSAO.lotes[IMERSAO.loteAtual] ?? IMERSAO.lotes[0], indice: IMERSAO.loteAtual }`.

## 3. Checkout do lote atual

- `src/lib/checkout.ts`: `buildCheckoutUrl(base)` passa a receber a URL base; mantém a lista de parâmetros de rastreio (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `src`, `sck`, `xcod`) e a mesma lógica de anexar com `&`.
- `src/hooks/useCheckoutUrl.ts`: usa `lote.checkout` do `useLoteAtivo()`; se vazio, cai no checkout do 1º lote (`IMERSAO.lotes[0].checkout`, que é o mesmo `CHECKOUT_BASE`). No servidor retorna a base sem parâmetros, como hoje.

## 4. Fim da barra de porcentagem

- Apagar `src/hooks/useProgressoProgramado.ts` e `src/components/ProgressoLote.tsx`.
- `Hero.tsx`: remover os três usos de `ProgressoLote` (mobile, desktop médio e desktop grande), junto dos blocos `Reveal` que só o envolviam.
- `Oferta.tsx`: remover as duas linhas de `ProgressoLote` (tema escuro e claro).
- `Header.tsx` (marquee): a primeira mensagem passa a ser `{lote.nome} com valor promocional`; remover o uso do hook de progresso.
- `StickyBar.tsx`: remover a barrinha de 3px do topo; a linha de texto passa a mostrar apenas `{lote.nome}`.

## 5. Texto da oferta (`Oferta.tsx`)

Trocar "o primeiro lote tem valor especial." por "o {loteAtivo.nome} tem valor especial." usando o lote já disponível no componente.

## Verificação

- Build passando e nenhuma referência restante a `ProgressoLote` ou `useProgressoProgramado`.
- Com `loteAtual: 0`: página inteira mostra 1º Lote e R$ 47, botão aponta para o checkout do 1º lote (com os parâmetros de rastreio preservados).
- Mudar para `1`: tudo passa a 2º Lote e R$ 97; depois voltar para `0`.
