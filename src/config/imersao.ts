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
      titulo: `Imersão Online e Ao Vivo (2 dias, ${DATA_DIA_1} e ${DATA_DIA_2})`,
      descricao:
        "Aulas transmitidas em Zoom com interação em tempo real, exercícios práticos e vivências sistêmicas conduzidas pelo Jonas.",
    },
    {
      icone: "PlayCircle",
      titulo: "Acesso às gravações por 6 meses",
      descricao:
        "Revise o conteúdo quantas vezes quiser. O acesso fica disponível para você aprofundar os pontos que mais fizerem sentido.",
    },
    {
      icone: "FileText",
      titulo: "Material de apoio: guia prático com exercícios sistêmicos",
      descricao:
        "PDF com roteiros, perguntas-gatilho e mapas para aplicar o método no seu dia a dia, nas relações e nas finanças.",
    },
    {
      icone: "Gift",
      titulo: "Bônus exclusivo: aula 'A Postura Sistêmica Diante do Dinheiro'",
      descricao:
        "Uma aula extra sobre o campo do dinheiro, lealdades invisíveis e como assumir a postura de adulto potente na prosperidade.",
    },
  ],

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
export type StackValor = (typeof IMERSAO.stackValor)[number];
