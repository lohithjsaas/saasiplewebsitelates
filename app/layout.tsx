import type { Metadata } from "next"
import { Jura as Jaturat } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type React from "react"

const jaturat = Jaturat({ subsets: ["latin"], variable: "--font-jaturat" })

export const metadata: Metadata = {
  title: "Saasiple - Modern Business Solutions",
  description: "Transform your business with our cutting-edge SaaS solutions",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jaturat.variable}>
      <body className="font-sans">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

