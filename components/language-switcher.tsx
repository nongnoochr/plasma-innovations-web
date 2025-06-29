"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-gray-400" />
      <div className="flex bg-gray-800/50 rounded-lg p-1 border border-purple-900/30">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 text-xs transition-all duration-200 ${
            language === "en"
              ? "bg-purple-600 text-white hover:bg-purple-500"
              : "text-gray-300 hover:text-white hover:bg-gray-700/50"
          }`}
        >
          EN
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLanguage("th")}
          className={`px-3 py-1 text-xs transition-all duration-200 ${
            language === "th"
              ? "bg-purple-600 text-white hover:bg-purple-500"
              : "text-gray-300 hover:text-white hover:bg-gray-700/50"
          }`}
        >
          ไทย
        </Button>
      </div>
    </div>
  )
}
