import { SpliderSliderClient } from '@/components/example/splider-slider-client'
import { TypographyH2 } from '../typography/tipography'
import { cn } from './cn'
import { dataSliders } from './dataSliders'

function Sliders({ className, ...restProps }: React.ComponentProps<'div'>) {
  return (
    <>
      {dataSliders.map((valueCurrent, index) => (
        <SpliderSliderClient key={valueCurrent + index}>
          <div
            className={cn(
              'flex h-56 w-full items-center justify-center rounded bg-gradient-to-tr from-emerald-300 via-emerald-400 to-emerald-600',
              className
            )}
            {...restProps}
          >
            <TypographyH2 className="font-mono font-bold text-blue-600 lg:text-3xl">
              {valueCurrent + 1}
            </TypographyH2>
          </div>
        </SpliderSliderClient>
      ))}
    </>
  )
}

export default Sliders
