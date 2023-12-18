import { SplideClient } from '@/components/example/splider-slider-client'
import { TypographyH1 } from '@/components/typography/tipography'
import Sliders from '@/components/utils/sliders'
import { sliderResponsiveOptionsDefault } from './slider-responsive-options'

function HomePageSliderResponsive() {
  return (
    <section className="flex flex-col gap-8">
      <TypographyH1 id="descriptionSliderResponsivo">
        Slider Responsivo
      </TypographyH1>
      <SplideClient
        aria-labelledby="descriptionSliderResponsivo"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        options={sliderResponsiveOptionsDefault}
      >
        <Sliders />
      </SplideClient>
    </section>
  )
}

export default HomePageSliderResponsive
