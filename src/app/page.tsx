import HomePageSliderBasic from '@/components/slider/home-page-slider-basic'
import HomePageSliderAutoScroll from '@/components/slider/slider-auto-scroll/home-page-slider-auto-scroll'
import HomePageSliderResponsive from '@/components/slider/slider-responsive/home-page-slider-responsive'
import HomePageThumbnails from '@/components/slider/thumbnails/home-page-thumbnails'
export default function Home() {
  return (
    <main className="container flex flex-col gap-8 pb-8">
      <HomePageSliderBasic />
      <HomePageSliderAutoScroll />
      <HomePageThumbnails />
      <HomePageSliderResponsive />
    </main>
  )
}
