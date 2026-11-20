export const SITE_URL = 'https://www.ashshafimedical.com';

export const clinic = {
  name: 'Ash-Shafi Medical Center',
  alternateName: 'আশ-শাফি মেডিকেল সেন্টার',
  url: SITE_URL,
  logo: `${SITE_URL}/Logo[2].png`,
  email: 'ash.shafi.medicalcenter2025@gmail.com',
  serviceAreas: ['Pallabi', 'Mirpur 11', 'Mirpur 11.5', 'Mirpur 12', 'Dhaka'],
  mainBranch: {
    id: `${SITE_URL}/#main-clinic`,
    name: 'Ash-Shafi Medical Center – Main Branch',
    address: {
      streetAddress: '2/5, 11.5 Pallabi, Mirpur',
      addressLocality: 'Dhaka',
      postalCode: '1216',
      addressCountry: 'BD',
    },
    phones: ['+8801346694684', '+8801992568186'],
    map: 'https://maps.app.goo.gl/HDDKx5RYQjp3m3Xx7',
  },
  secondBranch: {
    id: `${SITE_URL}/#mirpur-12-clinic`,
    name: 'Ash-Shafi Medical Center – Mirpur 12 Branch',
    address: {
      streetAddress: 'House-56, Road-10, Block-D, Section-12, Pallabi',
      addressLocality: 'Dhaka',
      postalCode: '1216',
      addressCountry: 'BD',
    },
    phones: ['+8801302718107'],
    map: 'https://maps.app.goo.gl/wb19VtFE74UzaWSp8',
  },
} as const;

export function getClinicJsonLd() {
  const makeBranch = (branch: typeof clinic.mainBranch | typeof clinic.secondBranch) => ({
    '@type': 'MedicalClinic',
    '@id': branch.id,
    name: branch.name,
    url: clinic.url,
    image: clinic.logo,
    logo: clinic.logo,
    email: clinic.email,
    telephone: branch.phones,
    address: { '@type': 'PostalAddress', ...branch.address },
    hasMap: branch.map,
    areaServed: clinic.serviceAreas.map((name) => ({ '@type': 'Place', name })),
    medicalSpecialty: 'MultiSpecialty',
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
  });

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalOrganization',
        '@id': `${SITE_URL}/#organization`,
        name: clinic.name,
        alternateName: clinic.alternateName,
        url: clinic.url,
        logo: clinic.logo,
        email: clinic.email,
        department: [{ '@id': clinic.mainBranch.id }, { '@id': clinic.secondBranch.id }],
      },
      makeBranch(clinic.mainBranch),
      makeBranch(clinic.secondBranch),
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: clinic.url,
        name: clinic.name,
        alternateName: clinic.alternateName,
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  };
}
