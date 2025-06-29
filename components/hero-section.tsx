"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Package, Handshake, BookOpen } from "lucide-react"
import { VortexBackground } from "./vortex-background"
import { FloatingParticles } from "./floating-particles"
import { EnhancedBackground } from "./enhanced-background"
import { ScrollReveal } from "./scroll-reveal"
import { InteractiveButton } from "./interactive-button"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  const stats = [
    { icon: Users, value: t("hero.stat1.value"), label: t("hero.stat1.label") },
    { icon: Package, value: t("hero.stat2.value"), label: t("hero.stat2.label") },
    { icon: Handshake, value: t("hero.stat3.value"), label: t("hero.stat3.label") },
  ]

  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-32 min-h-screen flex items-center">
      {/* Enhanced Background Layers */}
      <VortexBackground />
      <FloatingParticles />
      <EnhancedBackground />

      {/* Advanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>

      {/* Animated mesh gradient */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"
          style={{ animationDuration: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <ScrollReveal direction="up" delay={200}>
              <div className="space-y-6">
                <Badge
                  variant="secondary"
                  className="bg-purple-900/50 text-purple-300 hover:bg-purple-800/50 border border-purple-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <BookOpen className="w-3 h-3 mr-1" />
                  {t("hero.badge")}
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                  {t("hero.title")}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 animate-gradient">
                    {t("hero.titleHighlight")}
                  </span>{" "}
                  {t("hero.titleEnd")}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">{t("hero.description")}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <InteractiveButton
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 shadow-lg shadow-purple-500/25 group"
                >
                  {t("hero.exploreProducts")}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </InteractiveButton>
                <InteractiveButton
                  size="lg"
                  variant="outline"
                  className="border-purple-500/50 text-purple-300 hover:bg-purple-900/30 hover:border-purple-400 bg-transparent backdrop-blur-sm"
                >
                  {t("hero.viewResearch")}
                </InteractiveButton>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={600}>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-purple-900/30">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-110"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-center mb-2">
                      <stat.icon className="h-6 w-6 text-purple-400 group-hover:text-purple-300 group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <div className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={300}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-purple-900/30 group-hover:border-purple-700/50 transition-all duration-500 group-hover:scale-105 cursor-pointer">
                <Image
                  src="/images/device.png"
                  alt={t("hero.imageAlt")}
                  width={500}
                  height={350}
                  className="w-full h-auto rounded-2xl opacity-90 group-hover:opacity-100 transition-opacity duration-500 max-h-80 object-contain"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-3xl"></div>

                {/* Enhanced Professional Badge Overlay */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600/20 rounded-full backdrop-blur-sm border border-blue-500/30 text-xs text-blue-300 font-medium hover:bg-blue-600/30 transition-all duration-300 cursor-pointer">
                  {t("hero.badge.laboratory")}
                </div>

                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-500/50 rounded-full"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-500/50 rounded-full"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
