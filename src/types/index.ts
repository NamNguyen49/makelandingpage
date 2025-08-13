export interface MenuItem {
  id: string;
  title: string;
  url: string;
  order: number;
}

export interface PageSection {
  id: string;
  type: 'hero' | 'features' | 'testimonials' | 'contact' | 'about' | 'services' | 'team' | 'pricing' | 'blog' | 'gallery';
  title: string;
  content: any;
  order: number;
}

export interface LandingPage {
  id: string;
  title: string;
  brandSettings: BrandSettings;
  menuItems: MenuItem[];
  sections: PageSection[];
  createdAt: string;
  updatedAt: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonUrl: string;
  backgroundImage?: string;
}

export interface FeaturesContent {
  features: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
}

export interface TestimonialsContent {
  testimonials: Array<{
    id: string;
    name: string;
    role: string;
    content: string;
    avatar?: string;
  }>;
}

export interface ContactContent {
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  address: string;
}

export interface BrandSettings {
  name: string;
  logo?: string;
  tagline?: string;
}

export interface AboutContent {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  stats: Array<{
    id: string;
    number: string;
    label: string;
  }>;
}

export interface ServicesContent {
  title: string;
  subtitle: string;
  services: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
    price?: string;
  }>;
}

export interface TeamContent {
  title: string;
  subtitle: string;
  members: Array<{
    id: string;
    name: string;
    role: string;
    bio: string;
    image?: string;
    social?: {
      linkedin?: string;
      twitter?: string;
      email?: string;
    };
  }>;
}

export interface PricingContent {
  title: string;
  subtitle: string;
  plans: Array<{
    id: string;
    name: string;
    price: string;
    period: string;
    features: string[];
    popular?: boolean;
    buttonText: string;
  }>;
}

export interface BlogContent {
  title: string;
  subtitle: string;
  posts: Array<{
    id: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    image?: string;
    category: string;
  }>;
}

export interface GalleryContent {
  title: string;
  subtitle: string;
  images: Array<{
    id: string;
    url: string;
    title: string;
    description?: string;
  }>;
}