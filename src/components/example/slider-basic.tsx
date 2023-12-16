import ImageSliderOne from '@/assets/img-1.jpg'
import ImageSliderTwo from '@/assets/img-2.jpg'
import ImageSliderThree from '@/assets/img-3.jpg'
import '@splidejs/splide/css/core'
import Image from 'next/image'
import { SplideClient, SpliderSliderClient } from './splider-slider-client'
function SliderBasic() {
  return (
    <section className="w-full max-w-2xl">
      <SplideClient
        aria-label="Carrousel de imagens"
        options={{
          snap: true,
          paginationDirection: 'rtl',
          rewind: true,
          rewindByDrag: true, //Ciclo infinito do slider, quando chegar no final, volta para inicio.
          autoScroll: {
            speed: 1
          }
        }}
      >
        <SpliderSliderClient>
          <div className="relative h-56 w-full overflow-hidden rounded">
            <Image
              src={ImageSliderOne}
              alt="Description of image"
              fill
              className="object-cover"
            />
          </div>
        </SpliderSliderClient>
        <SpliderSliderClient>
          <div className="relative h-56 w-full overflow-hidden rounded">
            <Image
              src={ImageSliderTwo}
              alt="Description of image"
              fill
              className="object-cover"
            />
          </div>
        </SpliderSliderClient>
        <SpliderSliderClient>
          <div className="relative h-56 w-full overflow-hidden rounded">
            <Image
              src={ImageSliderThree}
              alt="Description of image"
              fill
              className="object-cover"
            />
          </div>
        </SpliderSliderClient>
      </SplideClient>
    </section>
  )
}

export default SliderBasic
