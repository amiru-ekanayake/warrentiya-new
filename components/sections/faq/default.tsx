import Link from "next/link";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Questions and Answers",
  items = [
    {
      question: "What is Warrantiya?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Warrantiya is a digital warranty wallet and tracking platform that helps you organize all your product warranties in one secure place. Easily add products, track warranty expiry dates, upload receipts, and stay notified about important updates.
        </p>
      ),
    },
    {
      question: "How does Warrantiya help me?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            Warrantiya eliminates paperwork and forgotten expiry dates. You’ll get reminders when your warranties are about to expire, can quickly access your receipts for claims, and never miss eligible repairs or replacements.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px]">
            You can also manage multiple products and view warranty status (active/expiring) at a glance from desktop or mobile.
          </p>
        </>
      ),
    },
    // {
    //   question: "Is Warrantiya free to use?",
    //   answer: (
    //     <p className="text-muted-foreground mb-4 max-w-[640px]">
    //       Yes! You can create an account and manage as many warranties as you want for free. We may offer premium features for businesses, but core tracking and notifications are always free for personal users.
    //     </p>
    //   ),
    // },
    {
      question: "Can I use Warrantiya on my mobile device?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Absolutely. Warrantiya works perfectly on smartphones, tablets, and desktops—just visit the website on any device. Your data stays synced and accessible wherever you go.
        </p>
      ),
    },
    {
      question: "How do I add a new product and warranty?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Simply sign up or log in, click “Add Warranty,” fill out product details, upload your receipt or warranty document, and set the expiry date. Warrantiya will handle reminders and tracking automatically.
        </p>
      ),
    },
    {
      question: "Is my data safe and private?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Yes. All your data is protected using industry-standard security practices, encrypted at rest and in transit. Only you can view or manage your warranties unless you choose to share information.
        </p>
      ),
    },
    {
      question: "How do I get notified about expiring warranties?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Warrantiya will email you or send app notifications as your product warranty nears expiration—so you never miss a renewal or claim opportunity.
        </p>
      ),
    },
    {
      question: "Can I export my warranty data?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Yes, coming soon! You’ll be able to export a list of all warranties, including details and expiry dates, for your records or reports.
        </p>
      ),
    },
    {
      question: "Who is Warrantiya for?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Anyone who buys products and wants to protect their investments—individuals, families, and businesses. We make warranty management simple and effortless.
        </p>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
