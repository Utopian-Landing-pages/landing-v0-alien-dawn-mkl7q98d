import Header from '@/components/header';
import Hero from '@/components/hero';
import Features from '@/components/features';
import CTA from '@/components/cta';
import FAQ from '@/components/faq';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="dark min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
