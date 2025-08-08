const navBarLinks = [
  { name: "Trang chủ", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Danh mục", url: "/portfolio" },
  { name: "Triết lý", url: "/philosophy" },  
  { name: "Liên hệ", url: "/contact" },
];

const footerLinks = [
  {
    section: "Hệ sinh thái",
    links: [
      { name: "Triết lý", url: "/philosophy" },
      { name: "Danh mục", url: "/portfolio" },
    ],
  },
  {
    section: "Giới thiệu",
    links: [
      { name: "Về chúng tôi", url: "/about" },
      { name: "Blog", url: "/blog" },
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
