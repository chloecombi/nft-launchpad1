import Hero from '@/components/Hero';
import Steps from '@/components/Steps';
import Trending from '@/components/Trending';

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Trending />
      <Steps />
    </main>
  );
}