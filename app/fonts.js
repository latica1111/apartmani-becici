
import { Inter, Marcellus ,Cormorant,Josefin_Sans } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin', 'latin-ext'], // ili 'latin-ext' ako ti treba
  weight: ['300','400','500','600','700'], // iste težine kao u linku
  variable: '--font-inter', // opciono, za CSS var
  style:["normal","italic"],
});
export const marcellus = Marcellus({
  subsets: ['latin', 'latin-ext'],
  weight: ['400'], // Marcellus uglavnom ima samo normalnu težinu
   variable: '--font-marcellus', 
});

export const cormorant = Cormorant({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

export const josefinSans = Josefin_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-josefin-sans',
});
