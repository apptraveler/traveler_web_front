const formSteps = [
  {
    question: {
      label: "Quando pensa em fazer uma viagem, quais tipos de destinos vem em sua cabeça?",
      type: "multiple"
    },
    answer: [
      "Montanhas",
      "Praias",
      "Trilhas",
      "Cachoeira",
      "Lugares Históricos",
      "Pontos Turísticos"
    ]
  },
  {
    question: {
      label: "Com qual dessas frases você mais se identifica?",
      type: "unique"
    },
    answer: [
      "Procuro absorver ao máximo a cultura do destino, incluindo sua culinária e história! Aprender uma nova perspectiva de vida é sempre interessante.",
      "Sempre me preocupo com o custo benefício da viagem, pagar menos e aproveitar mais é meu foco!",
      "Escolho destinos com base na oportunidade e no meu momento, não interessa qual, apenas o que vai me proporcionar.",
      "Procuro lugares com muita beleza visual, para que eu possa registrar os momentos da melhor forma possível.",
      "Procuro evoluir como pessoa a cada viagem, aprender mais e encontrar um novo propósito de vida.",
      "Quero conhecer pessoas interessantes, ouvir histórias de vida diferentes e me socializar com a população local."
    ]
  },
  {
    question: {
      label: "Em média, quanto você pretende gastar em sua viagem?",
      type: "unique"
    },
    answer: [
      "Pretendo gastar pouco",
      "Quero um equilibrio entre custo e benefício",
      "Não me preocupo com o quanto irei gastar"
    ]
  }
]

export default formSteps