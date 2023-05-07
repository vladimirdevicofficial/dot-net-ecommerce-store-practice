import { Bebas_Neue, Roboto, Roboto_Mono } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});
const robotoMono = Roboto_Mono({
  weight: ['400', '500'],
  style: ['normal'],
  subsets: ['latin'],
});
const roboto = Roboto({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});


export const fonts = {
  robotoMono: robotoMono.style.fontFamily,
  bebasNeue: bebasNeue.style.fontFamily,
  roboto: roboto.style.fontFamily,
};
