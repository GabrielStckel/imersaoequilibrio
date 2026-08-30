# Consolidar header, hero, CTAs e oferta

## Objetivo
Aplicar o resultado visual e funcional descrito no prompt único, sem copiar os trechos de JSX truncados e sem desfazer a organização mobile já existente no Hero.

## Estado confirmado
- Inter já está configurada nos tokens globais e carregada pelo Google Fonts; não há ajuste necessário nesses dois pontos.
- A configuração central já contém vídeo, datas, lotes, CTA, oferta e autoridade conforme o conteúdo solicitado.
- O CTA já adiciona automaticamente o lote ativo ao texto.
- O Header já está ativo no topo da página, com faixa deslizante, marca, countdown, CTA e progresso.
- O Hero já aceita vídeo embed com placeholder, mantém o título em três linhas e contém ajustes específicos para organização mobile.
- A Oferta já possui checklist à esquerda e painel de preços com os três lotes à direita.

## Implementação
1. Comparar os arquivos solicitados com o resultado funcional do prompt e manter intactos os trechos já equivalentes.
2. Preservar no Hero os ajustes responsivos recentes — espaçamento compacto, bloco de compra destacado e CTA em largura total no celular — enquanto mantém vídeo, título fixo em três linhas e layout desktop em duas colunas.
3. Manter Header e Oferta com JSX válido, reconstruindo a intenção dos snippets truncados em vez de inserir código incompleto.
4. Garantir que `index.tsx` continue usando `Header` antes do Hero e que `StickyBar.tsx` permaneça apenas sem uso.
5. Validar ausência de referências a Fraunces/serif, texto dinâmico “Garantir Vaga 1º Lote”, vídeo/placeholder, faixa animada e estados dos lotes.

## Verificação
- Conferir a página em desktop, tablet e celular, incluindo exatamente três linhas no título.
- Verificar visualmente o header, a organização mobile do Hero e a Oferta responsiva.
- Confirmar ausência de erros de renderização e falhas de compilação.
