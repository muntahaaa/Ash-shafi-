import Image from 'next/image';

const mediaItems = [
  { src: '/services.jpg', alt: 'Our services', hint: 'Our services' },
  { src: '/services-ultra.jpg', alt: 'Our services', hint: 'Our services' },
  { src: '/visit2.jpg', alt: 'Visited by High Commission of Canada', hint: 'Visited by High Commission of Canada' },
  { src: '/visit.jpg', alt: 'Visited by High Commission of Canada', hint: 'Visited by High Commission of Canada' },
];

export function MediaSection() {
  return (
    <section id="media" className="py-24 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-3">Our Gallery</span>
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">Media Gallery</h2>
          <p className="text-lg text-foreground/80 mt-4 max-w-2xl mx-auto">
            A glimpse into our facilities and compassionate care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {mediaItems.map((item, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-lg group animate-in fade-in zoom-in-95 duration-500 relative aspect-[16/9] hover:shadow-xl transition-all" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={450}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                data-ai-hint={item.hint}
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <p className="text-white font-medium">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
