
import { Inter, Marcellus  } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin', 'latin-ext'], // ili 'latin-ext' ako ti treba
  weight: ['400','500','600','700'], // iste težine kao u linku
  variable: '--font-inter', // opciono, za CSS var
  style:["normal","italic"],
});
export const marcellus = Marcellus({
  subsets: ['latin', 'latin-ext'],
  weight: ['400'], // Marcellus uglavnom ima samo normalnu težinu
   variable: '--font-marcellus', 
});