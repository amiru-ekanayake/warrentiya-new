import { type VariantProps } from "class-variance-authority";
import { ArrowRightIcon } from "lucide-react";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import Github from "../../logos/github";
import { Badge } from "../../ui/badge";
import { Button, buttonVariants } from "../../ui/button";
import Glow from "../../ui/glow";
import { Mockup, MockupFrame } from "../../ui/mockup";
import Screenshot from "../../ui/screenshot";
import { Section } from "../../ui/section";

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface HeroProps {
  title?: string;
  description?: string;
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
}

export default function Hero({
  title = "Digital Warranty Wallet",
  description = "Sri Lanka's easiest way to manage and protect your purchase warranties.",
  mockup = (
    <div className="relative flex flex-col items-center justify-center w-full max-w-6xl mx-auto gap-6 sm:flex-row sm:gap-10">
      {/* Desktop Mockup - Centered */}
      <div className="hidden sm:block flex-1 max-w-3xl">
        <MockupFrame className="w-full">
          <Mockup
            type="responsive"
            className="bg-background/90 w-full rounded-xl border-0 p-8"
          >
            <div className="flex flex-col gap-6">
              {/* Dashboard Header - Centered */}
              <div className="text-center space-y-1">
                <h2 className="text-3xl font-bold">Warranty Dashboard</h2>
                <p className="text-muted-foreground text-sm">Manage all your warranties in one place</p>
              </div>

              {/* Stats Grid - Organized */}
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-card rounded-lg border p-4 text-center">
                  <p className="text-muted-foreground text-xs uppercase tracking-wide mb-2">Total Warranties</p>
                  <p className="text-3xl font-bold mb-1">24</p>
                  <p className="text-green-600 text-xs font-medium">↑ +12.5%</p>
                </div>
                <div className="bg-card rounded-lg border p-4 text-center">
                  <p className="text-muted-foreground text-xs uppercase tracking-wide mb-2">Active</p>
                  <p className="text-3xl font-bold mb-1">18</p>
                  <p className="text-green-600 text-xs font-medium">↑ +8%</p>
                </div>
                <div className="bg-card rounded-lg border p-4 text-center">
                  <p className="text-muted-foreground text-xs uppercase tracking-wide mb-2">Expiring Soon</p>
                  <p className="text-3xl font-bold mb-1">3</p>
                  <p className="text-orange-600 text-xs font-medium">⚠ Attention</p>
                </div>
                <div className="bg-card rounded-lg border p-4 text-center">
                  <p className="text-muted-foreground text-xs uppercase tracking-wide mb-2">Expired</p>
                  <p className="text-3xl font-bold mb-1">3</p>
                  <p className="text-red-600 text-xs font-medium">↓ -20%</p>
                </div>
              </div>

              {/* Warranty List - Better organized */}
              <div className="bg-card rounded-lg border overflow-hidden">
                <div className="px-6 py-4 border-b bg-muted/30">
                  <h3 className="font-semibold text-center">Recent Warranties</h3>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    {[
                      { name: "iPhone 15 Pro", brand: "Apple Inc.", days: 328, status: "Active", progress: 75, color: "green" },
                      { name: "MacBook Pro M3", brand: "Apple Inc.", days: 45, status: "Expiring Soon", progress: 25, color: "orange" },
                      { name: "Samsung TV 65\"", brand: "Samsung Electronics", days: 512, status: "Active", progress: 90, color: "green" },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-muted/30 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex-1">
                            <p className="font-semibold text-base">{item.name}</p>
                            <p className="text-muted-foreground text-xs mt-0.5">{item.brand}</p>
                          </div>
                          <Badge className={`bg-${item.color}-500/10 text-${item.color}-600 border-${item.color}-200`}>
                            {item.status}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Warranty Period</span>
                            <span className={`font-semibold text-${item.color}-600`}>{item.days} days left</span>
                          </div>
                          <div className="bg-muted h-2 rounded-full overflow-hidden">
                            <div 
                              className={`bg-${item.color}-500 h-full rounded-full transition-all`} 
                              style={{ width: `${item.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Mockup>
        </MockupFrame>
      </div>

      {/* Mobile Mockup - Centered alongside desktop */}
      {/* Mobile Mockup - Always visible, centered */}
<div className="flex-shrink-0 w-full max-w-xs sm:max-w-[20rem]">
  <MockupFrame className="w-full shadow-2xl">
    <Mockup className="bg-background/95 w-full rounded-2xl border-0 p-5">
      <div className="flex flex-col items-center w-full gap-4">
        {/* Mobile Header - Centered */}
        <div className="text-center space-y-1 w-full">
          <h2 className="text-xl font-bold">My Warranties</h2>
          <p className="text-muted-foreground text-xs">Track all your products</p>
        </div>
        
        {/* Stats Summary - Centered */}
        <div className="grid grid-cols-3 gap-2 mb-2 w-full">
          <div className="bg-card rounded-lg border p-2 text-center flex flex-col items-center">
            <p className="text-xs text-muted-foreground mb-1">Active</p>
            <p className="text-xl font-bold text-green-600">18</p>
          </div>
          <div className="bg-card rounded-lg border p-2 text-center flex flex-col items-center">
            <p className="text-xs text-muted-foreground mb-1">Expiring</p>
            <p className="text-xl font-bold text-orange-600">3</p>
          </div>
          <div className="bg-card rounded-lg border p-2 text-center flex flex-col items-center">
            <p className="text-xs text-muted-foreground mb-1">Total</p>
            <p className="text-xl font-bold">24</p>
          </div>
        </div>
        
        {/* Warranty Cards - Centered */}
        <div className="flex flex-col items-center w-full gap-3">
          {/* Active Warranty Card */}
          <div className="bg-card rounded-lg border p-3.5 shadow-sm w-full">
            <div className="flex items-center justify-between mb-3 w-full">
              <div className="flex-1 text-left">
                <p className="font-semibold text-sm">iPhone 15 Pro</p>
                <p className="text-muted-foreground text-xs mt-0.5">Apple Inc.</p>
              </div>
              <Badge className="bg-green-500/10 text-green-600 text-xs border-green-200">Active</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Expires in</span>
                <span className="font-semibold text-green-600">328 days</span>
              </div>
              <div className="bg-muted h-1.5 rounded-full overflow-hidden w-full">
                <div className="bg-green-500 h-full w-3/4 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Expiring Soon Card */}
          <div className="bg-card rounded-lg border border-orange-200 p-3.5 shadow-sm w-full">
            <div className="flex items-center justify-between mb-3 w-full">
              <div className="flex-1 text-left">
                <p className="font-semibold text-sm">MacBook Pro M3</p>
                <p className="text-muted-foreground text-xs mt-0.5">Apple Inc.</p>
              </div>
              <Badge className="bg-orange-500/10 text-orange-600 text-xs border-orange-200">Expiring</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Expires in</span>
                <span className="font-semibold text-orange-600">45 days</span>
              </div>
              <div className="bg-muted h-1.5 rounded-full overflow-hidden w-full">
                <div className="bg-orange-500 h-full w-1/4 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Another Active Card */}
          <div className="bg-card rounded-lg border p-3.5 shadow-sm w-full">
            <div className="flex items-center justify-between mb-3 w-full">
              <div className="flex-1 text-left">
                <p className="font-semibold text-sm">Samsung TV 65"</p>
                <p className="text-muted-foreground text-xs mt-0.5">Samsung</p>
              </div>
              <Badge className="bg-green-500/10 text-green-600 text-xs border-green-200">Active</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Expires in</span>
                <span className="font-semibold text-green-600">512 days</span>
              </div>
              <div className="bg-muted h-1.5 rounded-full overflow-hidden w-full">
                <div className="bg-green-500 h-full w-full rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Mockup>
  </MockupFrame>
</div>

    </div>
  ),
  badge = (
    <Badge variant="outline" className="animate-appear">
      <span className="text-muted-foreground">
        Get ready for something exciting!
      </span>
    </Badge>
  ),
  buttons = [
    {
      href: siteConfig.getStartedUrl,
      text: "Join Waitlist",
      variant: "default",
    },
    {
      href: siteConfig.links.github,
      text: "Github",
      variant: "glow",
      icon: <Github className="mr-2 size-4" />,
    },
  ],
  className,
}: HeroProps) {
  return (
    <Section
      className={cn(
        "fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0",
        className,
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {badge !== false && badge}
          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            {title}
          </h1>
          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
            {description}
          </p>
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear relative z-10 flex justify-center gap-4 opacity-0 delay-300">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || "default"}
                  size="lg"
                  asChild
                >
                  <a href={button.href}>
                    {button.icon}
                    {button.text}
                    {button.iconRight}
                  </a>
                </Button>
              ))}
            </div>
          )}
          {mockup !== false && (
            <div className="relative w-full pt-12">
              <div className="animate-appear opacity-0 delay-700">
                {mockup}
              </div>
              <Glow
                variant="top"
                className="animate-appear-zoom opacity-0 delay-1000"
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
