import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import ServicesSection from '@/components/services-section';
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
    'Lab test',
    'Bisshosto chikitsha ridoy theke sheba',
    'Ash-Shafi Medical Centre',
    'আশ-শাফি মেডিকেল সেন্টার',
    'আশ-শাফি মেডিকেল সেন্টার ও কনসালটেশন সেবা',
    'বিশ্বস্ত চিকিৎসা, হৃদয় থেকে সেবা'
  ],
  openGraph: {
    title: 'Ash-Shafi Medical Centre | Diagnostic & Consultation Services',
    description:
      'Accurate diagnostics, X-ray, ultrasonography, and expert consultations — experience quality healthcare at Ash-Shafi Medical Centre.',
    url: 'https://www.ashshafimedical.com',
    siteName: 'Ash-Shafi Medical Centre',
    type: 'website',
  },
  
  icons: {
  icon: '/Logo[2].png',
  shortcut: '/Logo[2].png',
  apple: '/Logo[2].png',
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
      
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
