"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Phone, Mail, MapPin, Linkedin } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

const GradientAnimation = dynamic(() => import("@/components/GradientAnimation"), { ssr: false })

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ success: true, message: "Message sent successfully!" })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus({ success: false, message: data.error || "Failed to send message. Please try again." })
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: "An error occurred. Please try again later." })
    }

    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen pt-24 relative">
      <GradientAnimation />
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter font-heading text-white">LET'S CHAT</h1>
            <p className="text-xl text-white/80 max-w-[600px] mx-auto">
              Get in touch with us today and let's start transforming your business
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-heading text-white">Send us a message</h2>
                <p className="text-white/80">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder-white/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder-white/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-white">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] bg-white/10 border-white/20 text-white placeholder-white/50"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
              {submitStatus && (
                <div className={`p-4 rounded-md ${submitStatus.success ? "bg-green-500/20" : "bg-red-500/20"}`}>
                  <p className={`text-sm ${submitStatus.success ? "text-green-400" : "text-red-400"}`}>
                    {submitStatus.message}
                  </p>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-heading text-white">Contact Information</h2>
                <p className="text-white/80">Reach out to us through any of these channels</p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-white/80">+91-8970070017</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-white/80">hello@saasiple.in</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium text-white">Office</p>
                    <p className="text-white/80">
                      No.5, 4th cross road, Akshay Nagar
                      <br />
                      Bengaluru, KA, India
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-heading text-white">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://in.linkedin.com/company/saasiple"
                    className="text-white/80 hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/saasiple/"
                    className="text-white/80 hover:text-primary transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

