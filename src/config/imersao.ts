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
    // Ex.: "https://www.youtube.com/embed/XXXXXXXX". Vazio = mostra o player-placeholder.
    embedUrl: "",
    legenda: "Assista antes de garantir sua vaga",
  },

  // ——— Barra de progresso programada por data ———
  progresso: {
    aberturaVendas: "2026-09-05T09:00:00-03:00",
    percentInicial: 8,
    percentAlvo: 96,
    curva: "easeOut" as "linear" | "easeOut",
  },

  // ——— Lotes ———
  valorCheio: "R$ 497",
  lotes: [
    {
      nome: "1º Lote",
      preco: "R$ 47",
      parcela: "ou 5x de R$ 9,68",
      ateData: "2026-09-20T23:59:00-03:00",
      checkout: "https://pay.hotmart.com/XXXXX?off=lote1",
    },
    {
      nome: "2º Lote",
      preco: "R$ 97",
      parcela: "ou 5x de R$ 19,97",
      ateData: "2026-09-30T23:59:00-03:00",
      checkout: "https://pay.hotmart.com/XXXXX?off=lote2",
    },
    {
      nome: "3º Lote",
      preco: "R$ 147",
      parcela: "ou 5x de R$ 30,26",
      ateData: "2026-10-06T19:00:00-03:00",
      checkout: "https://pay.hotmart.com/XXXXX?off=lote3",
    },
  ],

  // ——— Rastreio ———
  metaPixelId: "", // preencha com o ID do Meta Pixel
  utmifyAtivo: true,

  // Texto base do botão. O nome do lote ativo é adicionado automaticamente:
  // "Garantir Vaga" → "Garantir Vaga 1º Lote"
  cta: "Garantir Vaga",
  suporte: "https://wa.me/55XXXXXXXXXXX",

  // ——— Stack de valor da oferta ———
  stackValor: [
    {
      icone: "Video",
      titulo: "Imersão Online e Ao Vivo",
      descricao: `2 encontros ao vivo pelo Zoom (${DATA_DIA_1} e ${DATA_DIA_2}), com interação, exercícios práticos e vivências sistêmicas.`,
    },
    {
      icone: "FileText",
      titulo: "Material de apoio prático",
      descricao:
        "PDF com roteiros, perguntas-gatilho e mapas sistêmicos para aplicar no dia a dia, nas relações e nas finanças.",
    },
    {
      icone: "Gift",
      titulo: "Bônus exclusivo",
      descricao:
        "Aula 'A Postura Sistêmica Diante do Dinheiro': lealdades invisíveis e como assumir a postura de adulto potente na prosperidade.",
    },
  ],

  // ——— Autoridade (placeholders) ———
  autoridade: {
    nome: "Jonas Peres",
    papel: "Terapeuta sistêmico · Antiparadigma",
    foto: "/jonas.jpg", // Substitua o arquivo em public/jonas.jpg pelo retrato oficial.
    bio: [
      "Jonas Peres conduz processos de terapia sistêmica há mais de uma década, unindo o pensamento de Hellinger à filosofia e à epistemologia para desarmar padrões de hipercompensação.",
      "Seu trabalho é direto e sem clichês de autoajuda: o objetivo é que a pessoa saia do lugar de criança carente e assuma a postura de adulto potente nas relações, no dinheiro e na carreira.",
    ],
    numeros: [
      { valor: "12+", label: "anos de prática clínica" },
      { valor: "8.000+", label: "pessoas atendidas" },
      { valor: "300+", label: "vivências conduzidas" },
    ],
  },
} as const;

export type Lote = (typeof IMERSAO.lotes)[number];
export type StackValor = (typeof IMERSAO.stackValor)[number];
