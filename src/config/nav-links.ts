import { INavLink } from '@/types';

export const navLinks: INavLink[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    children: [
      {
        title: 'Who we are',
        href: '/about/who-we-are',
      },
      {
        title: 'Culture',
        href: '/about/culture',
      },
      {
        title: 'Management',
        href: '/about/management',
      },
      {
        title: 'Sales Team',
        href: '/about/sales-team',
      },
      {
        title: 'FAQ',
        href: '/about/faq',
      },
      {
        title: 'Contact Us',
        href: '/about/contact-us',
      },
    ],
  },
  {
    title: 'Sustainability',
    href: '/sustainability',
  },
  {
    title: 'Quality',
    children: [
      {
        title: 'System Quality & Assurance',
        href: '/quality/system-quality-assurance',
      },

      {
        title: 'Our Labs',
        href: '/quality/our-labs',
      },
    ],
  },
  {
    title: 'Products',
    href: '/products',
  },
  {
    title: 'Zipper Guide',
    href: '/zipper-guide',
  },
];
