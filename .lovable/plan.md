# Padronização tipográfica e de alinhamento da landing page

## Objetivo
Uniformizar a hierarquia visual da landing page no mobile, sem alterar nenhuma palavra da copy. O título da oferta permanece exatamente com o tratamento atual e será a referência visual para os demais títulos de seção.

## Alterações

### 1. Rótulos de seção
- Atualizar o componente compartilhado de rótulo para, no mobile, exibir um filete dourado de 40×1px centralizado acima do texto, sem traço lateral.
- Centralizar todos os rótulos e padronizar em Inter 600, 12px, caixa alta e tracking de `0.1em`.
- Manter as cores semânticas por contexto: `ouro-tinta` em fundos claros e `ouro-luz` em fundos escuros.
- Remover apenas o prefixo residual `05 —` de “PARA QUEM É ESTA IMERSÃO”.
- Preservar o comportamento visual de desktop onde ele já funciona, mantendo a mudança concentrada no mobile.

### 2. Títulos de seção
- Padronizar os H2 das seções claras no mobile com alinhamento central, largura máxima de 320px, margem horizontal automática, Poppins, `clamp(1.5rem, 5.6vw, 2.5rem)`, line-height `1.18`, tracking `-0.02em` e `text-wrap: balance`.
- Aplicar o mesmo padrão ao título final da página, preservando sua copy.
- Manter os layouts e alinhamentos atuais no desktop.
- Não alterar classes, quebra ou hierarquia do H2 da seção de oferta.

### 3. Títulos de cards
- Padronizar todos os H3 usados em cards para Poppins 600, 18px, line-height `1.3`, alinhamento à esquerda e `text-wrap: balance`.
- Ajustar a largura útil do título “Imersão Online e Ao Vivo” para impedir que “Vivo” fique isolado, sem alterar o texto.
- Manter perguntas do FAQ como controles de accordion, sem tratá-las como títulos de card.

### 4. Card de citação
- Reduzir o texto da citação para 17px, Poppins 500, line-height `1.45`, itálico, centralizado e com largura máxima de 300px.
- Reduzir o padding para 22px.
- Adicionar uma aspa dupla decorativa de 56px em `ouro-tinta` com 18% de opacidade acima do texto.
- Preservar a frase exatamente como está.

### 5. Justificação com hifenização em português
- Alterar o idioma raiz do documento para `pt-BR`.
- Criar o utilitário global `.texto-justificado` com justificação entre palavras, hifenização automática e limites de hifenização solicitados.
- Aplicar somente a parágrafos longos, fora de cards, que ocupem pelo menos três linhas no mobile — incluindo textos introdutórios/explicativos das seções e a biografia de Jonas.
- Manter sem justificação textos de cards, listas, títulos, rótulos, botões, preços, legendas curtas e parágrafos curtos.
- Manter a justificação ativa também no desktop.

## Validação
- Conferir a página em 393px: rótulos centralizados, H2 equilibrados, H3 legíveis e citação compacta.
- Confirmar que a oferta permaneceu visualmente inalterada no H2.
- Confirmar que nenhuma palavra da copy mudou, exceto a remoção explícita de `05 —`.
- Verificar hifenização/justificação, ausência de órfã em “Imersão Online e Ao Vivo”, ausência de overflow e erros no navegador.
- Conferir o desktop para garantir que apenas a justificação permaneça ativa nessa largura e que a composição existente não regrida.
