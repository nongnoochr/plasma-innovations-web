import Image from "next/image";
import Link from "next/link";

import headerLogo from "@/assets/images/logo.png";
import headerLogoText from "@/assets/images/logo_text.png";
// import hamburger from "@/assets/icons/hamburger.svg";

import { navLinks } from "@/libs/constants";


export default function NavBar() {
  return (
    <header className="px-8 py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">

          <Link href="/">
            <div className="flex items-center">
              <Image src={headerLogo} alt="Logo" height={50} />
              <Image src={headerLogoText} alt="Logo Text" height={30} />
            </div>
          </Link>

          <ul className="pl-20 flex-1 flex justify-start items-start gap-16 max-lg:hidden">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* <div className="hidden max-lg:block">
            <Image src={hamburger} alt="Hamburger" width={25} height={25} />
          </div> */}
      </nav>
    </header>
  );
}
