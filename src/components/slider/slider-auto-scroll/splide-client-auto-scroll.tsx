'use client'
import { SplideClient } from '@/components/example/splider-slider-client'
// "ts-ignore"
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'

type SplideClientAutoScrollProps = {
  options: Record<string, unknown>
} & React.PropsWithChildren

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
