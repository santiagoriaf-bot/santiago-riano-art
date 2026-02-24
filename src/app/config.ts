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
  title: "Santiago Riano",
  description: "Colombian visual artist exploring interconnectivity, layering, and impermanence through unconventional printing techniques.",
};

export const heroConfig: HeroConfig = {
  brandLeft: "SANTIAGO",
  brandRight: "RIANO",
  tagline: "Exploring symbols through layered processes that uncover relationships between image, memory, and presence.",
  badge: "Bogota, Colombia",
  since: "CONCEPT - SYMBOL - MATTER",
  email: "studio@santiagoriano.art",
  heroImage: "/images/hero-purple.png",
  heroImageAlt: "Santiago Riano - Abstract Artwork",
  scrollText: "Scroll to Explore",
  copyrightText: "2024 Santiago Riano",
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
  description: "Santiago Riano is a Colombian visual artist whose practice explores interconnectivity, layering, and impermanence. Through unconventional printing techniques and introspective processes, he materializes memory into contemplative works. His practice reveals hidden value in unseen places, approaching them through symbol and matter.",
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
      image: "/images/urban_f.png",
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

export const collectionsConfig: CollectionsConfig = {
  label: "Available Works",
  headline: "PRINTS",
  ctaText: "Inquire",
  collections: [
    {
      id: 1,
      title: "Veils in Concrete",
      year: "2023",
      description: "A series exploring the tension between permanence and ephemerality through layered printing on unconventional surfaces.",
      image: "/images/collection-veils.jpg",
    },
    {
      id: 2,
      title: "Urban Botanical",
      year: "2022",
      description: "Botanical forms emerging from urban textures, revealing the hidden natural world within city landscapes.",
      image: "/images/collection-botanical.jpg",
    },
    {
      id: 3,
      title: "Material Studies",
      year: "2021",
      description: "Investigations into the physical properties of paper, ink, and found materials as carriers of meaning.",
      image: "/images/collection-urban.jpg",
    },
    {
      id: 4,
      title: "Ephemeral Traces",
      year: "2020",
      description: "Works that capture moments of transition, where materials speak to the impermanence of memory.",
      image: "/images/collection-1.jpg",
    },
  ],
};

export const testimonialsConfig: TestimonialsConfig = {
  quote: "Riano's work invites us to see beyond the surface, to find beauty in the overlooked, and to contemplate the deep connections between material and meaning. His practice is a meditation on presence and absence.",
  authorName: "Maria Fernanda Cruz",
  authorTitle: "Curator, Museo de Arte Moderno de Bogota",
  authorImage: "/images/testimonial-author.jpg",
};

export const visitConfig: VisitConfig = {
  label: "Get in Touch",
  headline: "Contact",
  description: "For inquiries about artworks, exhibitions, or collaborations, please reach out. Studio visits are available by appointment.",
  ctaText: "Send Email",
  infoCards: [
    {
      icon: "MapPin",
      title: "Studio",
      content: "Bogota, Colombia",
    },
    {
      icon: "Clock",
      title: "Availability",
      content: "Monday — Friday<br />9:00 AM — 6:00 PM",
    },
    {
      icon: "Calendar",
      title: "Visits",
      content: "By Appointment",
    },
    {
      icon: "Ticket",
      title: "Inquiries",
      content: "studio@santiagoriano.art",
    },
  ],
};

export const footerConfig: FooterConfig = {
  marqueeText: "Exploring symbols through layered processes that uncover relationships between image, memory, and presence.",
  brandName: "SANTIAGO RIANO",
  brandDescription: "Colombian visual artist exploring interconnectivity, layering, and impermanence through unconventional printing techniques.",
  socialLinks: [
    { label: "Instagram", href: "https://instagram.com/santiagoriano" },
    { label: "Twitter", href: "https://twitter.com/santiagoriano" },
    { label: "Linkedin", href: "https://linkedin.com/in/santiagoriano" },
  ],
  quickLinks: [
    { label: "WORK", href: "#exhibitions" },
    { label: "PRINTS", href: "#collections" },
    { label: "STORIES", href: "#about" },
    { label: "CONTACT", href: "#visit" },
  ],
  quickLinksTitle: "Navigation",
  contactTitle: "Contact",
  contactItems: [
    "studio@santiagoriano.art",
    "Bogota, Colombia",
  ],
  bottomLinks: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};