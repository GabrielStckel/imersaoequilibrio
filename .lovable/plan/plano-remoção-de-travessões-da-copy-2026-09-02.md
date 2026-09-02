# Plano: Remoção de travessões da copy

## Objetivo
Eliminar todos os travessões (—) da copy visível da landing page e dos meta títulos, reescrevendo frases para manter a gramática correta, sem busca-e-substituição cega.

## Estado confirmado
Foram localizadas 10 ocorrências de travessão em copy visível, exatamente nos pontos listados pelo usuário:

1. `src/components/sections/Hero.tsx` (desktop e mobile): "escassez financeira — e retome"
2. `src/components/sections/Diagnostico.tsx`: "família — até que você restaure"
3. `src/components/sections/CausaRaiz.tsx`: "pais — presença, olhar, lugar —, ela aprende"
4. `src/components/sections/CausaRaiz.tsx`: "conflito — e continuará atraindo"
5. `src/components/sections/CausaRaiz.tsx`: "desaprendido — quando você enxerga"
6. `src/components/sections/Oferta.tsx`: "adulto potente — em um único investimento"
7. `src/components/sections/Metodo.tsx`: "Aula Expositiva — Clareza Epistemológica"
8. `src/components/sections/Metodo.tsx`: "Vivências Sistêmicas — Consolidação da Postura"
9. `src/components/sections/Cronograma.tsx`: "Dia 1 — O Diagnóstico..."
10. `src/components/sections/Cronograma.tsx`: "Dia 2 — A Postura..."

Além disso, existe uma ocorrência extra em copy visível que será corrigida:
- `src/components/sections/Faq.tsx`: "tempo real — é ali que o trabalho de fato acontece"

E três ocorrências em meta títulos:
- `src/routes/index.tsx`: "Imersão Equilíbrio Sistêmico — 06 e 07..."
- `src/routes/termos.tsx`: "Termos de uso — Imersão..."
- `src/routes/privacidade.tsx`: "Política de privacidade — Imersão..."

## Ações

### 1. Reescrever frases com travessão dentro do texto
Aplicar exatamente as substituições fornecidas:

- `Hero.tsx` (ambas as versões, desktop e mobile):
  DE: "...e se submeter à escassez financeira — e retome o seu lugar de adulto potente."
  PARA: "...e se submeter à escassez financeira. E retome o seu lugar de adulto potente."

- `Diagnostico.tsx`:
  DE: "Ele se mostra no amor, no dinheiro, no trabalho e na família — até que você restaure a ordem dentro de si."
  PARA: "Ele se mostra no amor, no dinheiro, no trabalho e na família. E continua assim até você restaurar a ordem dentro de si."

- `CausaRaiz.tsx` (3 substituições):
  - DE: "...recebe o que precisa dos pais — presença, olhar, lugar —, ela aprende..."
    PARA: "...recebe dos pais o que precisa (presença, olhar, lugar), ela aprende..."
  - DE: "...adia o próprio desejo, evita o conflito — e continuará atraindo pessoas..."
    PARA: "...adia o próprio desejo e evita o conflito. E continuará atraindo pessoas..."
  - DE: "...pode ser desaprendido — quando você enxerga a raiz, o padrão perde a força."
    PARA: "...pode ser desaprendido. Quando você enxerga a raiz, o padrão perde a força."

- `Oferta.tsx`:
  DE: "...assumir sua postura de adulto potente — em um único investimento acessível."
  PARA: "...assumir sua postura de adulto potente, em um único investimento acessível."

### 2. Trocar travessões como separador de título por dois pontos
- `Metodo.tsx`: "Aula Expositiva — Clareza Epistemológica" → "Aula Expositiva: Clareza Epistemológica"
- `Metodo.tsx`: "Vivências Sistêmicas — Consolidação da Postura" → "Vivências Sistêmicas: Consolidação da Postura"
- `Cronograma.tsx`: "Dia 1 — O Diagnóstico e o Desarme da Carência" → "Dia 1: O Diagnóstico e o Desarme da Carência"
- `Cronograma.tsx`: "Dia 2 — A Postura do Adulto e a Lei da Troca" → "Dia 2: A Postura do Adulto e a Lei da Troca"

### 3. Corrigir travessão remanescente no FAQ
- `Faq.tsx`: "A imersão é ao vivo nos dias 06 e 07/10, e as vivências acontecem em tempo real — é ali que o trabalho de fato acontece."
  → "A imersão é ao vivo nos dias 06 e 07/10, e as vivências acontecem em tempo real (é ali que o trabalho de fato acontece)."

### 4. Corrigir travessões nos meta títulos
Nos arquivos `src/routes/index.tsx`, `src/routes/termos.tsx` e `src/routes/privacidade.tsx`, substituir o travessão separador por hífen com espaços:
- "Imersão Equilíbrio Sistêmico — 06 e 07..." → "Imersão Equilíbrio Sistêmico - 06 e 07..."
- "Termos de uso — Imersão..." → "Termos de uso - Imersão..."
- "Política de privacidade — Imersão..." → "Política de privacidade - Imersão..."

### 5. Varredura final e relatório
Após as edições, executar busca por `—` (travessão) e `–` (meia-risca) em todo o projeto. Reportar qualquer ocorrência remanescente, distinguindo:
- Copy visível ou meta título (deve estar zerada)
- Comentários de código (podem permanecer, mas serão listados para transparência)

## Regra para o futuro
Nenhuma copy nova da página usará travessão. Onde ele apareceria, usar ponto final, vírgula, dois pontos ou parênteses.

## Validação
- `bun run build` deve passar sem erros.
- Busca por `—` e `–` em arquivos `.tsx` e `.ts` de `src/` deve retornar apenas comentários de código e nenhuma ocorrência em copy/meta título.
