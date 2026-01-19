import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, Sparkles } from 'lucide-react';

const featuresData = [
  {
    icon: Users,
    title: 'Morally Gray Characters',
    description: 'Experience characters with complex motivations and difficult choices that challenge your perception of right and wrong.',
  },
  {
    icon: BookOpen,
    title: 'Diverse Backstories',
    description: 'Uncover rich and compelling backstories that shape character actions and create meaningful connections.',
  },
  {
    icon: Sparkles,
    title: 'Unique Personalities',
    description: 'Engage with characters whose personalities dynamically impact the gameplay and story outcomes.',
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">
            {'Key Features'}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            {'Dive into a world where every choice matters and every character has a story to tell.'}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-card/80">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
