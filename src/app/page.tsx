import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import ServicesSection from '@/components/services-section';
import { BranchesSection } from '@/components/branches-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { JsonLd } from '@/components/json-ld'
import { getClinicJsonLd, SITE_URL } from '@/data/clinic'

// ===== SEO Metadata (this automatically renders <head> tags) =====
export const metadata: Metadata = {
  title: 'Ash-Shafi Medical Center | Specialist Doctors in Pallabi, Mirpur',
  description:
    'Find specialist doctors and trusted diagnostic services at Ash-Shafi Medical Center, serving Pallabi and Mirpur 11, 11.5 and 12 in Dhaka.',
  alternates: { canonical: '/' },
  keywords: [
    'Ash-Shafi Medical Centre',
    'Ash Shafi Medical Center Mirpur',
    'specialist doctor in Pallabi',
    'doctor in Mirpur 11',
    'doctor in Mirpur 12',
    'medical center in Pallabi',
    'hospital in Mirpur',
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
    title: 'Ash-Shafi Medical Center | Specialist Doctors in Pallabi, Mirpur',
    description:
      'Specialist doctor consultations and diagnostic services for Pallabi, Mirpur 11, 11.5 and Mirpur 12, Dhaka.',
    url: SITE_URL,
    siteName: 'Ash-Shafi Medical Center',
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
      <JsonLd data={getClinicJsonLd()} />
      <Header />
      <main className="flex-grow">
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
