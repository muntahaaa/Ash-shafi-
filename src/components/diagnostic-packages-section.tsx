import Image from 'next/image';

const diagnosticPackages = [
  { src: '/lab_packages/whole body checkup.png', alt: 'Whole body health checkup package at Ash-Shafi Medical Center' },
  { src: '/lab_packages/Thyroid Screening Package Poster (1).png', alt: 'Thyroid screening package at Ash-Shafi Medical Center' },
  { src: '/lab_packages/STI & Reproductive Health Screening Package.png', alt: 'STI and reproductive health screening package at Ash-Shafi Medical Center' },
  { src: '/lab_packages/Pregnancy package.jpg', alt: 'Pregnancy health checkup package at Ash-Shafi Medical Center' },
  { src: '/lab_packages/Pre-Menstrual Health Screening Package.png', alt: 'Pre-menstrual health screening package at Ash-Shafi Medical Center' },
  { src: '/lab_packages/diabetes.jpeg', alt: 'Diabetes screening package at Ash-Shafi Medical Center' },
] as const;

export function DiagnosticPackagesSection() {
  return (
    <section id="diagnostic-packages" className="mx-auto my-12 w-full max-w-6xl scroll-mt-24 sm:my-16" aria-labelledby="diagnostic-packages-title">
      <div className="mb-8 px-1 text-center sm:mb-10 sm:px-4">
        <span className="mb-3 inline-block rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-green-700">
          Affordable Health Screening
        </span>
        <h2 id="diagnostic-packages-title" className="break-words text-2xl font-extrabold leading-tight tracking-tight text-green-950 sm:text-3xl md:text-4xl">
          Diagnostic Packages &amp; Health Checkup Offers
        </h2>
        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-green-600" />
        <div className="mx-auto mt-5 max-w-4xl space-y-3 break-words text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
          <p>
            সুস্থ থাকতে প্রয়োজন নিয়মিত স্বাস্থ্য পরীক্ষা। আশ-শাফি মেডিকেল সেন্টারে আপনার স্বাস্থ্য সুরক্ষায় রয়েছে সাশ্রয়ী মূল্যে বিভিন্ন বিশেষায়িত ডায়াগনস্টিক ও স্বাস্থ্য পরীক্ষা প্যাকেজ।
          </p>
          <p>
            আপনার প্রয়োজন অনুযায়ী বেছে নিন উপযুক্ত স্বাস্থ্য পরীক্ষা প্যাকেজ এবং নিশ্চিত করুন সচেতন ও সুস্থ জীবনযাপন।
          </p>
          <p className="font-extrabold text-green-800">আপনার সুস্বাস্থ্যই আমাদের অঙ্গীকার।</p>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-7">
        {diagnosticPackages.map((diagnosticPackage) => (
          <figure key={diagnosticPackage.src} className="min-w-0 overflow-hidden rounded-2xl border border-green-100 bg-white p-1.5 shadow-lg shadow-green-950/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-50">
              <Image
                src={diagnosticPackage.src}
                alt={diagnosticPackage.alt}
                fill
                sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1280px) 50vw, 560px"
                className="object-contain"
              />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
