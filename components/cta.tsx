'use client';

import React from "react"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail } from 'lucide-react';
import { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('[v0] Email submitted:', email);
  };

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border/50 bg-secondary/30 p-8 text-center backdrop-blur-sm md:p-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
            {'Ready to dive into Alien Dawn?'}
          </h2>
          <p className="mb-8 text-lg text-muted-foreground text-pretty">
            {'Sign up for early access and exclusive updates!'}
          </p>

          <form onSubmit={handleSubmit} className="mx-auto max-w-md">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex-1">
                <Label htmlFor="email" className="sr-only">
                  {'Email'}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11"
                />
              </div>
              <Button type="submit" size="lg" className="h-11">
                <Mail className="mr-2 h-4 w-4" />
                {'Get Notified'}
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              {'We respect your privacy. Unsubscribe at any time.'}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
