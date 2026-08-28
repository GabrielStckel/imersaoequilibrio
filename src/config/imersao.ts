// Arquivo único de configuração da página.
// Edite datas, preços, lotes, links e textos aqui — nenhum componente precisa ser tocado.

export const IMERSAO = {
  nome: "Equilíbrio Sistêmico",
  marca: "Antiparadigma",

  // ——— Countdown (conta até o início do Dia 1) ———
  inicioEvento: "2026-10-06T19:30:00-03:00",
  dataDia1: "06/10/2026",
  dataDia2: "07/10/2026",
  horario: "19h30 às 21h30",

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

  cta: "Quero Restaurar Meu Equilíbrio",
  suporte: "https://wa.me/55XXXXXXXXXXX",

  // ——— Autoridade (placeholders) ———
  autoridade: {
    nome: "Jonas Peres",
    papel: "Terapeuta sistêmico · Antiparadigma",
    foto: "", // URL da foto real do Jonas (deixe vazio para exibir o espaço reservado)
    bio: [
      "Jonas Peres conduz processos de terapia sistêmica há mais de uma década, unindo o pensamento de Hellinger à filosofia e à epistemologia para desarmar padrões de hipercompensação.",
      "Seu trabalho é direto e sem clichês de autoajuda: o objetivo é que a pessoa saia do lugar de criança carente e assuma a postura de adulto potente nas relações, no dinheiro e na carreira.",
    ],
    numeros: [
      { valor: "12+", label: "anos de prática clínica" },
      { valor: "8.000+", label: "pessoas atendidas em processos" },
      { valor: "300+", label: "vivências sistêmicas conduzidas" },
    ],
  },
} as const;

export type Lote = (typeof IMERSAO.lotes)[number];
