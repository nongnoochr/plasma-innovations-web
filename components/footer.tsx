"use client"

import Link from "next/link"
import { Mail, Phone, Facebook, Twitter, Linkedin, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  const footerSections = [
    {
      title: t("footer.products"),
      links: [
        { name: t("footer.product1"), href: "#" },
        { name: t("footer.product2"), href: "#" },
        { name: t("footer.product3"), href: "#" },
        { name: t("footer.product4"), href: "#" },
      ],
    },
    {
      title: t("footer.research"),
      links: [
        { name: t("footer.research1"), href: "#" },
        { name: t("footer.research2"), href: "#" },
        { name: t("footer.research3"), href: "#" },
        { name: t("footer.research4"), href: "#" },
      ],
    },
    {
      title: t("footer.support"),
      links: [
        { name: t("footer.support1"), href: "#" },
        { name: t("footer.support2"), href: "#" },
        { name: t("footer.support3"), href: "#" },
        { name: t("footer.support4"), href: "#" },
      ],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white border-t border-purple-900/30 relative overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300 group-hover:scale-110">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold group-hover:text-purple-300 transition-colors duration-300">
                PLASMA INNOVATIONS
              </span>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="text-sm leading-relaxed">
                <span className="text-white font-semibold">{t("footer.company")}</span>
                <br />
                {t("footer.tagline1")}
                <br />
                {t("footer.tagline2")}
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm group cursor-pointer">
                  <Mail className="h-4 w-4 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  <span className="group-hover:text-white transition-colors duration-300">
                    <a href="mailto:plasma.innotech@gmail.com">plasma.innotech@gmail.com</a>
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm group cursor-pointer">
                  <Phone className="h-4 w-4 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  <span className="group-hover:text-white transition-colors duration-300"><a href="tel:+66646241969">(+66) 64-624-1969</a></span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-900/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">{t("footer.copyright")}</div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="p-2 bg-gray-800/50 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 rounded-lg transition-all duration-300 border border-purple-900/30 hover:border-transparent backdrop-blur-sm hover:scale-110 group"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4 text-gray-300 group-hover:text-white transition-colors duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
