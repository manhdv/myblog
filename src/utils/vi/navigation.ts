const navBarLinks = [
  { name: "Trang chủ", url: "/vi" },
  { name: "Blog", url: "/vi/blog" },
  { name: "Danh mục", url: "/vi/portfolio" },
  { name: "Triết lý", url: "/vi/philosophy" },  
  { name: "Liên hệ", url: "/vi/contact" },
];

const footerLinks = [
  {
    section: "Hệ sinh thái",
    links: [
      { name: "Triết lý", url: "/vi/philosophy" },
      { name: "Danh mục", url: "/vi/portfolio" },
    ],
  },
  {
    section: "Về trang web",
    links: [
      { name: "Về chúng tôi", url: "/vi/about" },
      { name: "Blog", url: "/vi/blog" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "#",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
