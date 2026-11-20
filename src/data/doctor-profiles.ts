import { doctors } from '@/data/doctors';
import type { Doctor } from '@/types/doctor';

export interface DoctorProfile extends Doctor {
  slug: string;
  englishName: string;
  specialty: string;
  englishSpecialty: string;
  specialties: string[];
}

const englishNames: Record<string, string> = {
  'ডা. রুম্মানা সিরাজ': 'Dr. Rummana Siraj',
  'ডা. এম এ মোহাইমেন ইবনে মোস্তাফিজ': 'Dr. M A Mohaimen Ibne Mostafiz',
  'ডা. নাহিদ ফারহানা চৌধুরী': 'Dr. Nahid Farhana Chowdhury',
  'ডা. মোঃ তানজীর আনোয়ার': 'Dr. Md. Tanjir Anwar',
  'ডা. মুহম্মদ যুবায়ের চৌধুরী': 'Dr. Muhammad Zubayer Chowdhury',
  'ডা. তাসনীম আলম': 'Dr. Tasnim Alam',
  'ডা. আল মাহমুদ এ্যাপোলো': 'Dr. Al Mahmud Apollo',
  'ডা. ফারহানা মিথিলা': 'Dr. Farhana Mithila',
  'ডা. লুসিয়াত জাহান': 'Dr. Lusiyat Jahan',
  'ডা. ফারহানা ফেরদৌস': 'Dr. Farhana Ferdous',
  'ডা.বাবু রাম মন্ডল': 'Dr. Babu Ram Mondal',
  'ডা. মোস্তাক আহমেদ': 'Dr. Mostak Ahmed',
  'ডা. মোঃ মাহমুদুল হাসান (মিঠু)': 'Dr. Md. Mahmudul Hasan (Mithu)',
  'ডা.মাহমুদ হাসান': 'Dr. Mahmud Hasan',
  'ডা.মোহাম্মদ ইব্রাহীম আদহাম': 'Dr. Mohammad Ibrahim Adham',
  'ডা. ফারিয়া রহমান': 'Dr. Faria Rahman',
  'ডা.মোঃ মাজহারুল হক': 'Dr. Md. Mazharul Haque',
  'ডা. মোহাম্মদ মাসুদ রানা': 'Dr. Mohammad Masud Rana',
  'প্রফেশনাল চৌধুরী মোহাঃ হায়দার আলী': 'Professor Chowdhury Md. Haider Ali',
  'ডা. নাজমা খাতুন': 'Dr. Nazma Khatun',
  'ডা. অন্তরা তালুকদার': 'Dr. Antara Talukder',
  'ডা.নিবরাস ওয়াদুদ খান': 'Dr. Nibras Wadud Khan',
  'ডা. মোঃ আরিফুল ইসলাম': 'Dr. Md. Ariful Islam',
  'ডা.রাহাত তানভীর আনোয়ার': 'Dr. Rahat Tanvir Anwar',
  'ডা. মোঃ আশরাফুল ইসলাম (সজিব)': 'Dr. Md. Ashraful Islam (Sajib)',
  'ডা. অনামিকা মারজিয়া মৌসুমী': 'Dr. Anamika Marzia Mousumi',
  'ডা. জিনিয়া আফরিন খান': 'Dr. Zinia Afrin Khan',
  'ডা. বুসরা এনায়েত করিম': 'Dr. Busra Enayet Karim',
  'ডা. শাহানা আক্তার': 'Dr. Shahana Akter',
  'লেফটেন্যান্ট কর্নেল ডাঃ মোঃ মুখলেছুর রহমান খান (অব.)': 'Lt. Col. Dr. Md. Mukhlesur Rahman Khan (Retd.)',
};

const englishSpecialties: Record<string, string> = {
  'মেডিসিন বিশেষজ্ঞ': 'Medicine Specialist',
  'মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ': 'Medicine & Diabetes Specialist',
  'মেডিসিন ডায়াবেটিস ও কিডনি রোগে বিশেষজ্ঞ': 'Medicine, Diabetes & Kidney Specialist',
  'পরিপাকতন্ত্র ও লিভার রোগ বিশেষজ্ঞ': 'Gastroenterology & Liver Specialist',
  'প্রসূতি ও স্ত্রীরোগ বিশেষজ্ঞ': 'Obstetrics & Gynecology Specialist',
  'চর্ম, যৌন ও এলার্জি রোগ বিশেষজ্ঞ': 'Dermatology, Sexual Health & Allergy Specialist',
  'জেনারেল, ল্যাপারোস্কোপ, হার্নিয়া, ব্রেস্ট এন্ড ট্রমা সার্জারী বিশেষজ্ঞ': 'General & Laparoscopic Surgeon',
  'জেনারেল, কলোরেক্টাল, ব্রেষ্ট, ইউরোলজী ও ক্যান্সার বিশেষজ্ঞ ল্যাপারোস্কপিক সার্জন': 'General, Colorectal & Cancer Surgeon',
  'হৃদরোগ ও মেডিসিন বিশেষজ্ঞ': 'Cardiology & Medicine Specialist',
  'নবজাতক, শিশু ও কিশোর রোগ বিশেষজ্ঞ': 'Newborn, Child & Adolescent Specialist',
  'অর্থোপেডিকস, ট্রমা ও স্পাইন বিশেষজ্ঞ ও সার্জন': 'Orthopedics, Trauma & Spine Surgeon',
  'নাক কান গলা রোগ বিশেষজ্ঞ': 'ENT Specialist',
  'মেডিসিন, বক্ষব্যাধি, অ্যাজমা, এলার্জি, শ্বাসকষ্ট ও যক্ষা রোগ বিশেষজ্ঞ': 'Chest Medicine, Asthma & Respiratory Specialist',
  'নিউরোমেডিসিন': 'Neuromedicine Specialist',
  'সনোলজিস্ট': 'Sonologist',
  'ক্লিনিক্যাল প্যাথলজিস্ট': 'Clinical Pathologist',
};

function slugify(name: string) {
  return name.toLowerCase().replace(/\([^)]*\)/g, '').replace(/\b(md|lt|col|retd)\b\.?/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const profiles = new Map<string, DoctorProfile>();

Object.entries(doctors).forEach(([specialty, specialtyDoctors]) => {
  specialtyDoctors.forEach((doctor) => {
    const existing = profiles.get(doctor.name);
    if (existing) {
      if (!existing.specialties.includes(specialty)) existing.specialties.push(specialty);
      return;
    }
    const englishName = englishNames[doctor.name];
    if (!englishName) return;
    profiles.set(doctor.name, {
      ...doctor,
      englishName,
      slug: slugify(englishName),
      specialty,
      englishSpecialty: doctor.name === 'ডা. নাহিদ ফারহানা চৌধুরী' ? 'Family Medicine & Diabetes Specialist' : englishSpecialties[specialty] ?? 'Medical Specialist',
      specialties: [specialty],
    });
  });
});

export const doctorProfiles = Array.from(profiles.values());
export const getDoctorProfile = (slug: string) => doctorProfiles.find((doctor) => doctor.slug === slug);
export const getDoctorSlug = (name: string) => profiles.get(name)?.slug;
