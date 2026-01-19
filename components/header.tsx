import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <h1 className="text-xl font-bold tracking-tight">
            {'ALIEN DAWN'}
          </h1>
        </div>
        <nav className="flex items-center gap-6">
          <Button variant="ghost" className="hidden md:inline-flex">
            {'Features'}
          </Button>
          <Button variant="ghost" className="hidden md:inline-flex">
            {'FAQ'}
          </Button>
          <Button size="sm">
            {'Get Early Access'}
          </Button>
        </nav>
      </div>
    </header>
  );
}
