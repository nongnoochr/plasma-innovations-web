"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "en" | "th"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    "nav.name": "PLASMA INNOVATIONS",
    "nav.about": "About Us",
    "nav.products": "Products",
    "nav.research": "Research",
    "nav.contact": "Contact Us",
    "nav.getStarted": "Get Started",

    // Hero Section
    "hero.badge": "Research-Driven Innovation",
    "hero.title": "Revolutionizing",
    "hero.titleHighlight": "Plasma",
    "hero.titleEnd": "Technology",
    "hero.description":
      "Discover cutting-edge plasma innovations evolved from rigorous research studies in health, industry, and sustainability. Our solutions bridge the gap between laboratory breakthroughs and practical applications.",
    "hero.exploreProducts": "Explore Our Products",
    "hero.viewResearch": "View Research Papers",
    "hero.stat1.value": "10+",
    "hero.stat1.label": "Industries Served",
    "hero.stat2.value": "20+",
    "hero.stat2.label": "Plasma Products",
    "hero.stat3.value": "100+",
    "hero.stat3.label": "Successful Partnerships",
    "hero.imageAlt": "Advanced Plasma Technology Device",
    "hero.badge.laboratory": "Laboratory Grade",

    // Solutions Section
    "solutions.badge": "Research-Backed Solutions",
    "solutions.title": "Cold",
    "solutions.titleHighlight": "Plasma",
    "solutions.titleEnd": "Solutions",
    "solutions.subtitle": "For Sustainable Future",
    "solutions.description1":
      "At the forefront of innovation and sustainability, Plasma Innovations serves as your trusted partner in revolutionizing industrial processes and driving next-level advancements through evidence-based research.",
    "solutions.description2":
      "Unleash the transformative power of cold plasma technology with breakthrough solutions tailored for agriculture, healthcare, and industry—all developed from peer-reviewed research studies and validated through rigorous scientific methodology.",
    "solutions.app1.label": "Sustainable Agriculture",
    "solutions.app1.description": "Surface modification for enhanced crop yield",
    "solutions.app2.label": "Healthcare Innovation",
    "solutions.app2.description": "Sterilization and biomedical applications",
    "solutions.app3.label": "Industrial Processing",
    "solutions.app3.description": "Advanced material functionalization",
    "solutions.imageAlt": "Cold Plasma Laboratory Equipment",

    // Products Section
    "products.badge": "Research-Evolved Products",
    "products.title": "Our Products",
    "products.description":
      "Innovative plasma technology solutions developed through rigorous research studies and validated by scientific evidence across multiple peer-reviewed publications.",
    "products.product1.title": "Non-thermal (Cold) Plasma Curing",
    "products.product1.description":
      "Advanced surface modification technology for sterilization and functionalization applications across multiple industries.",
    "products.product1.category": "Industrial Solutions",
    "products.product1.specifications": "Atmospheric pressure operation",
    "products.product1.feature1": "Surface Sterilization",
    "products.product1.feature2": "Material Enhancement",
    "products.product1.feature3": "Eco-Friendly Process",
    "products.product2.title": "Plasma Ions Water",
    "products.product2.description":
      "Cutting-edge cleansing technology providing natural ionic solutions for facial cleansing products and industrial applications.",
    "products.product2.category": "Healthcare & Beauty",
    "products.product2.specifications": "Controlled ion concentration",
    "products.product2.feature1": "Natural Ion Technology",
    "products.product2.feature2": "Facial Cleansing Applications",
    "products.product2.feature3": "Industrial Applications",
    "products.researchBased": "Research-Based",
    "products.keyFeatures": "Key Features",
    "products.technicalSpec": "Technical Specification",
    "products.learnMore": "Learn More",
    "products.viewAll": "View All Products",
    "products.documentation": "Comprehensive technical specifications and research documentation available",

    // Footer
    "footer.company": "PLASMA INNOVATIONS CO., LTD.",
    "footer.tagline1": "Leading plasma technology research and development",
    "footer.tagline2": "Transforming industries through innovation",
    "footer.products": "Products",
    "footer.research": "Research",
    "footer.support": "Support",
    "footer.product1": "NPC Box",
    "footer.product2": "Plasma Ions Water",
    "footer.product3": "Research Solutions",
    "footer.product4": "Custom Development",
    "footer.research1": "Published Papers",
    "footer.research2": "Case Studies",
    "footer.research3": "Collaborations",
    "footer.research4": "Innovation Lab",
    "footer.support1": "About Us",
    "footer.support2": "FAQs",
    "footer.support3": "Technical Support",
    "footer.support4": "Privacy Policy",
    "footer.copyright": "© 2024 Plasma Innovations CO., LTD. All rights reserved.",
  },
  th: {
    // Header
    "nav.name": "พลาสมา อินโนเวชั่น",
    "nav.about": "เกี่ยวกับเรา",
    "nav.products": "ผลิตภัณฑ์",
    "nav.research": "งานวิจัย",
    "nav.contact": "ติดต่อเรา",
    "nav.getStarted": "เริ่มต้น",

    // Hero Section
    "hero.badge": "นวัตกรรมขับเคลื่อนด้วยงานวิจัย",
    "hero.title": "พลิกโฉมเทคโนโลยี",
    "hero.titleHighlight": "พลาสมา",
    "hero.titleEnd": " ",
    "hero.description":
      "ค้นพบนวัตกรรมพลาสมาล้ำสมัยที่พัฒนาจากการวิจัยทางวิทยาศาสตร์อย่างเข้มข้น ครอบคลุมด้านสุขภาพ อุตสาหกรรม และความยั่งยืน โซลูชันของเราทำหน้าที่เชื่อมช่องว่างระหว่างการค้นพบในห้องแล็บกับการใช้งานจริงอย่างเป็นรูปธรรม",
    "hero.exploreProducts": "สำรวจผลิตภัณฑ์ของเรา",
    "hero.viewResearch": "อ่านวิจัย",
    "hero.stat1.value": "10+",
    "hero.stat1.label": "อุตสาหกรรมที่ให้บริการ",
    "hero.stat2.value": "20+",
    "hero.stat2.label": "ผลิตภัณฑ์พลาสมา",
    "hero.stat3.value": "100+",
    "hero.stat3.label": "ความร่วมมือที่ประสบความสำเร็จ",
    "hero.imageAlt": "อุปกรณ์เทคโนโลยีพลาสมาขั้นสูง",
    "hero.badge.laboratory": "คุณภาพระดับห้องปฏิบัติการ",

    // Solutions Section
    "solutions.badge": "โซลูชันที่ได้รับการสนับสนุนจากงานวิจัย",
    "solutions.title": "โซลูชัน",
    "solutions.titleHighlight": "พลาสมา",
    "solutions.titleEnd": "เย็น",
    "solutions.subtitle": "เพื่ออนาคตที่ยั่งยืน",
    "solutions.description1":
      "พลาสมา อินโนเวชั่นส์ คือพันธมิตรที่เชื่อถือได้ของคุณในการยกระดับกระบวนการอุตสาหกรรมผ่านงานวิจัยเชิงประจักษ์",
    "solutions.description2":
      "เราปลดปล่อยศักยภาพของเทคโนโลยีพลาสมาเย็น ด้วยโซลูชันที่พัฒนาเฉพาะทางสำหรับการเกษตร สุขภาพ และอุตสาหกรรม — ทั้งหมดผ่านการกลั่นกรองจากงานวิจัยที่ผ่านการตรวจสอบโดยผู้เชี่ยวชาญและกระบวนการทางวิทยาศาสตร์อย่างเคร่งครัด",
    "solutions.app1.label": "เกษตรกรรมยั่งยืน",
    "solutions.app1.description": "ปรับสภาพพื้นผิวเพื่อเพิ่มผลผลิต",
    "solutions.app2.label": "นวัตกรรมด้านสุขภาพ",
    "solutions.app2.description": "การฆ่าเชื้อและการประยุกต์ด้านชีวเวช",
    "solutions.app3.label": "การประมวลผลอุตสาหกรรม",
    "solutions.app3.description": "เพิ่มประสิทธิภาพการใช้งานวัสดุ",
    "solutions.imageAlt": "อุปกรณ์ห้องปฏิบัติการพลาสมาเย็น",

    // Products Section
    "products.badge": "ผลิตภัณฑ์ที่พัฒนาจากงานวิจัย",
    "products.title": "ผลิตภัณฑ์ของเรา",
    "products.description":
      "โซลูชันเทคโนโลยีพลาสมาที่พัฒนาผ่านการวิจัยอย่างเข้มข้น พร้อมรับรองผลโดยหลักฐานเชิงวิทยาศาสตร์จากสิ่งพิมพ์วิจัยระดับสากล",
    "products.product1.title": "การบ่มพลาสมาไม่ใช้ความร้อน (พลาสมาเย็น)",
    "products.product1.description":
      "เทคโนโลยีการปรับปรุงพื้นผิวขั้นสูงสำหรับการฆ่าเชื้อและการประยุกต์ใช้ในอุตสาหกรรม",
    "products.product1.category": "โซลูชันอุตสาหกรรม",
    "products.product1.specifications": "การทำงานที่ความดันบรรยากาศ",
    "products.product1.feature1": "ฆ่าเชื้อบนพื้นผิว",
    "products.product1.feature2": "ปรับปรุงคุณสมบัติวัสดุ",
    "products.product1.feature3": "เป็นมิตรต่อสิ่งแวดล้อม",
    "products.product2.title": "น้ำพลาสมาไออน",
    "products.product2.description":
      "เทคโนโลยีทำความสะอาดล้ำสมัย ให้ประจุไอออนธรรมชาติเพื่อสุขภาพผิวและการใช้งานในภาคอุตสาหกรรม",
    "products.product2.category": "สุขภาพและความงาม",
    "products.product2.specifications": "ความเข้มข้นของไอออน",
    "products.product2.feature1": "เทคโนโลยีไอออนธรรมชาติ",
    "products.product2.feature2": "การประยุกต์ใช้ทำความสะอาดใบหน้า",
    "products.product2.feature3": "การประยุกต์ใช้ในงานอุตสาหกรรม",
    "products.researchBased": "งานวิจัย",
    "products.keyFeatures": "คุณสมบัติ",
    "products.technicalSpec": "ข้อมูลจำเพาะทางเทคนิค",
    "products.learnMore": "เรียนรู้เพิ่มเติม",
    "products.viewAll": "ดูผลิตภัณฑ์ทั้งหมด",
    "products.documentation": "มีเอกสารเทคนิคและงานวิจัยพร้อมให้บริการอย่างครบถ้วน",

    // Footer
    "footer.company": "บริษัท พลาสมา อินโนเวชั่น จำกัด",
    "footer.tagline1": "ผู้นำด้านการวิจัยและพัฒนาเทคโนโลยีพลาสมา",
    "footer.tagline2": "พลิกโฉมอุตสาหกรรมด้วยนวัตกรรมล้ำสมัย",
    "footer.products": "ผลิตภัณฑ์",
    "footer.research": "งานวิจัย",
    "footer.support": "สนับสนุน",
    "footer.product1": "กล่อง NPC",
    "footer.product2": "น้ำพลาสมาไออน",
    "footer.product3": "โซลูชันงานวิจัย",
    "footer.product4": "บริการพัฒนาเฉพาะทาง",
    "footer.research1": "เอกสารที่ตีพิมพ์",
    "footer.research2": "กรณีศึกษา",
    "footer.research3": "ความร่วมมือ",
    "footer.research4": "ห้องปฏิบัติการนวัตกรรม",
    "footer.support1": "เกี่ยวกับเรา",
    "footer.support2": "คำถามที่พบบ่อย",
    "footer.support3": "ฝ่ายสนับสนุนทางเทคนิค",
    "footer.support4": "นโยบายความเป็นส่วนตัว",
    "footer.copyright": "© 2024-2025 บริษัท พลาสมา อินโนเวชั่น จำกัด สงวนลิขสิทธิ์",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
