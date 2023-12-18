# Introdução :heart_eyes:
Lib: [splideJs](https://splidejs.com/integration/react-splide/):sunglasses:

site hospedado na vercel [sliderJSPratica](https://slider-with-react-splide.vercel.app)

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
Typescript dando errror no import { Splide, SplideSlide } from '@splidejs/react-splide', encontrei a solução para modo desenvolvimento nessa [issue no comentário do tresorama commented on Sep 11](https://github.com/Splidejs/splide/issues/1179) 
`Porém, quando vai fazer o build na vercel aparece o error novamente de imports do splider que não encontra a declaração de módulo`
A solução é transformando os arquivos em jsx, você pode utilizar desse modo

explicando: código

> Por padrão em NextJs os componentes são renderizado no lado do servidor, mas se o componente precisa renderizar no client, você pode utilizar a diretiva "use client" no topo (acima dos import, export, etc)!`
> Os componentes Splider, SpliderSlider utiliza recursos do navegador, apis, events. Atalho: Você cria uma constante que vai receber o componente da lib (function) e adicionado a diretiva "use client" nesse arquivo vai informar o nextjs que esses componentes são renderizados no client. Se você não conhecesse esse atalho, você provavelmente faria desse modo
> // obs: como esse arquivo é jsx para não acontecer o error de imports, tsx {children}:React.PropsWithChildren

`export const SpliderClientComponent = ({children}) => {
    <Splide>{children}</Splide>
}
`
### Exemplo básico

> Atalho client-side + jsx para não acontecer error de imports no momento da build do projeto.

![pattern-client-side](https://github.com/JheanAntunes/slider-with-react-splide/assets/120582814/a2dfb4f6-b897-4531-8bf0-f6a061320846)

único arquivo que será jsx é esse acima, o resto você utiliza tsx importando esses componentes.

![componente-slider-basic](https://github.com/JheanAntunes/slider-with-react-splide/assets/120582814/44fe33af-32ae-498d-83bd-3adb5c069d51)

Error: Não import nada do modulo splider, interface, component.

### Exemplo com auto-scroll

![pattern-splide-auto-scroll](https://github.com/JheanAntunes/slider-with-react-splide/assets/120582814/2cec0d57-f684-423e-aafb-a540bfa62f89)

[
![component-auto-scroll](https://github.com/JheanAntunes/slider-with-react-splide/assets/120582814/7f24ef59-42b5-4f86-ac7b-c6080868786e)
](url)

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
