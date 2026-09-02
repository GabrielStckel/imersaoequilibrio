# Seção de oferta: card de preço claro e barra de tempo real

Objetivo: quebrar o campo escuro contínuo da seção de oferta, dando ao bloco de preço um card claro, aliviando o checklist e substituindo o percentual fictício de ingressos por uma barra de tempo verdadeira. Meta de altura no mobile: de ~1.875px para ~1.550px.

## 1. Bloco de preço vira card claro

O bloco de preço passa a ser o único elemento claro dentro da seção escura:

- fundo #FCFBF8, raio 22px, borda 1px #E4DBC6
- sombra `0 4px 12px rgba(0,0,0,.30), 0 24px 60px rgba(0,0,0,.40)`
- padding 26px 20px, margin-top 40px

Cores invertidas dentro do card:

- "1º LOTE · VALOR PROMOCIONAL" em ouro-tinta
- apoio, rótulos e linhas da pilha de valor em texto-corpo; valores em tinta
- "Valor total R$ 797" riscado, corpo com 55% de opacidade
- "R$ 47" em Poppins 700, 46px, cor sólida ouro-tinta (sem gradiente)
- cards de lote com fundo branco e borda 1px #E4DBC6; o ativo com borda 1.5px #7D5F1C
- botão com gradiente metálico, borda 1px #7D5F1C e sem o brilho branco interno

## 2. Checklist mais leve

Remover borda, fundo e padding do container da lista; ficam apenas os itens e os divisores entre eles, sobre o fundo espresso.

## 3. Barra de progresso mede tempo, não vendas

Nova lógica baseada na janela do lote:

- início: data de publicação da página (a abertura de vendas já configurada)
- fim: 05/10/2026 23h59 (horário de Brasília)
- preenchimento = tempo decorrido / tempo total, recalculado a cada minuto
- rótulo abaixo, 13px: "1º lote encerra em X dias" (ou "encerra hoje" no último dia)
- trilho rgba(122,95,28,.20), preenchimento com o gradiente dourado, altura 6px, raio 999px

Nenhum percentual de ingressos vendidos permanece na página. O mesmo componente é usado no hero, então o hero passa a mostrar o mesmo texto de tempo.

## 4. Selo Hotmart em três linhas

Centralizado, com 4px entre linhas e um filete 1px #E4DBC6 acima com 20px de respiro:

1. chama laranja (#FF4F00, 22px) + "Hotmart" (15px, Poppins 600, tinta)
2. "Pagamento Seguro" (13px, Inter 500, corpo)
3. "Garantia incondicional de 7 dias" (12px, Inter 400, corpo 75%)

## Detalhes técnicos

- `src/components/sections/Oferta.tsx`: reestrutura do checklist, do card de preço (classes claras) e do selo Hotmart.
- `src/components/ProgressoLote.tsx`: passa a receber a fração de tempo e o texto "encerra em X dias"; ganha variante de tom claro para uso dentro do card.
- `src/hooks/useProgressoProgramado.ts`: substituído por cálculo por janela de tempo (retorna percentual e dias restantes), atualizando a cada minuto.
- `src/config/imersao.ts`: bloco `progresso` passa a definir a janela do lote (`inicio` = publicação, `fim` = 2026-10-05T23:59:00-03:00). Observação: hoje o 1º lote está configurado para encerrar em 20/09/2026 no seletor de lote ativo; a janela da barra usará 05/10/2026 conforme pedido, e posso alinhar as duas datas se você quiser.
- Verificação: build e medição da altura da seção no mobile (393px) com Playwright, confirmando ~1.550px e ausência de qualquer texto de percentual de ingressos.
