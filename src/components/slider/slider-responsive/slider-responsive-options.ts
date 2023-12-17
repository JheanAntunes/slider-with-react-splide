export const sliderResponsiveOptionsDefault = {
  mediaQuery: 'min', //mobile firts
  breakpoints: {
    1024: {
      perPage: 3,
      perMove: 1 // vai mover em quantos elementos no slider
    },
    768: {
      perPage: 2, // A qtd que o slider vai mostrar
      perMove: 1 // vai mover em quantos elementos no slider
    }
  },
  type: 'loop', //carrosel infinito.
  snap: true, // ajeita o próximo sem rodar.
  rewind: true, // a velocidade de transition
  start: 0, //O slider se inicia
  drag: 'free', //não permite o usuario arrastar o slider mobile
  perPage: 1, // A qtd que o slider vai mostrar
  perMove: 1, // vai mover em quantos elementos no slider
  gap: '2rem'
}
