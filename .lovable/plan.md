# Página de obrigado (`/obrigado`)

## Decisões tomadas
- Constantes em `src/config/obrigado.ts` (dentro da pasta `src/config/` existente — sem reestruturação).
- Logo: `/logo-equilibrio.webp` (o `.png` foi removido na otimização de imagens).

## O que será construído

### 1. `src/config/obrigado.ts`
Constantes: `WHATSAPP_GRUPO_URL`, `WHATSAPP_SUPORTE_URL`, `EMAIL_SUPORTE` (valores placeholder para preencher depois — marco com comentário TODO).

### 2. `src/routes/obrigado.tsx`
Página completa, isolada do funil de vendas (sem Header, BarraAlerta, BarraCTAFixa, preço, lote, cronômetro, progresso, depoimentos ou FAQ). `head()` com `noindex` e título próprio. Sem pixel/tracking.

Seções (espaçamento 56px mobile / 80px desktop):
1. **Faixa espresso** (40px) — aviso discreto no topo.
2. **Header pergaminho** — apenas logo 30px, sem link.
3. **Selo "PAGAMENTO CONFIRMADO"** + H1 "Pagamento confirmado. Falta um passo."
4. **Card de 3 passos** — passo 2 (entrar no grupo) em destaque visual.
5. **Botão primário** "Entrar no grupo do WhatsApp" com ícone SVG inline (sem biblioteca de ícones), alvo mínimo 48px.
6. **Seção de vídeo vazia** com comentário `/* VTURB */` para embed futuro.
7. **"O que é enviado só no grupo"** — lista de conteúdos exclusivos.
8. **"Detalhes do encontro"** — data/horário/local conforme config existente.
9. **"E-mail e suporte"** — links para WhatsApp suporte e e-mail.
10. **Rodapé espresso**.

## Regras de estilo
- Apenas tokens de cor/fontes existentes + utilitários `.ouro-metal` / `.filete-ouro`.
- Sem framer-motion. Única animação: fade-in de 300ms no bloco principal, dentro de `@media (prefers-reduced-motion: no-preference)`.
- Foco visível: `outline: 2px #7D5F1C`.
- Paleta Pergaminho/Areia/Espresso/Ouro; Poppins nos títulos, Inter no corpo.

## Verificação
- `bun run build`.
- `curl` no HTML de `/obrigado`: sem pixel, com `noindex`.
- Playwright a 360px de largura para validar layout mobile e alvos de toque.
