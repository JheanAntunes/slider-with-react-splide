import HomePageSliderBasic from '@/components/slider/home-page-slider-basic'
import HomePageSliderAutoScroll from '@/components/slider/slider-auto-scroll/home-page-slider-auto-scroll'
import HomePageThumbnails from '@/components/slider/thumbnails/home-page-thumbnails'
export default function Home() {
  return (
    <main className="container flex flex-col gap-20">
      <HomePageSliderBasic />
      <HomePageSliderAutoScroll />
      <HomePageThumbnails />
    </main>
  )
}
