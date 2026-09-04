# Bloco de compra do hero (desktop grande) em um card único

Alteração restrita ao `LargeDesktopPurchase` (breakpoint `lg:`) e à coluna do vídeo. `MobilePurchase` e `DesktopPurchase` ficam intactos, assim como toda a copy.

## 1. Card único

Todo o conteúdo do `LargeDesktopPurchase` passa a viver dentro de um card:

- largura fixa de 520px, ancorado à esquerda da coluna (sem `mx-auto`)
- superfície igual à do card do mobile: `moldura-ouro-escura`, `bg-espresso-alt/25`, `rounded-card`
- padding de 32px, conteúdo centralizado (`text-center`)
- 32px de respiro acima (o `lg:mt-8` do wrapper já cobre)

Largura útil interna: 456px. Botão, barra de progresso e contador ocupam exatamente esses 456px; só o selo Hotmart tem largura automática.

## 2. Conteúdo, na ordem

1. **Preço** — `<PrecoLote align="center" />`: "De R$ 797" riscado em 17px, "R$ 47" em 56px com o gradiente `ouro-texto-escuro`, "ou 5x de R$ 9,68 · 1º Lote" em 16px, com 4px entre as três linhas.
2. **Botão** — 24px abaixo do preço, largura total do card, altura 60px (sai o `w-[420px]`).
3. **Selo Hotmart** — 20px abaixo do botão, largura automática, centralizado, sem filete acima.
4. **Barra de progresso** — 24px abaixo do selo, largura total do card, rótulo abaixo centralizado em 15px.
5. **Contador** — separado por um único filete de 1px na largura do card, 24px acima e 20px abaixo dele. Rótulo "A imersão começa em" em 14px, tracking 0,12em, ouro-luz, centralizado; as 4 caixas centralizadas, do mesmo tamanho, preenchendo os 456px.

Resultado: um só filete horizontal dentro do bloco, o do contador.

## 3. Coluna direita

Aumentar o respiro vertical entre os três números de autoridade (+10 / +5.000 / +3.000) no desktop, para que as duas colunas terminem em alturas mais próximas. Nenhum conteúdo novo.

## Detalhes técnicos

- `PrecoLote` só é usado no Hero; a variante `center` recebe tamanhos `lg:` (17px / 56px / 16px), gap de 4px e o gradiente `ouro-texto-escuro` no valor — sem alterar a variante `left` usada pelo `DesktopPurchase`.
- `HotmartGuarantee` ganha uma prop opcional para omitir o filete superior; o uso em `Oferta.tsx` continua igual.
- `ProgressoLote` dentro do card fica em `w-full` (o `lg:max-w-none` deixa de esticar porque o pai passa a ter 456px); o rótulo recebe 15px por override no `className`.
- `Countdown` recebe `justify-center` e caixas em `flex-1` para dividir os 456px igualmente.

## Verificação

Medição no navegador em desktop grande: botão, barra e contador com largura idêntica (456px) e apenas um elemento de filete horizontal dentro do bloco.
