'use client'
import { SplideClient } from '@/components/example/splider-slider-client'
// "ts-ignore"
import { Options, SplideProps } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import { PropsWithChildren } from 'react'

type SplideClientAutoScrollProps = {
  options: Options
} & SplideProps &
  PropsWithChildren

function SplideClientAutoScroll({
  options,
  children,
  ...restProps
}: SplideClientAutoScrollProps) {
  return (
    <SplideClient
      options={{
        ...options,
        autoScroll: {
          speed: 0.5,
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: false
        }
      }}
      extensions={{ AutoScroll }}
      {...restProps}
    >
      {children}
    </SplideClient>
  )
}

export default SplideClientAutoScroll
