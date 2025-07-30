import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Олександр Петренко",
      position: "Голова ОСББ",
      text: "Компанія 'Оберіг' встановила нам систему контролю доступу в багатоквартирному будинку. Робота виконана якісно, в термін. Особливо подобається мобільний додаток - дуже зручно.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Марина Коваленко", 
      position: "Власник офісу",
      text: "Встановили відеоспостереження в офісі. Якість зображення відмінна, навіть вночі все чітко видно. Технічна підтримка працює швидко та професійно.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Ігор Мельник",
      position: "Приватний будинок",
      text: "Дуже задоволений роботою компанії. Встановили домофон та систему контролю доступу. Все працює бездоганно вже більше року. Рекомендую!",
      rating: 5,
      image: "/api/placeholder/60/60"
    }
  ];

  return (
    <section className="py-20 bg-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-yellow-400 text-xs font-medium tracking-wider uppercase mb-6">
            ВІДГУКИ КЛІЄНТІВ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Що кажуть наші клієнти
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-800 rounded-lg p-6 shadow-xl">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-yellow-400 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-slate-800 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;