# Padronização dos botões secundários e do CTA sobre fundo claro

## Objetivo
Corrigir os 3 botões secundários das seções "O Diagnóstico", "Por que isso acontece com você" e "O Método da Imersão", que hoje parecem desligados (fundo transparente, borda dourada com 40% de opacidade e texto sem peso). Ajustar também o CTA dourado da seção final, que está sobre fundo claro e usa o tratamento escuro (borda escura + brilho interno que vira linha suja).

Resultado esperado: exatamente dois tipos de botão no site — primário com gradiente metálico e secundário branco com borda cheia.

## 1. Novos utilitários em `src/styles.css`

Adicionar:

- `.botao-secundario` — fundo branco (#FFFFFF), borda 1.5px sólida `#7D5F1C`, texto `#7D5F1C` Poppins 600 16px, raio 12px, sombra `0 1px 2px rgba(25,21,16,.06), 0 6px 16px rgba(25,21,16,.08)`, min-height 52px, hover/active com fundo `#F6F2E8`.
- `.botao-ouro-claro` — variação do botão primário para uso sobre fundo claro: mantém o gradiente metálico, borda 1px sólida `#7D5F1C`, remove o `inset 0 1px 0 rgba(255,255,255,.45)`, sombra `0 2px 4px rgba(25,21,16,.10), 0 10px 24px rgba(138,106,32,.22)`.

Manter `.botao-ouro-metal` inalterado para os CTAs sobre fundo escuro (Hero, Header, StickyBar, Oferta).

## 2. `src/components/CtaButton.tsx`

- Adicionar prop opcional `surface?: "light" | "dark"` (padrão `"dark"`).
- Para `variant="outline"`: usar `.botao-secundario` e remover as classes inline translúcidas atuais.
- Para `variant="solid"` + `surface="dark"`: manter `.botao-ouro-metal`.
- Para `variant="solid"` + `surface="light"`: usar `.botao-ouro-claro`.
- Garantir que o texto continue Poppins 600, 16px, e que o ícone de seta seja preservado.

## 3. Ajustes nas seções

- `src/components/sections/Diagnostico.tsx`: manter `<CtaButton origem="diagnostico" variant="outline" />`, remover classes inline `border-ouro-tinta/40 text-ouro-tinta hover:bg-ouro/10` e `sm:w-auto` (deixar largura total no container).
- `src/components/sections/CausaRaiz.tsx`: idem para o botão `causa-raiz`.
- `src/components/sections/Metodo.tsx`: idem para o botão `metodo`.
- `src/components/sections/CtaFinal.tsx`: passar `surface="light"` no `<CtaButton origem="cta-final" size="lg" />`.

## 4. Verificação

- Build (`bun run build`) sem erros.
- Inspeção visual desktop/mobile: apenas dois estilos de botão — primário metálico e secundário branco com borda cheia.
- Confirmar que os CTAs sobre fundo escuro (Hero, Header, StickyBar, Oferta) não mudaram.
