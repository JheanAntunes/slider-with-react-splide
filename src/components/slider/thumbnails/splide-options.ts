import { Options } from '@splidejs/react-splide'

export const mainOptions: Options = {
  type: 'loop',
  perPage: 2,
  perMove: 1,
  pagination: false,
  gap: '1rem'
}

export const thumbsOptions: Options = {
  type: 'slide',
  rewind: true,
  gap: '1rem',
  pagination: false,
  focus: 'center',
  fixedWidth: 120,
  fixedHeight: 60,
  isNavigation: true
}
