// app/[locale]/[...rest]/page.tsx
import {notFound} from 'next/navigation';

export default function CatchAllPage() {
  notFound(); // poziva closest not-found page
}