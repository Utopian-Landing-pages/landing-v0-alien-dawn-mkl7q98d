import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-block rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm backdrop-blur-sm">
            <span className="text-muted-foreground">{'Coming Soon'}</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-balance md:text-6xl lg:text-7xl">
            {'Fight the aliens.'}
            <br />
            <span className="text-accent">{'Confront your demons.'}</span>
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty">
            {'Compelling characters with morally gray aspects, diverse backstories, and unique personalities affecting gameplay.'}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="text-base">
              {'Play Now'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent">
              {'Watch Trailer'}
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
