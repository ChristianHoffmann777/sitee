import React from 'react';

const Offerings = () => {
  const offerings = [
    {
      number: "01.",
      title: "Багатоквартирні будинки та житлові комплекси",
      description: "Ми встановлюємо системи контролю доступом на багатоквартирні будинки та житлові комплекси з використанням сучасного обладнання.",
      image: "/1.jpg"
    },
    {
      number: "02.",
      title: "Ворота, хвіртки, шлагбуми",
      description: "Професійний монтаж систем контролю доступу для воріт, хвірток та шлагбумів з надійним обладнанням.",
      image: "/2.jpg"
    },
    {
      number: "03.",
      title: "Дистанційне управління доступом зі смартфону",
      description: "Сучасні рішення для дистанційного управління доступом через мобільний додаток на вашому смартфоні.",
      image: "/3.jpg"
    },
    {
      number: "04.",
      title: "Ліфтовий доступ",
      description: "Встановлення та налаштування систем контролю доступу до ліфтів для забезпечення безпеки мешканців.",
      image: "/4.jpg"
    }
  ];

  return (
    <section id="offerings" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-yellow-400 text-xs font-medium tracking-wider uppercase mb-6">
            СИСТЕМИ КОНТРОЛЮ ДОСТУПОМ
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ми встановлюємо системи контролю доступом на:
          </h2>
          
          <button className="bg-yellow-400 text-slate-800 px-6 py-3 text-sm font-semibold hover:bg-yellow-300 transition-colors duration-200 mb-8">
            Всі послуги ➞
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offering, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg bg-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div 
                  className="h-80 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.7), rgba(30, 41, 59, 0.7)), url('${offering.image}')`
                  }}
                >
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{offering.number}</h3>
                      <div className="w-8 h-0.5 bg-yellow-400 mb-6"></div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-white mb-4">{offering.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;