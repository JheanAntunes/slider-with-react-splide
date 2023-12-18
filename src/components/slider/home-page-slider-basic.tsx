import Sliders from '@/components/utils/sliders'
import '@splidejs/react-splide/css'
import Link from 'next/link'
import { SplideClient } from '../example/splider-client'
import { TypographyH1 } from '../typography/tipography'
function HomePageSliderBasic() {
  return (
    <section className="mt-5 flex flex-col gap-8">
      <div className="flex gap-2">
        <TypographyH1 id="descriptionSlider" className="lg:text-4xl">
          Carrossel Básico na lib
        </TypographyH1>
        <Link
          href="https://splidejs.com/guides/version4/"
          target="_blank"
          referrerPolicy="no-referrer"
          className="text-sm text-blue-500 underline lg:text-4xl lg:hover:text-blue-700"
        >
          SpliderJs
        </Link>
      </div>
      <SplideClient
        aria-labelledby="descriptionSlider"
        options={{
          type: 'loop', //carrosel infinito.
          snap: true, // ajeita o próximo sem rodar.
          rewind: true, // a velocidade de transition
          start: 1, //O slider se inicia
          paginationKeyboard: true, //habilita as teclas para mover o slider.
          drag: 'free', //não permite o usuario arrastar o slider mobile
          perPage: 3, // A qtd que o slider vai mostrar
          focus: 'center', // focus no elemento center
          perMove: 1, // vai mover em quantos elementos no slider
          gap: '2rem', // estilização css gap
          classes: {
            // classes adicionais.
            prev: 'splide__arrow--prev bg-blue-500 myclasses'
          }
        }}
      >
        <Sliders />
      </SplideClient>
    </section>
  )
}

export default HomePageSliderBasic
