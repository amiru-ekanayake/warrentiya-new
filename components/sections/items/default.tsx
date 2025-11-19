import {
  BellIcon,
  CheckCircleIcon,
  DatabaseIcon,
  LockIcon,
  QrCodeIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  TrendingUpIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "What we offer",
  items = [
    {
      title: "QR Code Registration",
      description: "Instantly register warranties by scanning QR codes - no lengthy forms required",
      icon: <QrCodeIcon className="size-5 stroke-1" />,
    },
    {
      title: "Smart Notifications",
      description: "Get automatic alerts before warranties expire and never miss a claim deadline",
      icon: <BellIcon className="size-5 stroke-1" />,
    },
    {
      title: "Centralized Storage",
      description: "Store all warranty documents and receipts digitally in one secure place",
      icon: <DatabaseIcon className="size-5 stroke-1" />,
    },
    {
      title: "Automated Claims",
      description: "Track warranty claims in real-time with automated validation and processing",
      icon: <CheckCircleIcon className="size-5 stroke-1" />,
    },
    {
      title: "Mobile Access",
      description: "Access your warranty information anytime, anywhere from your mobile device",
      icon: <SmartphoneIcon className="size-5 stroke-1" />,
    },
    {
      title: "Secure & Private",
      description: "Your warranty data is encrypted and protected with enterprise-grade security",
      icon: <LockIcon className="size-5 stroke-1" />,
    },
    {
      title: "Cost Savings",
      description: "Reduce repair costs by up to 20% by leveraging warranty coverage effectively",
      icon: <TrendingUpIcon className="size-5 stroke-1" />,
    },
    {
      title: "Verified Protection",
      description: "Blockchain-verified warranty records that are tamper-proof and trustworthy",
      icon: <ShieldCheckIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
