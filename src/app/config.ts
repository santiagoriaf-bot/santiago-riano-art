export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface HeroConfig {
  brandLeft: string;
  brandRight: string;
  tagline: string;
  badge: string;
  since: string;
  email: string;
  heroImage: string;
  heroImageAlt: string;
  scrollText: string;
  copyrightText: string;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
}

export interface AboutConfig {
  label: string;
  headline: string;
  description: string;
  bottomText: string;
  galleryImages: any[];
  stats: any[];
}

export interface Exhibition {
  id: number;
  title: string;
  image: string;
  date: string;
  link?: string;
}

export interface ExhibitionsConfig {
  label: string;
  headline: string;
  ctaText: string;
  exhibitions: Exhibition[];
}

export interface Collection {
  id: number;
  title: string;
  year: string;
  description: string;
  image: string;
}

export interface CollectionsConfig {
  label: string;
  headline: string;
  ctaText: string;
  collections: Collection[];
}

export interface TestimonialsConfig {
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
}

export interface InfoCard {
  icon: string;
  title: string;
  content: string;
}

export interface VisitConfig {
  label: string;
  headline: string;
  description: string;
  ctaText: string;
  infoCards: InfoCard[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  marqueeText: string;
  brandName: string;
  brandDescription: string;
  socialLinks: SocialLink[];
  quickLinks: FooterLink[];
  quickLinksTitle: string;
  contactTitle: string;
  contactItems: string[];
  bottomLinks: FooterLink[];
}

export const siteConfig: SiteConfig = {
  language: "en",
  title: "Santiago Riaño",
  description: "Colombian visual artist exploring interconnectivity, layering, and impermanence through unconventional printing techniques.",
};

export const heroConfig: HeroConfig = {
  brandLeft: "SANTIAGO",
  brandRight: "RIAÑO",
  tagline: "Exploring symbols through layered processes that uncover relationships between image, memory, and presence.",
  badge: "Bogotá, Colombia",
  since: "CONCEPT - SYMBOL - MATTER",
  email: "studio@santiagoriano.art",
  heroImage: "/images/hero-purple.png",
  heroImageAlt: "Santiago Riaño - Abstract Artwork",
  scrollText: "Scroll to Explore",
  copyrightText: "© 2024 Santiago Riaño",
  navLinks: [
    { label: "WORK", href: "#exhibitions" },
    { label: "PRINTS", href: "#collections" },
    { label: "STORIES", href: "#about" },
    { label: "CONTACT", href: "#visit" },
  ],
  socialLinks: [
    { label: "Instagram", href: "https://instagram.com/santiagoriano" },
    { label: "Twitter", href: "https://twitter.com/santiagoriano" },
  ],
};

export const aboutConfig: AboutConfig = {
  label: "The Practice",
  headline: "Revealing hidden value",
  description: "Santiago Riaño is a Colombian visual artist whose practice explores interconnectivity, layering, and impermanence. Through unconventional printing techniques and introspective processes, he materializes memory into contemplative works. His practice reveals hidden value in unseen places, approaching them through symbol and matter.",
  bottomText: "",
  galleryImages: [],
  stats: [],
};

export const exhibitionsConfig: ExhibitionsConfig = {
  label: "Current & Past",
  headline: "Exhibitions",
  ctaText: "View Details",
  exhibitions: [
    {
      id: 1,
      title: "Urban Farragos",
      image: "/images/urban_farragos_cover.png",
      date: "2023 — Bogota, Colombia",
      link: "/exhibition/urban-farragos",
    },
    {
      id: 2,
      title: "Ruderales",
      image: "/images/ruderales_cover.png",
      date: "2023 — Medellin, Colombia",
      link: "/exhibition/ruderales",
    },
    {
      id: 3,
      title: "Seventy Second and Zero",
      image: "/images/seventy-second/seventy_003.png",
      date: "2024 — Bogota, Colombia",
      link: "/exhibition/seventy-second",
    },
  ],
};