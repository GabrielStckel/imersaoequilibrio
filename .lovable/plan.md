# Oferta em checklist + rodapé discreto

## 1. Entregáveis viram checklist

Os 3 cards brancos altos saem. No lugar, um único card escuro (fundo `rgba(34,28,18,.55)`, borda `rgba(201,168,63,.30)`, raio 18px, padding 22px) com 6 linhas:

1. 2 encontros ao vivo pelo Zoom, 06 e 07/10, das 19h30 às 21h30
2. Interação direta, exercícios práticos e vivências sistêmicas
3. PDF com roteiros, perguntas-gatilho e mapas sistêmicos
4. Áudio de meditação guiada para prática entre os encontros
5. BÔNUS — Aula 'A Postura Sistêmica Diante do Dinheiro'
6. BÔNUS — Lealdades invisíveis: como assumir a postura de adulto potente na prosperidade

Cada linha: quadrado de check 22px (borda e ícone `#C9A83F`, raio 6px), texto 15px Inter à esquerda com line-height 1.45, padding vertical 14px e separador inferior `rgba(201,168,63,.18)` (sem separador no último). Itens 5 e 6 recebem o selo "BÔNUS" (10px, caixa alta, fundo `#AA4E2A`, texto branco, raio 4px, padding 2px 7px) antes do texto. Nada escondido atrás de clique.

## 2. Nova pilha de valor

- Imersão ao vivo (2 encontros) — R$ 497
- Material de apoio: PDF + áudio guiado — R$ 103
- Bônus: A Postura Sistêmica — R$ 197
- Valor total — R$ 797 (riscado)
- Hoje você paga — R$ 47

O preço âncora passa a ser **R$ 797** em toda a página: o valor fica centralizado na configuração e já é lido pelo hero, pela pilha de valor e pela barra fixa do rodapé, então a troca vale para os três de uma vez. Verificação final: nenhum "R$ 497" sobra como preço âncora (o R$ 497 continua existindo apenas como linha da imersão ao vivo dentro da pilha).

## 3. Cards de lote

Mesma altura para os três (`items-stretch`).

- 1º lote (ativo): borda 1,5px `#C9A83F`, fundo `rgba(34,28,18,.7)`, selo "LOTE ATUAL" em `#E07A45` no topo, valor "R$ 47" em Poppins 700 dourado claro e "5x de R$ 9,68" em 12px abaixo.
- 2º e 3º lote: fundo transparente, borda 1px `rgba(201,168,63,.18)`, valor riscado em `pergaminho/45`, rótulo em `pergaminho/55` e "em breve" em 11px abaixo.

## 4. Selo de pagamento seguro

Substitui o texto corrido por: chama laranja da Hotmart em SVG inline (`#FF4F00`, 20px de altura) + "Pagamento Seguro" (14px, Inter 500), centralizados com gap de 8px; abaixo, em linha separada, "Garantia incondicional de 7 dias" em 12px `pergaminho/70`. A chama será desenhada em SVG inline no tom `#FF4F00` (não é o arquivo oficial da Hotmart) — se preferir o logotipo original, envie o SVG que eu troco.

## 5. Rodapé

"Termos de uso · Política de privacidade · Suporte no WhatsApp" em uma única linha centralizada, 12px, `pergaminho/55`, separados por " · ", cada um com área clicável de no mínimo 44px. Os links permanecem (LGPD e revisão de anúncios).

## Detalhes técnicos

- `src/config/imersao.ts`: `valorCheio` para "R$ 797"; `stackValor` reescrito como lista de itens do checklist (texto + flag de bônus), com as novas linhas da composição de valor.
- `src/components/sections/Oferta.tsx`: remove o grid de cards nível B e o `iconMap`, monta o checklist, atualiza a composição de valor, os cards de lote e o selo Hotmart.
- `src/components/sections/CtaFinal.tsx`: rodapé em linha única centralizada.
- Hero e barra fixa já leem `IMERSAO.valorCheio`; ajuste apenas se algum "R$ 797"/"R$ 497" estiver escrito à mão.
- Verificação: `bun run build` e checagem no preview em 393px e desktop.
