export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "E-Com",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Add Products",
      href: "/addProduct",
    },
  ],
  links: {
    // youtube: "https://youtube.com/@m6io",
    // github: "https://github.com/m6io/shadcn-vite-template",
    docs: "https://ui.shadcn.com",
  },
}
