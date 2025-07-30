import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ServiceGallery = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  const galleryImages = [
    {
      src: "/1.jpg",
      title: "Багатоквартирні будинки",
      description: "Професійний монтаж систем контролю доступу"
    },
    {
      src: "/2.jpg", 
      title: "Ворота та шлагбуми",
      description: "Автоматизація в'їзних груп"
    },
    {
      src: "/3.jpg",
      title: "Мобільне управління",
      description: "Дистанційний контроль через смартфон"
    },
    {
      src: "/4.jpg",
      title: "Ліфтовий доступ",
      description: "Системи безпеки для ліфтів"
    },
    {
      src: "/6.jpg",
      title: "Відеоспостереження",
      description: "HD камери з нічним баченням"
    },
    {
      src: "/7.jpg",
      title: "Домофонні системи",
      description: "Сучасні відеопанелі"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="py-20 bg-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-yellow-400 text-xs font-medium tracking-wider uppercase mb-6">
            ГАЛЕРЕЯ РОБІТ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Наші проекти
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative h-96 bg-slate-800 rounded-lg overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                      <p className="text-gray-300">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-slate-800 p-2 rounded-full hover:bg-yellow-300 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-slate-800 p-2 rounded-full hover:bg-yellow-300 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceGallery;