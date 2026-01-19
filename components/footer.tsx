export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">
              {'© 2026 Alien Dawn. All rights reserved.'}
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {'Privacy Policy'}
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {'Terms of Service'}
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {'Contact'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
