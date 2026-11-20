import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, CalendarClock, MapPin, Phone, UserRound } from 'lucide-react';
import { doctorProfiles, getDoctorProfile } from '@/data/doctor-profiles';
import { JsonLd } from '@/components/json-ld';
import { clinic, SITE_URL } from '@/data/clinic';

type DoctorPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return doctorProfiles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: DoctorPageProps): Promise<Metadata> {
  const doctor = getDoctorProfile((await params).slug);
  if (!doctor) return {};
  const title = `${doctor.englishName} – ${doctor.englishSpecialty} in Mirpur, Dhaka | Ash-Shafi Medical Center`;
  const description = `View ${doctor.englishName}'s qualifications, specialty and chamber schedule at Ash-Shafi Medical Center, serving Pallabi, Mirpur 11 and Mirpur 12, Dhaka.`;
  return {
    title,
    description,
    keywords: [doctor.englishName, `${doctor.englishSpecialty} in Mirpur`, `doctor in Pallabi`, 'doctor in Mirpur 11', 'doctor in Mirpur 12'],
    alternates: { canonical: `/doctors/${doctor.slug}` },
    openGraph: { title, description, type: 'profile' },
  };
}

export default async function DoctorPage({ params }: DoctorPageProps) {
  const doctor = getDoctorProfile((await params).slug);
  if (!doctor) notFound();

  const physicianJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${SITE_URL}/doctors/${doctor.slug}#physician`,
    name: doctor.englishName,
    alternateName: doctor.name,
    url: `${SITE_URL}/doctors/${doctor.slug}`,
    ...(doctor.image ? { image: doctor.image.startsWith('http') ? doctor.image : `${SITE_URL}${doctor.image}` } : {}),
    description: doctor.description,
    medicalSpecialty: doctor.englishSpecialty,
    worksFor: { '@id': clinic.mainBranch.id },
    workLocation: [{ '@id': clinic.mainBranch.id }, { '@id': clinic.secondBranch.id }],
    areaServed: clinic.serviceAreas.map((name) => ({ '@type': 'Place', name })),
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white text-slate-900">
      <JsonLd data={physicianJsonLd} />
      <header className="border-b border-green-100 bg-white/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-3 font-bold text-green-900">
            <Image src="/Logo[2].png" alt="Ash-Shafi Medical Center" width={44} height={44} />
            <span>Ash-Shafi Medical Center</span>
          </Link>
          <Link href="/doctors" className="flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-900">
            <ArrowLeft size={17} /> All doctors
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-6xl px-5 py-10 sm:py-16">
        <div className="grid overflow-hidden rounded-3xl border border-green-100 bg-white shadow-xl shadow-green-950/5 lg:grid-cols-[360px_1fr]">
          <section className="flex min-h-[390px] items-center justify-center bg-gradient-to-br from-green-800 to-emerald-600 p-8" aria-label={`${doctor.englishName} profile image`}>
            {doctor.image ? (
              <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl bg-white shadow-2xl">
                <Image src={doctor.image} alt={`${doctor.englishName}, ${doctor.englishSpecialty}`} fill className="object-cover" sizes="280px" priority />
              </div>
            ) : (
              <div className="flex aspect-[4/5] w-full max-w-[280px] flex-col items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-white shadow-2xl backdrop-blur-sm">
                <div className="mb-5 rounded-full bg-white/20 p-8"><UserRound size={88} strokeWidth={1.25} aria-hidden="true" /></div>
                <span className="text-sm font-semibold tracking-wide">Doctor profile photo</span>
                <span className="mt-1 text-xs text-green-100">Coming soon</span>
              </div>
            )}
          </section>

          <section className="p-7 sm:p-10 lg:p-12">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-green-700">{doctor.englishSpecialty}</p>
            <h1 className="text-3xl font-extrabold leading-tight text-green-950 sm:text-5xl">{doctor.englishName}</h1>
            <p className="mt-3 text-xl font-bold text-slate-700">{doctor.name}</p>
            <div className="my-8 h-px bg-green-100" />
            <h2 className="text-xl font-bold text-green-900">Qualifications &amp; experience</h2>
            <p className="mt-4 whitespace-pre-line leading-8 text-slate-600">{doctor.description}</p>

            {doctor.time && (
              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-5">
                <CalendarClock className="mt-0.5 shrink-0 text-green-700" />
                <div><p className="font-bold text-green-950">Chamber schedule</p><p className="mt-1 text-slate-700">{doctor.time}</p></div>
              </div>
            )}

            <section className="mt-8 rounded-2xl border border-green-200 bg-green-50/70 p-4 sm:p-6" aria-labelledby="book-serial-heading">
              <div className="mb-5">
                <h2 id="book-serial-heading" className="text-xl font-extrabold text-green-950">Book a serial by phone</h2>
                <p className="mt-1 text-sm text-slate-600">Tap a number below to call the selected branch directly.</p>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-xl border border-green-200 bg-white p-4 shadow-sm">
                  <div className="mb-3 flex items-start gap-3">
                    <MapPin className="mt-0.5 shrink-0 text-green-700" size={20} />
                    <div>
                      <h3 className="font-bold text-green-950">Main Branch</h3>
                      <p className="mt-0.5 text-xs leading-5 text-slate-600">2/5, 11.5 Pallabi, Mirpur, Dhaka-1216</p>
                    </div>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    <a href="tel:+8801346694684" className="flex min-h-11 items-center justify-center gap-2 rounded-lg bg-green-700 px-3 py-2.5 text-sm font-bold text-white transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2">
                      <Phone size={16} aria-hidden="true" /> +880 1346-694684
                    </a>
                    <a href="tel:+8801992568186" className="flex min-h-11 items-center justify-center gap-2 rounded-lg bg-green-700 px-3 py-2.5 text-sm font-bold text-white transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2">
                      <Phone size={16} aria-hidden="true" /> +880 1992-568186
                    </a>
                  </div>
                </div>

                <div className="rounded-xl border border-green-200 bg-white p-4 shadow-sm">
                  <div className="mb-3 flex items-start gap-3">
                    <MapPin className="mt-0.5 shrink-0 text-green-700" size={20} />
                    <div>
                      <h3 className="font-bold text-green-950">Second Branch</h3>
                      <p className="mt-0.5 text-xs leading-5 text-slate-600">House-56, Road-10, Block-D, Section-12, Pallabi, Dhaka</p>
                    </div>
                  </div>
                  <a href="tel:+8801302718107" className="flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-green-700 px-3 py-2.5 text-sm font-bold text-white transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2">
                    <Phone size={16} aria-hidden="true" /> +880 1302-718107
                  </a>
                </div>
              </div>
            </section>

            <div className="mt-4">
              <a href="https://maps.app.goo.gl/HDDKx5RYQjp3m3Xx7" target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 rounded-xl border border-green-200 px-5 py-3.5 font-bold text-green-800 transition hover:bg-green-50"><MapPin size={18} /> View main branch on Google Maps</a>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
