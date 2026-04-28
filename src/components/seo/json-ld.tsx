export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'The Room Communication',
    image: 'https://theroomcommunication.ma/og-image.jpg',
    url: 'https://theroomcommunication.ma',
    telephone: '+212XXXXXXXXX',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Rabat',
      addressCountry: 'MA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '34.0209',
      longitude: '-6.8416',
    },
    sameAs: [
      'https://www.instagram.com/theroomcommunication',
      'https://www.linkedin.com/company/theroomcommunication',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
