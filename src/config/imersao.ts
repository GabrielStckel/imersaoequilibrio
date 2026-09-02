// Arquivo único de configuração da página.
// Edite datas, preços, lotes, links e textos aqui — nenhum componente precisa ser tocado.

const DATA_DIA_1 = "06/10/2026";
const DATA_DIA_2 = "07/10/2026";

export const IMERSAO = {
  nome: "Equilíbrio Sistêmico",
  marca: "Antiparadigma",

  // ——— Countdown (conta até o início do Dia 1) ———
  inicioEvento: "2026-10-06T19:30:00-03:00",
  dataDia1: DATA_DIA_1,
  dataDia2: DATA_DIA_2,
  horario: "19h30 às 21h30",

  // ——— Vídeo do hero (VSL) ———
  video: {
    // Cole a URL de EMBED do seu player (YouTube, Vimeo, Panda, etc).
    // Ex.: "https://www.youtube.com/embed/abc123". Vazio = mostra o player-placeholder.
    embedUrl: "",
    legenda: "Assista antes de garantir sua vaga",
  },

  // ——— Barra de progresso programada por data ———
  progresso: {
    aberturaVendas: "2026-09-05T09:00:00-03:00",
    percentInicial: 22,
    percentAlvo: 96,
    curva: "easeOut" as "linear" | "easeOut",
  }

  // ——— Lotes ———
  valorCheio: "R$ 797",
  lotes: [
    {
      nome: "1º Lote",
      preco: "R$ 47",
      parcela: "ou 5x de R$ 9,68",
      ateData: "2026-09-20T23:59:00-03:00",
      checkout: "https://pay.hotmart.com/R107409111D?off=19cnl1jc&checkoutMode=10",
    },
    {
      nome: "2º Lote",
      preco: "R$ 97",
      parcela: "ou 5x de R$ 19,97",
      ateData: "2026-09-30T23:59:00-03:00",
      checkout: "",
    },
    {
      nome: "3º Lote",
      preco: "R$ 147",
      parcela: "ou 5x de R$ 30,26",
      ateData: "2026-10-06T19:00:00-03:00",
      checkout: "",
    },
  ],

  // ——— Rastreio ———
  metaPixelId: "", // preencha com o ID do Meta Pixel
  utmifyAtivo: true,

  // Texto base do botão. O nome do lote ativo é adicionado automaticamente:
  // "Garantir Vaga" → "Garantir Vaga 1º Lote"
  cta: "Garantir Vaga",
  suporte: "https://wa.me/55",

  // ——— Checklist de entregáveis da oferta ———
  stackValor: [
    {
      texto: `2 encontros ao vivo pelo Zoom, ${DATA_DIA_1.slice(0, 5)} e ${DATA_DIA_2.slice(0, 5)}, das 19h30 às 21h30`,
      bonus: false,
    },
    { texto: "Interação direta, exercícios práticos e vivências sistêmicas", bonus: false },
    { texto: "PDF com roteiros, perguntas-gatilho e mapas sistêmicos", bonus: false },
    { texto: "Áudio de meditação guiada para prática entre os encontros", bonus: false },
    { texto: "Aula 'A Postura Sistêmica Diante do Dinheiro'", bonus: true },
    {
      texto:
        "Lealdades invisíveis: como assumir a postura de adulto potente na prosperidade",
      bonus: true,
    },
  ],

  // ——— Composição do valor ———
  composicaoValor: [
    { label: "Imersão ao vivo (2 encontros)", valor: "R$ 497" },
    { label: "Material de apoio: PDF + áudio guiado", valor: "R$ 103" },
    { label: "Bônus: A Postura Sistêmica", valor: "R$ 197" },
  ],

  // ——— Autoridade (placeholders) ———
  autoridade: {
    nome: "Jonas Peres",
    papel: "TERAPEUTA SISTÊMICO",
    foto: "/jonas.png", // Substitua o arquivo em public/jonas.png pelo retrato oficial.
    bio: [
      "Os mais de 10 anos como constelador e terapeuta são o coração de uma vida inteira destinada ao servir consciente à vida, com o suporte de uma espiritualidade laica e filosófica, que traz clareza, sabedoria e verdade ao meu processo e ao de quem posso auxiliar.",
      "Mais de 3.000 horas conduzindo constelações e vivências terapêuticas, presenciais e online. Mais de 5.000 clientes e alunos que viveram o poder transformador do autoconhecimento, resolvendo questões urgentes e aprendendo a conduzir melhor suas vidas, seguindo o meu método.",
    ],
    numeros: [
      { valor: "+10", label: "anos como constelador" },
      { valor: "+5.000", label: "clientes e alunos" },
      { valor: "+3.000", label: "horas de constelações" },
    ],
  },
} as const;

export type Lote = (typeof IMERSAO.lotes)[number];
export type StackValor = (typeof IMERSAO.stackValor)[number];
