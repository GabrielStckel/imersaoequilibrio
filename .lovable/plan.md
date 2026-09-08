# Reorganizar a página `/obrigado`

Tudo em `src/routes/obrigado.tsx`. Landing, faixa superior, header e rodapé da página ficam como estão. Sem mudança de cores, tipografia ou dependências.

## Dois avisos sobre o estado atual

- O vídeo hoje é um **placeholder** (card com `aspect-video` e a frase "Em breve: um recado em vídeo do Jonas para você." + comentário `/* VTURB */`). Não existe player VTurb montado nesta página. O container já reserva altura 16/9 antes de qualquer player existir, então o botão abaixo não pula quando o embed futuro for adicionado. Esse card sobe de posição exatamente como está.
- Não existe linha "GRAVAÇÕES" nem links "Adicionar à agenda" no código atual. Nada a remover — o bloco de detalhes já tem só Datas / Horário / Onde.

## Nova ordem das seções

1. Bloco de confirmação (selo + H1 + subtítulo) — textos já batem com os pedidos.
2. Vídeo (placeholder com `aspect-video`, sobe para logo depois do bloco de confirmação).
3. Botão do WhatsApp.
4. Card dos três passos — textos novos:
   - Passo 1 "Pagamento confirmado" / "Sua inscrição na imersão foi registrada com sucesso."
   - Passo 2 "Entre no grupo do WhatsApp" / "É lá que enviamos os links dos encontros, os materiais e todos os avisos. Sem este passo, você pode perder o acesso." (destaque visual mantido)
   - Passo 3 "Reserve os horários" / "Dias 06/10 e 07/10, das 19h30 às 21h30, ao vivo pelo Zoom." (montado a partir de `IMERSAO.dataDia1`/`dataDia2`/`horario`, que já têm exatamente esses valores — sem escrever data no JSX)
   - Tratamento visual atual mantido (passo 2 em destaque; passos 1 e 3 como hoje).
5. Botão do WhatsApp.
6. Detalhes do encontro — Datas / Horário / Onde, valores vindos de `IMERSAO` (06/10/2026 e 07/10/2026 · 19h30 às 21h30 · Ao vivo pelo Zoom). Sobe para antes de "O que é enviado só no grupo".
7. O que é enviado só no grupo — os 4 itens (mesmos textos de hoje) viram **lista simples**, sem card e sem a moldura de ícone atual: check de linha 18px, stroke `#7D5F1C` (`text-ouro-tinta`), alinhado ao topo da primeira linha; texto Inter 15px `text-corpo`; coluna única com 14px de espaço entre itens; `max-w-[560px]` centralizado.
8. Botão do WhatsApp.
9. E-mail e suporte — textos de hoje já batem; dois links em coluna no mobile e lado a lado no desktop (já é assim), usando `WHATSAPP_SUPORTE_URL` e `EMAIL_SUPORTE` das constantes.

## Os três botões

Um componente interno `BotaoGrupo` reutilizado 3 vezes: `<a>` nativo com `target="_blank" rel="noopener noreferrer"` apontando para `WHATSAPP_GRUPO_URL`, rótulo "Entrar no grupo do WhatsApp", ícone atual, `min-h-12` (alvo de toque), e a linha de apoio "Leva menos de 10 segundos." (13px, `text-corpo`, centralizada) logo abaixo.

## Regras mantidas

- Um único `h1` na página; cada bloco em `<section>` com `aria-labelledby` (título visível) ou `aria-label`.
- Nenhum preço, lote, cronômetro, escassez ou link de checkout na página.
- `head()` com `noindex` e título próprio — sem alteração.
- Nenhuma dependência nova; nenhuma mudança na landing page.

## Verificação

- `bun run build`.
- Playwright a 360px: ordem das seções conferida de cima para baixo, sem vazamento horizontal, botões com 48px+ de altura, e confirmação de que o container do vídeo reserva altura 16/9 antes do player (sem deslocamento do botão ao carregar).

## Ordem final (para conferência)

1. Bloco de confirmação → 2. Vídeo → 3. Botão WhatsApp → 4. Três passos → 5. Botão WhatsApp → 6. Detalhes do encontro → 7. O que é enviado só no grupo → 8. Botão WhatsApp → 9. E-mail e suporte.
