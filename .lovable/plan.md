# Restaurar a porcentagem progressiva de ingressos

O lote continuará 100% manual pelo campo `loteAtual`. Somente a porcentagem voltará a avançar automaticamente, como antes.

## 1. Regra de crescimento

- Restaurar a configuração da porcentagem com início em **22% em 05/09/2026 às 09h**.
- Calcular o avanço progressivo com a mesma curva suave anterior (`easeOut`).
- Usar **06/10/2026 às 17h (horário de São Paulo)** como prazo próprio da porcentagem, sem vincular ao horário de início da imersão.
- Ao chegar ao prazo, fixar em **99%** permanentemente, sem alcançar 100%.
- Atualizar o valor exibido a cada minuto.

## 2. Restaurar os locais anteriores

- **Faixa superior:** voltar a mostrar “{porcentagem}% dos ingressos do {lote} já garantidos”.
- **Bloco de compra do hero:** restaurar a barra e o texto no mobile, tablet e desktop grande, nas mesmas posições e com o mesmo visual.
- **Oferta:** restaurar a barra dentro do card de compra, com a versão escura no mobile e clara no desktop.
- **Barra fixa mobile:** restaurar a linha dourada de 3px no topo e o texto “{lote} · {porcentagem}% vendido”.

## 3. Preservar o restante

- Manter a escolha do lote e do checkout totalmente manual por `loteAtual`.
- Não alterar preços, links, rastreamento, textos promocionais restantes ou layout.

## Verificação

- Confirmar que a porcentagem aparece novamente em todos os pontos anteriores, sem overflow em mobile e desktop.
- Validar por teste da fórmula que o valor é 22% no início, cresce progressivamente, chega a 99% exatamente em 06/10/2026 às 17h e permanece em 99% depois.
- Confirmar que trocar `loteAtual` ainda altera somente lote, preço e checkout, sem interferir na porcentagem.
