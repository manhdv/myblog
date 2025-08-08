
const navBarLinks = [
  { name: "Accueil", url: "/vi" },
  { name: "Produits", url: "/vi/products" },
  { name: "Services", url: "/vi/services" },
  { name: "Blog", url: "/vi/blog" },
  { name: "Contact", url: "/vi/contact" },
];

const footerLinks = [
  {
    section: "Écosystème",
    links: [
      { name: "Documentation", url: "/vi/welcome-to-docs/" },
      { name: "Outils et Équipements", url: "/vi/products" },
      { name: "Services de Construction", url: "/vi/services" },
    ],
  },
  {
    section: "Société",
    links: [
      { name: "À propos de nous", url: "#" },
      { name: "Blog", url: "/vi/blog" },
      { name: "Carrières", url: "#" },
      { name: "Clients", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};