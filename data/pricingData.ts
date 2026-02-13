export interface PricingItem {
  id: number;
  title: string;
  icon: string;
  price: string;
  unit: string;
  features: string[];
  ctaLink: string;
  ctaText: string;
  isFeatured: boolean;
  badge?: string;
  buttonStyle: 'primary' | 'tonal';
}

export const pricingData: PricingItem[] = [
  {
    id: 1,
    title: 'Trial',
    icon: '🎁',
    price: 'Free',
    unit: '1 Custom Thumbnail',
    features: ['High Quality (1080p)', '1 Revision', '24/48 Hour Delivery'],
    ctaLink: 'mailto:your@email.com?subject=Free%20Trial',
    ctaText: 'Claim Free',
    isFeatured: false,
    buttonStyle: 'tonal'
  },
  {
    id: 2,
    title: 'Standard',
    icon: '🔥',
    price: '$5',
    unit: 'Per Thumbnail',
    features: ['Premium Design', 'Unlimited Revisions', 'Source File (PSD)', 'Priority Support'],
    ctaLink: 'mailto:your@email.com?subject=Standard%20Order',
    ctaText: 'Order Now',
    isFeatured: true,
    badge: 'Most Popular',
    buttonStyle: 'primary'
  },
  {
    id: 3,
    title: 'Bulk Pack',
    icon: '📦',
    price: '$20',
    unit: '5 Thumbnails',
    features: ['$4 per thumbnail', 'Consistent Branding', 'Unlimited Revisions', 'Fast Turnaround'],
    ctaLink: 'mailto:your@email.com?subject=Bulk%20Order',
    ctaText: 'Order Pack',
    isFeatured: false,
    buttonStyle: 'tonal'
  }
];
