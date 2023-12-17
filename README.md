# Introdução :heart_eyes:
Lib: [splideJs](https://splidejs.com/integration/react-splide/):sunglasses:

Projeto para praticar uma lib de slider porque tem uma interface que quero fazer e contém slider.
eu conseguiria fazer com framer motion, mas é melhor procurar uma lib que foi construída para fazer slider :sweat_smile:

## Aprendizado sobre a lib :nerd_face:
- criar um slider com tsx com componentes Splide(wrapper) SplideSlider(sliderItem)
- Styles :lipstick:
- Acessibilidade :wheelchair:
- Sincronizar os Splide [slider thumbnails](https://github.com/Splidejs/react-splide/blob/master/examples/src/js/components/ThumbnailsExample.tsx)
- configurar slider com [options](https://splidejs.com/guides/options/)
  - Responsividade :iphone:
  - auto-scroll com a [extension](https://splidejs.com/extensions/auto-scroll/)
  - Mais propriedades, perPage, perMove, etc... :monocle_face:

melhorando [padrão-commits](https://github.com/iuricode/padroes-de-commits)

## Dificuldades :skull:
Typescript dando errror no import { Splide, SplideSlide } from '@splidejs/react-splide', encontrei a solução nessa [issue no comentário do tresorama commented on Sep 11](https://github.com/Splidejs/splide/issues/1179) 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
