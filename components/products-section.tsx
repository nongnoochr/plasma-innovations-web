"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Droplets, ArrowRight, Award, FlaskConical, Shield, Microscope, Beaker } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { InteractiveButton } from "./interactive-button"
import { useLanguage } from "@/contexts/language-context"

export function ProductsSection() {
  const { t } = useLanguage()

  const products = [
    {
      icon: Zap,
      title: t("products.product1.title"),
      description: t("products.product1.description"),
      features: [
        { text: t("products.product1.feature1"), icon: Shield },
        { text: t("products.product1.feature2"), icon: Microscope },
        { text: t("products.product1.feature3"), icon: Beaker },
      ],
      researchBased: true,
      category: t("products.product1.category"),
      specifications: t("products.product1.specifications"),
    },
    {
      icon: Droplets,
      title: t("products.product2.title"),
      description: t("products.product2.description"),
      features: [
        { text: t("products.product2.feature1"), icon: FlaskConical },
        { text: t("products.product2.feature2"), icon: Shield },
        { text: t("products.product2.feature3"), icon: Zap },
      ],
      researchBased: true,
      category: t("products.product2.category"),
      specifications: t("products.product2.specifications"),
    },
  ]

  return (
    <section id="products" className="py-20 sm:py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        {/* Professional Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.1) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-purple-500/30 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/6 w-3 h-3 bg-blue-500/30 rounded-full"></div>
        <div className="absolute top-2/3 left-2/3 w-1 h-1 bg-purple-400/40 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center space-y-6 mb-16">
            <Badge
              variant="secondary"
              className="bg-purple-900/50 text-purple-300 border border-purple-700/50 backdrop-blur-sm hover:bg-purple-800/50 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <FlaskConical className="w-3 h-3 mr-1" />
              {t("products.badge")}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">{t("products.title")}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("products.description")}</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <ScrollReveal key={index} direction="up" delay={200 + index * 100}>
              <Card className="group hover:shadow-2xl transition-all duration-500 border border-purple-900/30 hover:border-purple-700/50 shadow-lg bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm hover:scale-105 cursor-pointer relative overflow-hidden transform min-h-[600px] flex flex-col">
                {/* Subtle Professional Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(139, 92, 246, 0.1) 50%, transparent 60%)`,
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </div>

                {/* Interactive glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="space-y-4 relative z-10 flex-shrink-0 pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300 border border-purple-700/30 backdrop-blur-sm hover:scale-110 cursor-pointer">
                        <product.icon className="h-6 w-6 text-purple-400 group-hover:text-purple-300 group-hover:scale-110 transition-all duration-300" />
                      </div>
                      {product.researchBased && (
                        <Badge
                          variant="secondary"
                          className="bg-green-900/50 text-green-300 border border-green-700/50 backdrop-blur-sm hover:bg-green-800/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                          <Award className="h-3 w-3 mr-1" />
                          {t("products.researchBased")}
                        </Badge>
                      )}
                    </div>
                    <Badge
                      variant="outline"
                      className="text-xs border-purple-700/50 text-purple-300 bg-purple-900/20 hover:bg-purple-800/30 transition-all duration-300 cursor-pointer"
                    >
                      {product.category}
                    </Badge>
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 leading-tight">
                      {product.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 flex-1 flex flex-col space-y-4 p-6 min-h-0">
                  <CardDescription className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-base">
                    {product.description}
                  </CardDescription>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-white text-base flex items-center">
                      <FlaskConical className="h-5 w-5 text-purple-400 mr-3" />
                      {t("products.keyFeatures")}
                    </h4>
                    <div className="space-y-3">
                      {product.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-4 p-3 bg-gray-800/40 rounded-lg border border-purple-900/30 hover:border-purple-700/50 hover:bg-gray-700/40 transition-all duration-300 group/feature cursor-pointer"
                        >
                          <div className="p-2 bg-purple-600/20 rounded-lg group-hover/feature:bg-purple-600/30 transition-colors duration-200">
                            <feature.icon className="h-4 w-4 text-purple-400 group-hover/feature:text-purple-300 transition-colors duration-200" />
                          </div>
                          <span className="text-sm text-gray-300 group-hover/feature:text-white transition-colors duration-200 font-medium">
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex-shrink-0 p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-700/40 hover:border-blue-600/60 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-blue-300 font-medium">{product.specifications}</p>
                        <p className="text-xs text-gray-400 mt-1">{t("products.technicalSpec")}</p>
                      </div>
                      <div className="p-2 bg-blue-600/20 rounded-lg">
                        <Microscope className="h-4 w-4 text-blue-300" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-4">
                    <InteractiveButton
                      variant="outline"
                      size="lg"
                      className="w-full bg-transparent border-purple-700/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white hover:border-transparent"
                    >
                      {t("products.learnMore")}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </InteractiveButton>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={600}>
          <div className="text-center mt-12 space-y-4">
            <InteractiveButton
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-lg shadow-purple-500/25 group"
            >
              {t("products.viewAll")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </InteractiveButton>
            <p className="text-sm text-gray-400">{t("products.documentation")}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
