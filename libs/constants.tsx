import { facebook, instagram, twitter } from '@/assets/icons';
import plasmaWaterImg from '@/assets/images/plasma_water.png';
import npcBoxImg from '@/assets/images/npc_box.png';

export const navLinks = [
  { href: '#about-us', label: 'About Us' },
  { href: '#products', label: 'Products' },
  { href: '#contact-us', label: 'Contact Us' },
];

export const statistics = [
  { value: '10+', label: 'Industries Served' },
  { value: '20+', label: 'Plasma Products' },
  { value: '100+', label: 'Successful Partnerships' },
];

export const socialMedia = [
  { src: facebook, alt: 'facebook logo' },
  { src: twitter, alt: 'twitter logo' },
  { src: instagram, alt: 'instagram logo' },
];

export const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'NPC Box', link: '/#products' },
      { name: 'Plasma Ions Water', link: '/#products' },
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'About us', link: '/#about-us' },
      { name: 'FAQs', link: '/' },
      { name: 'Privacy policy', link: '/' },
    ],
  },
  {
    title: 'Get in touch',
    links: [
      {
        name: 'plasma.innotech@gmail.com',
        link: 'mailto:plasma.innotech@gmail.com',
      },
      { name: '(+66)64-624-1969', link: 'tel:+66646241969' },
    ],
  },
];

export const products = [
  {
    src: npcBoxImg,
    title: 'Non-thermal (Cold) Plasma Curing',
    descriptions: (
      <p>
        Surface modification for
        <br />
        sterilization and functionalization
      </p>
    ),
  },
  {
    src: plasmaWaterImg,
    title: 'Plasma Ions Water',
    descriptions: (
      <p>
        Cutting-Edge Cleansing Technology.
        <br />
        Natural Ions Solution for
        <br />
        Facial Cleansing Products & Industries
      </p>
    ),
  },
];
