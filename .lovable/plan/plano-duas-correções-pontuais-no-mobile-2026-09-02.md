# Plano: duas correções pontuais no mobile

## Escopo
Aplicar apenas os dois ajustes solicitados, sem tocar no bloco de mídia do Hero, no texto dos botões nem em qualquer outra seção.

## 1. Âncora da oferta (#oferta)
**Arquivo:** `src/styles.css`

- Adicionar regra base:
  ```css
  html {
    scroll-behavior: smooth;
  }
  ```
- Adicionar `scroll-margin-top` ao bloco de oferta:
  ```css
  #oferta {
    scroll-margin-top: 100px;
  }
  ```
- Respeitar `prefers-reduced-motion`:
  ```css
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
  ```

## 2. Data/horário no Hero (somente mobile)
**Arquivo:** `src/components/sections/Hero.tsx`

- No componente `MobilePurchase`, inserir logo abaixo do `<CtaButton>` do bloco de preço (dentro do mesmo `<Reveal>`) uma linha com:
  - Texto: `"06 e 07 de outubro · 19h30 às 21h30 · ao vivo pelo Zoom"`
  - Classes: `mt-[10px] text-center font-body text-xs text-pergaminho/75 md:hidden`
  - Sem `uppercase` e sem `tracking`

## Verificação
- `bun run build` deve passar.
- Screenshot mobile do Hero deve exibir a nova linha de data abaixo do botão.
- Clicar em âncora "#oferta" no mobile deve posicionar o título da oferta abaixo do header fixo.