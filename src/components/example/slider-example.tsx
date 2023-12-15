import React from 'react'
import ImgClientContrato from "@/assets/img-client-contrato.jpg"
import ImgClientDepoimento from "@/assets/img-client-depoimento.jpg"
import ImgSliderOne from "@/assets/img-1.jpg"
import ImgSliderTwo from "@/assets/img-2.jpg"
import ImgSliderThree from "@/assets/img-3.jpg"
import Image from 'next/image';
import '@splidejs/react-splide/css/sea-green';
import {SplideClient, SpliderSliderClient} from "@/components/example/splider-slider-client"
function SliderExample() {
  return (
    <div className='w-full max-w-4xl'>
    <SplideClient aria-label="My Favorite Images" 
    options={ {
    rewind: true,
    gap   : '1rem',
    perPage: 3,
    perMove: 3,
    } }
  >
          <SpliderSliderClient>
            <div className='relative w-full h-52'>
              <Image  src={ImgClientContrato} alt='dsadsadas' fill className='object-cover' priority />
            </div>
          </SpliderSliderClient>
          <SpliderSliderClient>
            <div className='relative w-full h-52'>
              <Image  src={ImgClientDepoimento} alt='dsadsadas' fill className='object-cover' priority />
            </div>
          </SpliderSliderClient>
          <SpliderSliderClient>
            <div className='relative w-full h-52'>
              <Image  src={ImgSliderOne} alt='dsadsadas' fill className='object-cover' priority />
            </div>
          </SpliderSliderClient>
          <SpliderSliderClient>
            <div className='relative w-full h-52'>
              <Image  src={ImgSliderTwo} alt='dsadsadas' fill className='object-cover' priority />
            </div>
          </SpliderSliderClient>
          <SpliderSliderClient>
            <div className='relative w-full h-52'>
              <Image  src={ImgSliderThree} alt='dsadsadas' fill className='object-cover' priority />
            </div>
          </SpliderSliderClient>
          <SpliderSliderClient>
            <div className='relative w-full h-52'>
              <Image  src={ImgClientContrato} alt='dsadsadas' fill className='object-cover' priority />
            </div>
          </SpliderSliderClient>
          <SpliderSliderClient>
            <div className='relative w-full h-52'>
              <Image  src={ImgClientDepoimento} alt='dsadsadas' fill className='object-cover' priority />
            </div>
          </SpliderSliderClient>
</SplideClient>
    </div>
  )
}

export default SliderExample