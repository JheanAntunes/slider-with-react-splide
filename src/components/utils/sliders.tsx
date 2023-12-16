import { SpliderSliderClient } from '@/components/example/splider-slider-client'
import { TypographyH2 } from '../typography/tipography'
import { dataSliders } from './dataSliders'

function Sliders() {
  return (
    <>
      {dataSliders.map((valueCurrent, index) => (
        <SpliderSliderClient key={valueCurrent + index}>
          <div className="flex h-56 w-full items-center justify-center rounded bg-emerald-600">
            <TypographyH2 className="text-zinc-950 lg:text-3xl">
              {valueCurrent + 1}
            </TypographyH2>
          </div>
        </SpliderSliderClient>
      ))}
    </>
  )
}

export default Sliders
