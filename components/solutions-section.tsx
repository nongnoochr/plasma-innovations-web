"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Leaf, Microscope, Factory, Atom, FlaskConical } from "lucide-react"
import { CircuitPattern } from "./circuit-pattern"
import { ScrollReveal } from "./scroll-reveal"
import { useLanguage } from "@/contexts/language-context"

export function SolutionsSection() {
  const { t } = useLanguage()

  const applications = [
    { icon: Leaf, label: t("solutions.app1.label"), description: t("solutions.app1.description") },
    { icon: Microscope, label: t("solutions.app2.label"), description: t("solutions.app2.description") },
    { icon: Factory, label: t("solutions.app3.label"), description: t("solutions.app3.description") },
  ]

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Patterns */}
      <CircuitPattern />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-600/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-blue-600/5 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left" delay={200}>
            <div className="relative order-2 lg:order-1 group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-purple-900/30 group-hover:border-purple-700/50 transition-all duration-500 group-hover:scale-105 cursor-pointer">
                <Image
                  src="/images/plasma_gif.gif"
                  alt={t("solutions.imageAlt")}
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-2xl opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  unoptimized={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-3xl"></div>

                {/* Enhanced Professional Floating Elements */}
                <div className="absolute top-4 right-4 p-3 bg-purple-600/20 rounded-full backdrop-blur-sm border border-purple-500/30 hover:bg-purple-600/30 transition-all duration-300 cursor-pointer">
                  <Atom className="h-6 w-6 text-purple-300 animate-spin" style={{ animationDuration: "8s" }} />
                </div>

                {/* Interactive glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-8 order-1 lg:order-2">
            <ScrollReveal direction="right" delay={100}>
              <div className="space-y-6">
                <Badge
                  variant="secondary"
                  className="bg-blue-900/50 text-blue-300 border border-blue-700/50 backdrop-blur-sm hover:bg-blue-800/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <FlaskConical className="w-3 h-3 mr-1" />
                  {t("solutions.badge")}
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  {t("solutions.title")}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    {t("solutions.titleHighlight")}
                  </span>{" "}
                  {t("solutions.titleEnd")}
                  <br />
                  <span className="text-2xl text-gray-300">{t("solutions.subtitle")}</span>
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-300 leading-relaxed">{t("solutions.description1")}</p>
                  <p className="text-lg text-gray-300 leading-relaxed">{t("solutions.description2")}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={300}>
              <div className="grid grid-cols-1 gap-4">
                {applications.map((app, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-800/50 rounded-xl border border-purple-900/30 backdrop-blur-sm hover:bg-gray-700/50 hover:border-purple-700/50 transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-3">
                      <app.icon className="h-6 w-6 text-purple-400 flex-shrink-0 group-hover:text-purple-300 group-hover:scale-110 transition-all duration-300 mt-0.5" />
                      <div className="space-y-1">
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 block">
                          {app.label}
                        </span>
                        <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {app.description}
                        </span>
                      </div>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
