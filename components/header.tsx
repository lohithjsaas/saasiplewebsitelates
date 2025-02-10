"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { TrendyButton } from "@/components/ui/trendy-button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const services = [
  {
    category: "Cloud Solutions",
    items: [
      { name: "Cloud Infrastructure", href: "/services#cloud-infrastructure" },
      { name: "Cloud Migration", href: "/services#cloud-migration" },
      { name: "Cloud Security", href: "/services#cloud-security" },
    ],
  },
  {
    category: "Communication",
    items: [
      { name: "Cloud Telephony", href: "/services#cloud-telephony" },
      { name: "VoIP Services", href: "/services#voip-services" },
      { name: "Unified Communications", href: "/services#unified-communications" },
    ],
  },
  {
    category: "Productivity",
    items: [
      { name: "Office 365 Solutions", href: "/services#office-365" },
      { name: "Google Workspace", href: "/services#google-workspace" },
      { name: "Zoom Solutions", href: "/services#zoom-solutions" },
    ],
  },
  {
    category: "Development",
    items: [
      { name: "Website Development", href: "/services#website-development" },
      { name: "Mobile App Development", href: "/services#mobile-app-development" },
      { name: "Custom Software Development", href: "/services#custom-software-development" },
    ],
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [showServicesDropdown, setShowServicesDropdown] = useState(false)
  const router = useRouter()

  const handleServiceClick = (href: string) => {
    if (href.startsWith("/services#")) {
      router.push(href)
    } else {
      router.push("/services")
    }
    setShowServicesDropdown(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="absolute inset-0 bg-black/30 z-[-1]"></div>
      <nav className="container flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IconOnly_Transparent%20(1)-6GSOTlIbU9Sm5RDeY2mXsQ663t7WFp.png"
              alt="Saasiple Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F64C18] to-[#EE9539] uppercase">
              SAASIPLE
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-bold leading-6 text-white hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            <Link
              href="/services"
              className="text-sm font-bold leading-6 text-white hover:text-primary transition-colors flex items-center"
            >
              Our Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            {showServicesDropdown && (
              <div className="absolute left-0 mt-2 w-64 bg-black/90 backdrop-blur-md rounded-md shadow-lg p-4">
                {services.map((category) => (
                  <div key={category.category} className="mb-4">
                    <h3 className="text-sm font-bold text-primary mb-2">{category.category}</h3>
                    <ul>
                      {category.items.map((item) => (
                        <li key={item.name}>
                          <button
                            onClick={() => handleServiceClick(item.href)}
                            className="text-sm text-white hover:text-primary transition-colors block py-1 w-full text-left"
                          >
                            {item.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:flex lg:gap-x-4">
          <TrendyButton>Get Started</TrendyButton>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <TrendyButton variant="ghost" size="icon" className="p-2">
              <Menu className="h-8 w-8" />
              <span className="sr-only">Open menu</span>
            </TrendyButton>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-black overflow-y-auto">
            <div className="flex flex-col h-full">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-bold text-white hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 max-h-[60vh] overflow-y-auto">
                <h3 className="text-lg font-semibold text-primary mb-2">Our Services</h3>
                {services.map((category) => (
                  <div key={category.category} className="mb-4">
                    <h4 className="text-sm font-bold text-white mb-2">{category.category}</h4>
                    <ul>
                      {category.items.map((item) => (
                        <li key={item.name}>
                          <button
                            onClick={() => {
                              handleServiceClick(item.href)
                              setIsOpen(false)
                            }}
                            className="text-sm text-white hover:text-primary transition-colors block py-1 w-full text-left"
                          >
                            {item.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-4">
                <hr className="border-gray-800 mb-4" />
                <TrendyButton className="w-full">Get Started</TrendyButton>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

