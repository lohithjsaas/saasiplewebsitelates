import { Button } from "@/components/ui/button"
import Link from "next/link"
import dynamic from 'next/dynamic'

const GradientAnimation = dynamic(() => import('@/components/GradientAnimation'), { ssr: false })

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 relative">
      <GradientAnimation />
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter font-heading text-white">
                WE STARTED SMALL
              </h1>
              <p className="text-xl text-white/80">
                From humble beginnings to industry leadership, our journey has been driven by innovation, dedication,
                and a commitment to excellence. Today, we're proud to be at the forefront of digital transformation,
                helping businesses thrive in the modern age.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Work With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-black/30 backdrop-blur-sm">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-5xl font-bold text-primary font-heading">10+</h3>
              <p className="text-white/80">Years of Experience</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-5xl font-bold text-primary font-heading">500+</h3>
              <p className="text-white/80">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-5xl font-bold text-primary font-heading">50+</h3>
              <p className="text-white/80">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary font-heading">Our Mission</h2>
              <p className="text-white/80">
                To empower businesses with innovative technology solutions that drive growth, enhance efficiency, and
                create lasting value. We're committed to delivering excellence through cutting-edge solutions and
                exceptional service.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary font-heading">Our Vision</h2>
              <p className="text-white/80">
                To be the global leader in digital transformation, recognized for our innovative solutions,
                customer-centric approach, and commitment to creating positive change in the business world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-black/30 backdrop-blur-sm">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading text-white">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "CEO & Founder",
                image: "/placeholder.svg",
              },
              {
                name: "Sarah Johnson",
                role: "CTO",
                image: "/placeholder.svg",
              },
              {
                name: "Michael Brown",
                role: "Head of Operations",
                image: "/placeholder.svg",
              },
            ].map((member, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden bg-primary/20">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold font-heading text-white">{member.name}</h3>
                <p className="text-white/80">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

