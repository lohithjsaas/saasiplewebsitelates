import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

const services = [
  { name: "Cloud Infrastructure", href: "/services/cloud-infrastructure" },
  { name: "Cloud Migration", href: "/services/cloud-migration" },
  { name: "Cloud Security", href: "/services/cloud-security" },
  { name: "Cloud Telephony", href: "/services/cloud-telephony" },
  { name: "VoIP Services", href: "/services/voip-services" },
  { name: "Unified Communications", href: "/services/unified-communications" },
  { name: "Office 365 Solutions", href: "/services/office-365" },
  { name: "Google Workspace", href: "/services/google-workspace" },
  { name: "Zoom Solutions", href: "/services/zoom-solutions" },
  { name: "Website Development", href: "/services/website-development" },
  { name: "Mobile App Development", href: "/services/mobile-app-development" },
  { name: "Custom Software Development", href: "/services/custom-software-development" },
]

export function Footer() {
  return (
    <footer className="bg-muted py-12 mt-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="text-sm text-muted-foreground">
              Transforming businesses with cutting-edge SaaS solutions and unparalleled support.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-sm text-muted-foreground hover:text-primary">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">More Services</h3>
            <ul className="space-y-2">
              {services.slice(6).map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-sm text-muted-foreground hover:text-primary">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-muted-foreground/20">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Saasiple. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

