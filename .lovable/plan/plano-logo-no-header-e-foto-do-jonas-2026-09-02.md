# Plano — Logo no header e foto do Jonas

## Objetivo
Usar as duas imagens enviadas como assets oficiais do site: a ampulheta dourada vira o logo do header e o recorte do Jonas vira a foto da seção "Quem conduz", com tratamento específico para recorte transparente.

## Implementação

### 1. Salvar imagens em `/public`
- Copiar a ampulheta dourada para `public/logo-equilibrio.png`.
- Copiar o retrato do Jonas para `public/jonas.png`.

### 2. Logo no header
Em `src/components/sections/Header.tsx`:
- Remover o selo circular com o ícone `Scale` e seu fundo/borda.
- Renderizar `<img src="/logo-equilibrio.png" alt="Equilíbrio Sistêmico" width="30" height="30" className="h-[30px] w-auto object-contain" />`.
- Manter o nome "Equilíbrio Sistêmico" ao lado da imagem.

### 3. Foto do Jonas em "Quem conduz"
Em `src/components/sections/Autoridade.tsx`:
- Trocar `src={autoridade.foto}` para `/jonas.png` (via config).
- Container: `aspect-square`, `rounded-[20px]`, `overflow-visible`, fundo `radial-gradient(circle at 50% 35%, #F6F2E8 0%, #EDE6D6 55%, #E4DAC4 100%)`.
- Imagem: `object-contain`, `object-position bottom`, `w-full`, sem sombra e sem borda no container.
- Manter `width` e `height` explícitos, `loading="lazy"`, `alt="Jonas Peres"`.
- Preservar os três selos flutuantes posicionados sobre o container.

### 4. Atualizar configuração e remover referência antiga
Em `src/config/imersao.ts`:
- Alterar `autoridade.foto` de `"/jonas.jpg"` para `"/jonas.png"`.
- Atualizar o comentário para refletir o novo arquivo.

### 5. Verificação
- Buscar `"jonas.jpg"` em todo o projeto para garantir que não restou referência.
- Confirmar que `Hero.tsx` continua usando `IMERSAO.autoridade.foto`, portanto herda a mudança.
- Validar build e ausência de 404 para `/jonas.png` e `/logo-equilibrio.png`.
