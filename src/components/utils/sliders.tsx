import { SpliderSliderClient } from '@/components/example/splider-slider-client'
import { dataSliders } from './dataSliders'

function Sliders() {
  return (
    <>
      {dataSliders.map((valueCurrent, index) => (
        <SpliderSliderClient key={valueCurrent + index}>
          <div className="h-56 w-full rounded bg-emerald-600 text-3xl text-zinc-950">
            {valueCurrent + 1}
          </div>
        </SpliderSliderClient>
      ))}
    </>
  )
}

export default Sliders
