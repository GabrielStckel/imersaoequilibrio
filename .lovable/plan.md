# Ajustes na seção "Quem conduz"

## Objetivo
Atualizar a biografia de Jonas Peres para tom em primeira pessoa, corrigir os selos flutuantes para refletir os novos números e adicionar uma assinatura estilizada.

## Alterações

### 1. Biografia (`src/config/imersao.ts`)
Substituir os dois parágrafos atuais de `IMERSAO.autoridade.bio` por:

**Parágrafo 1:**
"Os mais de 10 anos como constelador e terapeuta são o coração de uma vida inteira destinada ao servir consciente à vida, com o suporte de uma espiritualidade laica e filosófica, que traz clareza, sabedoria e verdade ao meu processo e ao de quem posso auxiliar."

**Parágrafo 2:**
"Mais de 3.000 horas conduzindo constelações e vivências terapêuticas, presenciais e online. Mais de 5.000 clientes e alunos que viveram o poder transformador do autoconhecimento, resolvendo questões urgentes e aprendendo a conduzir melhor suas vidas, seguindo o meu método."

### 2. Assinatura (`src/components/sections/Autoridade.tsx`)
Adicionar abaixo do segundo parágrafo:
- Texto: "– Jonas Peres"
- Formato: 13px, Inter 500, itálico, `text-ouro-tinta`, alinhado à direita, `margin-top: 12px`

### 3. Selos flutuantes (`src/config/imersao.ts` + `src/components/sections/Autoridade.tsx`)
Atualizar `IMERSAO.autoridade.numeros` para:
- Selo 1: "+10" + "anos como constelador"
- Selo 2: "+5.000" + "clientes e alunos"
- Selo 3: "+3.000" + "horas de constelações"

Ajustar o render dos selos em `Autoridade.tsx` para que:
- O número use `font-display font-bold text-ouro-luz` (Poppins 700)
- O restante do texto use `font-body font-normal` (Inter 400)

### 4. Verificação
- Re-escanear `src/` e `public/` para confirmar que não restam menções a "12 anos", "8.000" ou "300 vivências"
- Rodar `bun run build` para garantir que não há erros de compilação
- Capturar screenshots desktop/mobile da seção "Quem conduz" para validar o novo layout, assinatura e selos
