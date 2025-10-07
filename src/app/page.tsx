import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { BranchesSection } from '@/components/branches-section'
import { MediaSection } from '@/components/media-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

// ===== SEO Metadata (this automatically renders <head> tags) =====
export const metadata: Metadata = {
  title: 'Ash-Shafi Medical Centre | Diagnostic & Consultation Services',
  description:
    'Ash-Shafi Medical Centre offers professional medical diagnostics, X-ray, ultrasonography, and expert doctor consultations — all under one roof.',
  keywords: [
    'Ash-Shafi Medical Centre',
    'Medical Diagnostics',
    'X-ray',
    'Ultrasonography',
    'Doctor Consultation',
    'Health Checkup',
    'Medical Services',
  ],
  openGraph: {
    title: 'Ash-Shafi Medical Centre | Diagnostic & Consultation Services',
    description:
      'Accurate diagnostics, X-ray, ultrasonography, and expert consultations — experience quality healthcare at Ash-Shafi Medical Centre.',
    url: 'https://www.ashshafimedical.com',
    siteName: 'Ash-Shafi Medical Centre',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ash-Shafi Medical Centre',
    description:
      'Accurate diagnostics and expert medical consultations at Ash-Shafi Medical Centre.',
  },
  icons: {
    icon: '/favicon.ico', // optional - depends on your favicon path
  },
}

// ===== Page Component =====
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main class-as="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BranchesSection />
        <MediaSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
