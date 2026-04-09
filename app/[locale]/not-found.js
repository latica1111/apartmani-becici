// app/[locale]/[...rest]/page.tsx
import {notFound} from 'next/navigation';
import { useTranslations } from 'next-intl';
export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');
  if(!t) {  notFound(); }// poziva closest not-found page }
  else{return <h1>{t('title')}</h1>; }
}