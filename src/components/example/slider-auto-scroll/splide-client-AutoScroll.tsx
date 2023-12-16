'use client'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import { PropsWithChildren } from 'react'
import { SplideClient } from '../splider-slider-client'
function SplideClientAutoScroll({ children }: PropsWithChildren) {
  return (
    <SplideClient
      aria-label="meu carrosel automatico"
      options={{
        type: 'loop',
        snap: true,
        rewindByDrag: true,
        drag: 'free',
        gap: '2rem',
        perPage: 2,
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: false,
          speed: 0.5
        }
      }}
      extensions={{ AutoScroll }}
    >
      {children}
    </SplideClient>
  )
}

export default SplideClientAutoScroll
