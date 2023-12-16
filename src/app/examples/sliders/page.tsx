import SliderAutoScroll from '@/components/example/slider-auto-scroll/slider-auto-scroll'
import SliderBasic from '@/components/example/slider-basic'
import SliderExample from '@/components/example/slider-example'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-8">
      <SliderExample />
      <SliderBasic />
      <SliderAutoScroll />
    </main>
  )
}
