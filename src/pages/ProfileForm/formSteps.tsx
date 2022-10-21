const formSteps = [
  {
    question: {
      label: "Quando pensa em fazer uma viagem, quais tipos de destinos vem em sua cabeça?",
      type: "multiple"
    },
    answer: [
      {
        label: "Montanhas",
        value: 1
      },
      {
        label: "Praias",
        value: 2
      },
      {
        label: "Trilhas",
        value: 3
      },
      {
        label: "Cachoeira",
        value: 4
      },
      {
        label: "Lugares Históricos",
        value: 5
      },
      {
        label: "Pontos Turísticos",
        value: 6
      },
    ]
  },
  {
    question: {
      label: "Com qual dessas frases você mais se identifica?",
      type: "unique"
    },
    answer: [
      {
        label:  "Escolho destinos com base na oportunidade e no meu momento, não interessa qual, apenas o que vai me proporcionar.",
        value: 1
      },
      {
        label: "Procuro absorver ao máximo a cultura do destino, incluindo sua culinária e história! Aprender uma nova perspectiva de vida é sempre interessante.",
        value: 2
      },
      {
        label:  "Procuro lugares com muita beleza visual, para que eu possa registrar os momentos da melhor forma possível.",
        value: 3
      },
      {
        label: "Sempre me preocupo com o custo benefício da viagem, pagar menos e aproveitar mais é meu foco!",
        value: 4
      },
      {
        label: "Procuro evoluir como pessoa a cada viagem, aprender mais e encontrar um novo propósito de vida.",
        value: 5
      },
      {
        label: "Quero conhecer pessoas interessantes, ouvir histórias de vida diferentes e me socializar com a população local.",
        value: 6
      },
    ]
  },
  {
    question: {
      label: "Em média, quanto você pretende gastar em sua viagem?",
      type: "unique"
    },
    answer: [
      {
        label: "Pretendo gastar pouco",
        value: 1
      },
      {
        label: "Quero um equilibrio entre custo e benefício",
        value: 2
      },
      {
        label: "Não me preocupo com o quanto irei gastar",
        value: 3
      },
    ]
  }
]

export default formSteps