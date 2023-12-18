import ImageSliderOne from '@/assets/img-1.jpg'
import ImageSliderTwo from '@/assets/img-2.jpg'
import ImageSliderThree from '@/assets/img-3.jpg'
import Image from 'next/image'
import { SpliderSliderClient } from '../splider-client'
import SplideClientAutoScroll from './splide-client-AutoScroll'
function SliderAutoScroll() {
  return (
    <section className="w-full max-w-3xl">
      <SplideClientAutoScroll>
        <SpliderSliderClient>
          <div className="relative h-56 overflow-hidden rounded">
            <Image
              src={ImageSliderOne}
              alt="Description"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </SpliderSliderClient>
        <SpliderSliderClient>
          <div className="relative h-56 overflow-hidden rounded">
            <Image
              src={ImageSliderTwo}
              alt="Description"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </SpliderSliderClient>
        <SpliderSliderClient>
          <div className="relative h-56 overflow-hidden rounded">
            <Image
              src={ImageSliderThree}
              alt="Description"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </SpliderSliderClient>
      </SplideClientAutoScroll>
    </section>
  )
}

export default SliderAutoScroll
