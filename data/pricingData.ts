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
    features: ['High Quality', 'No Revisions', '24/48 Hour Delivery'],
    ctaLink: 'mailto:contact@mitwen.com?subject=Free%20Trial',
    ctaText: 'Claim Free',
    isFeatured: false,
    buttonStyle: 'tonal'
  },
  {
    id: 2,
    title: 'Standard',
    icon: '🔥',
    price: '$4',
    unit: 'Per Thumbnail',
    features: ['Premium Design', 'Revisions Included', 'Source File', 'Priority Support'],
    ctaLink: 'mailto:contact@mitwen.com?subject=Standard%20Order',
    ctaText: 'Order Now',
    isFeatured: true,
    badge: 'Most Popular',
    buttonStyle: 'primary'
  },
  {
    id: 3,
    title: 'Bulk Pack',
    icon: '📦',
    price: '$15',
    unit: '5 Thumbnails',
    features: ['$3 per thumbnail', 'Consistent Branding', '2 Revisions per Thumbnail', 'Priority Delivery'],
    ctaLink: 'mailto:contact@mitwen.com?subject=Bulk%20Order',
    ctaText: 'Order Pack',
    isFeatured: false,
    buttonStyle: 'tonal'
  }
];
