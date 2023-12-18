import { createRef, useEffect } from 'react'
export const useThumbnails = () => {
  const sliderMainRef = createRef()
  const sliderThubnailsRef = createRef()

  useEffect(() => {
    console.log('executando novamente')
    if (
      sliderMainRef.current &&
      sliderThubnailsRef.current &&
      sliderThubnailsRef.current.splide
    ) {
      sliderMainRef.current.sync(sliderThubnailsRef.current.splide)
    }
  }, [sliderMainRef, sliderThubnailsRef])

  return {
    sliderMainRef,
    sliderThubnailsRef
  }
}
