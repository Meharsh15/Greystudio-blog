export const SITE = {
  name: "GreyStudio Journal",
  brand: "GreyStudio",
  url: "https://blog.greystudio.online",
  description: "Practical insights on websites, branding, print, photography and marketing for businesses in Hyderabad.",
  location: "Hyderabad, Telangana, India",
  email: "hello@greystudio.online",
  navigation: [
    { label: "Web", href: "/category/web-design-development/" },
    { label: "Branding", href: "/category/branding-graphic-design/" },
    { label: "Print", href: "/category/printing-packaging/" },
    { label: "Photo & Video", href: "/category/photography-videography/" },
    { label: "Marketing", href: "/category/business-growth-marketing/" },
    { label: "Hyderabad", href: "/category/hyderabad-business-guides/" }
  ]
};

export const CATEGORIES = [
  { name: "Web Design & Development", slug: "web-design-development", intro: "Websites, landing pages, user experience, performance and search visibility for growing businesses." },
  { name: "Branding & Graphic Design", slug: "branding-graphic-design", intro: "Brand identity, graphic design, visual systems and practical design guidance." },
  { name: "Printing & Packaging", slug: "printing-packaging", intro: "Print materials, stickers, labels, packaging and production guidance." },
  { name: "Photography & Videography", slug: "photography-videography", intro: "Product, event and business photography, video production and content ideas." },
  { name: "Business Growth & Marketing", slug: "business-growth-marketing", intro: "Marketing strategy, social media, local discovery and lead generation." },
  { name: "Hyderabad Business Guides", slug: "hyderabad-business-guides", intro: "Useful local guides for startups, shops and service businesses across Hyderabad." }
] as const;
