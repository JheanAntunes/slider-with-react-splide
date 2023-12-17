'use client'
import { SplideClient } from '@/components/example/splider-slider-client'
import { TypographyH1 } from '@/components/typography/tipography'
import Sliders from '@/components/utils/sliders'
import { mainOptions, thumbsOptions } from './splide-options'
import { useThumbnails } from './useThumbnails'

function HomePageThumbnails() {
  const { sliderMainRef, sliderThubnailsRef } = useThumbnails()

  return (
    <div className="wrapper flex flex-col gap-8">
      <TypographyH1 id="thumbnail-slider-example" className="lg:text-4xl">
        Thumbnail Slider
      </TypographyH1>

      <SplideClient
        options={mainOptions}
        ref={sliderMainRef}
        aria-labelledby="thumbnail-slider-example"
      >
        <Sliders />
      </SplideClient>

      <SplideClient
        options={thumbsOptions}
        ref={sliderThubnailsRef}
        aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
      >
        <Sliders className="h-full" />
      </SplideClient>
    </div>
  )
}

export default HomePageThumbnails
