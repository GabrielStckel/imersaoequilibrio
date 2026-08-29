# Hero com título sempre em 3 linhas

## Objetivo
Substituir apenas `src/components/sections/Hero.tsx` para que o título principal fique sempre em 3 linhas em qualquer dispositivo, usando quebras fixas (`<br />`) e tamanho de fonte fluido (`clamp`). Mantém o VSL/placeholder à direita, subtítulo curto abaixo do vídeo e a coluna de compra (countdown, progresso, preço, CTA) à esquerda.

## Escopo
- **Apenas `src/components/sections/Hero.tsx`** será alterado.
- Nenhuma outro arquivo (config, tema, componentes compartilhados) será modificado.

## Ajustes necessários no Hero.tsx

1. **Título com 3 linhas fixas**
   - Usar `<br />` para forçar as quebras:
     ```
     Por que doar-se demais está afastando
     o respeito na sua relação amorosa
     e travando o fluxo do seu dinheiro?
     ```
   - Aplicar `text-[clamp(0.9rem,3.9vw,1.6rem)]` para que a fonte encolha no mobile e cada linha caiba sem overflow.
   - Manter `leading-[1.16]`, `tracking-[-0.005em]` e cor `text-bone`.

2. **HeroVideo adaptado (sem depender de `IMERSAO.video`)**
   - Remover a referência a `IMERSAO.video` e o bloco condicional corrompido.
   - Preservar o placeholder atual: container `aspect-video`, cantos decorativos dourados, círculo com ícone `Play` e legenda fixa `"Assista ao vídeo de convite"`.
   - Manter o subtítulo curto e os metadados de autoridade/Zoom/horário abaixo do vídeo.

3. **Layout e conteúdo restante**
   - Manter section label no topo: `"Imersão Online e Ao Vivo · 06 e 07 de Outubro"`.
   - Preservar grid responsivo: empilhado no mobile, vídeo à direita e coluna de compra à esquerda no desktop (`lg:grid-cols-[1.02fr_0.98fr]`).
   - Manter `Countdown`, `ProgressoLote`, `PrecoLote`, `CtaButton` e textos de segurança/garantia.

## Validação
- Executar `bun run build` para garantir que não há erros de compilação.
- Verificar visualmente no preview em 3 larguras: desktop (~1280px), tablet (~800px) e celular (~360px).
- Confirmar que o título aparece exatamente em 3 linhas nas três larguras, sem palavra órfã na última linha.
