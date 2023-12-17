import { TypographyH1 } from '@/components/typography/tipography'
import Sliders from '@/components/utils/sliders'
import '@splidejs/react-splide/css'
import SplideClientAutoScroll from './splide-client-auto-scroll'

function HomePageSliderAutoScroll() {
  return (
    <section className="flex flex-col gap-8">
      <TypographyH1 id="descriptionCarroselAutoScroll" className="lg:text-4xl">
        Exemplo de carrosel automatico
      </TypographyH1>
      <SplideClientAutoScroll
        options={{
          type: 'loop',
          perPage: 3,
          perMove: 3,
          drag: 'free',
          gap: '2rem'
        }}
        aria-labelledby="descriptionCarroselAutoScroll"
      >
        <Sliders />
      </SplideClientAutoScroll>
    </section>
  )
}

export default HomePageSliderAutoScroll
