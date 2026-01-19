import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqData = [
  {
    question: 'What is Alien Dawn?',
    answer: 'Alien Dawn is a realistic, modern-day platformer targeted at adults. It combines fast-paced action with deep character development and meaningful storytelling.',
  },
  {
    question: 'Who are the characters?',
    answer: 'The game features compelling characters with morally gray aspects and diverse backstories. Each character has unique personalities that affect gameplay, allowing for multiple playthroughs with different experiences.',
  },
  {
    question: 'When will the game be released?',
    answer: 'Sign up for our newsletter to get the latest release date announcements and be the first to know when Alien Dawn becomes available!',
  },
  {
    question: 'What platforms will Alien Dawn be available on?',
    answer: 'Platform availability will be announced closer to release. Subscribe to our newsletter for updates on supported platforms and system requirements.',
  },
];

export default function FAQ() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">
            {'Frequently Asked Questions'}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            {'Everything you need to know about Alien Dawn'}
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
