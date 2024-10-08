import Link from 'next/link';
import Image from 'next/image';

import footerLogo from '@/assets/images/logo.png';
import footerLogoText from '@/assets/images/logo_text.png';

import { socialMedia, footerLinks } from '@/libs/constants';

export default function Footer() {
  return (
    <footer className="max-container" id="contact-us">
      <div className="flex justify-between items-start gap-20 flex-wrap max-md:flex-col">
        <div className="flex flex-col items-start">
          <Link href="/">
            <div className="flex justify-start items-center">
              <Image src={footerLogo} alt="Logo" height={40} />
              <Image src={footerLogoText} alt="Logo Text" height={30} />
            </div>
          </Link>

          <p className="mt-6 text-sm leading-7 font-montserrat md:max-w-sm">
            PLASMA INNOVATIONS CO., LTD.
            <br />
            368/128 ถนนวัชรพล แขวงท่าแร้ง
            <br />
            เขตบางเขน กรุงเทพมหานคร 10220
          </p>

          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                key={icon.src +  Math.random()}
                className="flex justify-center items-center w-10 h-10 bg-white rounded-full"
              >
                <Image src={icon.src} alt={icon.alt} height={24} width={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between max-md:flex-col max-md:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title + Math.random()}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.link + Math.random()}
                    className="mt-3 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-24 max-md:flex-col max-md:items-center font-montserrat text-sm">
          <div className="flex flex-1 justify-start max-md:flex-col max-md:items-center gap-2 max-md:gap-0">
            <span>© 2024 Plasma Innovations CO., LTD. </span>
            <span>All rights reserved.</span>
          </div>
          <div>
            <p>Terms & Conditions</p>
          </div>
      </div>
    </footer>
  );
}
