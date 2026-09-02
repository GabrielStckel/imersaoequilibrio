# Plano — Hierarquia de cards e imagens reais

## Objetivo
Aplicar uma hierarquia visual única de três níveis aos cards da landing page, remover elementos decorativos sem contraste e eliminar os placeholders visuais publicados, sem alterar a copy, a ordem das seções ou a lógica comercial.

## Implementação

### 1. Criar os três estilos oficiais de card
- Adicionar ao CSS global somente estes utilitários reutilizáveis:
  - **Nível A — conteúdo:** fundo branco, borda `borda`, raio de 16px, sombra leve e 24px de padding no mobile.
  - **Nível B — entregável:** fundo branco, borda `borda`, raio de 18px, sombra média e 26px de padding.
  - **Nível C — destaque:** fundo branco, borda de 1,5px `borda-forte`, raio de 18px, sombra dourada mais forte e espaço para selo no canto superior direito.
- Criar um único padrão de ícone de card com 44×44px, fundo `areia`, raio de 12px, borda `borda` e ícone de 20px em `ouro-tinta`.
- Substituir receitas locais de card por esses três níveis, preservando os comportamentos responsivos existentes.

### 2. Aplicar a hierarquia por função
- **Nível A:** cards de Diagnóstico e Método; itens visuais de “Para quem é”; cards sequenciais da Jornada; bloco editorial destacado de conteúdo quando ele funcionar como card.
- **Nível B:** entregáveis comuns de “Tudo incluso no seu acesso”.
- **Nível C:** entregável de bônus, com selo no canto superior direito, e o card ativo de **R$ 47**, conforme escolhido. Os demais lotes permanecem secundários, sem competir com o lote ativo.
- Não criar variações adicionais de fundo, borda ou sombra que funcionem como um quarto nível.

### 3. Limpar numeração e padronizar marcadores
- Remover os números gigantes e translúcidos de Diagnóstico, Método e Oferta.
- Não exibir números em sintomas, público ou entregáveis; manter somente os ícones.
- Em Método e Jornada, adicionar marcador circular de 28px com número em Poppins 13px, `ouro-tinta` e borda `borda`.
- Ajustar os ícones dos cards ao padrão 44×44px definido acima.

### 4. Substituir placeholders publicados
- A configuração atual não possui VSL (`embedUrl` vazio), nem há arquivo de retrato no projeto.
- Apontar provisoriamente a foto da autoridade para `/jonas.jpg` e usá-la também no Hero enquanto não houver VSL.
- Em “Quem conduz”, renderizar retrato vertical 4:5 com `object-cover`, raio de 18px, dimensões explícitas e `loading="lazy"`.
- No Hero, substituir o falso player por essa foto com a legenda já existente; manter suporte ao iframe caso uma VSL seja configurada depois.
- Garantir `width` e `height` em todas as imagens do projeto. Como `/jonas.jpg` ainda não existe, a entrega avisará que esse arquivo precisa ser colocado em `public/` para a foto aparecer.

## Validação
- Verificar por busca que não restaram números fantasma nem placeholders de foto/player.
- Confirmar no desktop e no mobile a separação visual dos três níveis, marcadores de sequência, ícones 44×44px e ausência de overflow.
- Confirmar dimensões explícitas das imagens e ausência de erros no console; validar também o fallback futuro para VSL configurada.
