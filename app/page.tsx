import { TrendyButton } from "@/components/ui/trendy-button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import dynamic from 'next/dynamic'

const GradientAnimation = dynamic(() => import('@/components/GradientAnimation'), { ssr: false })

export default function Home() {
  return (
    <>
      <GradientAnimation />
      <div className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                <span className="font-extrabold">DELIVERING THE FUTURE</span>
              </h1>
              <p className="max-w-[600px] text-white/80 md:text-xl">
                Transform your business with our cutting-edge SaaS solutions and unparalleled support.
              </p>
              <TrendyButton size="lg" asChild>
                <Link href="/contact">Learn More</Link>
              </TrendyButton>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="why-choose-us" className="py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-extrabold text-center mb-12 text-white">WHY CHOOSE US?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-black/50 backdrop-blur-sm border-primary/20 border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">Customized Features</h3>
                  <p className="text-white/80">
                    Tailored solutions designed to meet your specific business needs and requirements.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-black/50 backdrop-blur-sm border-primary/20 border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">Ease of Use</h3>
                  <p className="text-white/80">
                    Intuitive interfaces and streamlined processes for maximum efficiency.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-black/50 backdrop-blur-sm border-primary/20 border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">24/7 Support</h3>
                  <p className="text-white/80">Round-the-clock assistance to ensure your business runs smoothly.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-extrabold text-center mb-12 text-white">OUR CLIENTS AGREE</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-primary mb-2">95%</p>
                <p className="text-white/80">satisfaction rating</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">50%</p>
                <p className="text-white/80">increase in users</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">147,000</p>
                <p className="text-white/80">daily active users</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-extrabold text-center mb-12 text-white">FROM OUR USERS</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Aaliyah Igwe",
                  role: "CEO",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reviews.jpg-qS9l9qwGVVUMy5ETTCwd9S3iGwWhUt.jpeg",
                  quote: "The platform has transformed how we operate. Highly recommended!",
                },
                {
                  name: "Francois Mercer",
                  role: "CTO",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reviews.jpg-qS9l9qwGVVUMy5ETTCwd9S3iGwWhUt.jpeg",
                  quote: "Incredible support team and powerful features. A game-changer!",
                },
                {
                  name: "Yanis Petros",
                  role: "Director",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Reviews.jpg-qS9l9qwGVVUMy5ETTCwd9S3iGwWhUt.jpeg",
                  quote: "Best decision we made for our business operations.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-black/50 backdrop-blur-sm border-primary/20 border">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-bold text-white">{testimonial.name}</p>
                        <p className="text-sm text-white/60">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-white/80">{testimonial.quote}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-extrabold text-white">READY TO GET STARTED?</h2>
              <p className="text-white/80 max-w-[600px] mx-auto">
                Join thousands of satisfied customers who have transformed their business with our solutions.
              </p>
              <TrendyButton size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </TrendyButton>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

