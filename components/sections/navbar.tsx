'use client'

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import headerLogo from '@/assets/images/logo.png';
import headerLogoText from '@/assets/images/logo_text.png';
import hamburger from '@/assets/icons/hamburger.svg';
import closeIcon from '@/assets/icons/close-square.svg';

import { navLinks } from '@/libs/constants';


export default function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const getNavLinks = () => {
    return navLinks.map((link) => (
      <li key={link.label + Math.random()}>
        <Link
          href={link.href}
          className="font-montserrat leading-normal z-20 py-2"
        >
          {link.label}
        </Link>
      </li>
    ))
  }

  return (
    <header className="px-8 pt-4 z-10 w-full block">
      <nav className="flex justify-between items-center max-container">

          <Link href="/">
            <div className="flex items-center">
              <Image src={headerLogo} alt="Logo" height={50} />
              <Image src={headerLogoText} alt="Logo Text" height={30} />
            </div>
          </Link>

          <ul className="pl-20 pr-8 flex-1 flex justify-end gap-16 text-slate-gray max-md:hidden">
            {getNavLinks()}
          </ul>

          <div className="hidden max-md:block cursor-pointer">
            {isMenuOpen ? <Image src={closeIcon} alt="Close menu" width={30} height={30} onClick={toggleMenu} />
            : <Image src={hamburger} alt="Menu" width={25} height={25} onClick={toggleMenu} /> }
          </div>
      </nav>

      {isMenuOpen ? <ul className="hidden w-full bg-violet-200 py-4 text-center max-md:block rounded-md">
        {getNavLinks()}
      </ul> : null }
    </header>
  );
}
