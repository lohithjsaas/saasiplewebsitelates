import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Cloud, Phone, Mail, Video, Globe, Server, Code, Smartphone } from 'lucide-react'
import dynamic from 'next/dynamic'

const GradientAnimation = dynamic(() => import('@/components/GradientAnimation'), { ssr: false })

const services = [
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    description:
      "Transform your IT infrastructure with our Cloud Solutions. Our offerings empower your business with scalable, reliable, and feature-rich capabilities.",
    icon: Cloud,
    features: ["Scalable Architecture", "High Availability", "Cost Optimization"],
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration",
    description: "Seamlessly transition your existing systems to the cloud with our expert migration services.",
    icon: Server,
    features: ["Data Transfer", "Application Migration", "Legacy System Modernization"],
  },
  {
    id: "cloud-security",
    title: "Cloud Security",
    description: "Protect your cloud assets with our comprehensive security solutions and best practices.",
    icon: Cloud,
    features: ["Threat Detection", "Data Encryption", "Compliance Management"],
  },
  {
    id: "cloud-telephony",
    title: "Cloud Telephony",
    description:
      "Advanced telephony solutions that integrate seamlessly with your existing infrastructure, providing reliable and cost-effective communication.",
    icon: Phone,
    features: ["VoIP Services", "Virtual Numbers", "Call Analytics"],
  },
  {
    id: "voip-services",
    title: "VoIP Services",
    description: "Leverage the power of Voice over IP to enhance your communication capabilities and reduce costs.",
    icon: Phone,
    features: ["HD Voice Calls", "Video Conferencing", "Mobile Integration"],
  },
  {
    id: "unified-communications",
    title: "Unified Communications",
    description:
      "Integrate all your communication channels into a single, cohesive platform for improved collaboration.",
    icon: Phone,
    features: ["Instant Messaging", "Presence Information", "Team Collaboration Tools"],
  },
  {
    id: "office-365",
    title: "Office 365 Solutions",
    description:
      "Enhance productivity and collaboration with our comprehensive Office 365 Solutions and expert implementation services.",
    icon: Mail,
    features: ["Email & Calendar", "SharePoint", "Teams Integration"],
  },
  {
    id: "google-workspace",
    title: "Google Workspace",
    description:
      "Optimize teamwork with our Google Workspace Solutions, providing seamless collaboration and productivity tools.",
    icon: Globe,
    features: ["Gmail", "Drive", "Meet"],
  },
  {
    id: "zoom-solutions",
    title: "Zoom Solutions",
    description:
      "Facilitate effective virtual collaboration with our Zoom Meeting Solutions, including setup and optimization.",
    icon: Video,
    features: ["Meeting Rooms", "Webinars", "Zoom Phone"],
  },
  {
    id: "website-development",
    title: "Website Development",
    description: "Create powerful, modern websites that drive growth and engage your audience effectively.",
    icon: Code,
    features: ["Custom Development", "E-commerce", "CMS Solutions"],
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "Build innovative mobile applications that connect with your audience and drive business growth.",
    icon: Smartphone,
    features: ["iOS & Android", "Cross-platform", "Native Apps"],
  },
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    description: "Develop tailor-made software solutions to address your unique business challenges and requirements.",
    icon: Code,
    features: ["Requirement Analysis", "Agile Development", "Quality Assurance"],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 relative">
      <GradientAnimation />
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter font-heading text-white">Our Services</h1>
            <p className="text-xl text-white/80 max-w-[800px] mx-auto">
              Comprehensive solutions to transform your business and drive growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.id}
                  id={service.id}
                  className="bg-black/30 backdrop-blur-sm border-primary/20 border hover:bg-black/40 transition-colors flex flex-col"
                >
                  <CardHeader>
                    <Icon className="h-10 w-10 text-primary mb-4" />
                    <CardTitle className="text-xl font-bold font-heading text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-white/80 mb-4 flex-grow">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-white/80">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full mt-auto">
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

