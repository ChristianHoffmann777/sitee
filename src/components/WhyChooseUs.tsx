import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      number: "01",
      title: "Досвід більше 10 років",
      description: "Наша компанія на ринку більше 10 років, це свідчить про її надійність та професіоналізм у сфері систем безпеки."
    },
    {
      number: "02", 
      title: "Клієнто орієнтований підхід",
      description: "Ми розробимо та запропонуємо клієнту найбільш вигідне та раціональне рішення з оптимальним співвідношенням ціна/якість."
    },
    {
      number: "03",
      title: "Абонентське обслуговування", 
      description: "Працюємо за принципом страхової компанії - невелика абонентна плата забезпечує повне техобслуговування та ремонт обладнання."
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-yellow-400 text-xs font-medium tracking-wider uppercase mb-6">
            ПРО КОМПАНІЮ
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 max-w-3xl mx-auto">
            Чому обираються нас?
          </h2>
          
          <p className="text-base text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Якщо Ви шукаєте надійну компанію для монтажу та технічного обслуговування систем контролю доступу, відеоспостереження, аудіо та відеодомофонних систем - ми з задоволенням Вам допоможемо.
          </p>
        </div>

        <div className="relative mb-16">
          <div 
            className="h-80 rounded-3xl bg-cover bg-center"
            style={{
              backgroundImage: `url('/6.jpg')`
            }}
          />
        </div>
          
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-left">
              <div className="text-yellow-400 text-lg font-bold mb-4">
                {reason.number}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-4">
                {reason.title}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-700 rounded-lg p-8">
          <div className="text-gray-300 text-sm leading-relaxed space-y-4">
            <p>
              На нашому сайті Ви маєте можливість вибрати обладнання та отримати консультацію з питань СКД, відеоспостереження, сигналізації для квартири, будинку або офісу, вибрати електрозамки для сучасної та ефективної безпеки.
            </p>
            <p>
              Співпраця з нашими замовниками відбувається згідно договорів, умови яких прості та прозорі. Ми працюємо за принципом страхової компанії, коли клієнт оплачує наші послуги на умовах невеликої абонентної плати, а ми в свою чергу забезпечуємо техобслуговування та ремонт обладнання для безперебійної роботи всієї системи.
            </p>
            <p>
              Показник нашої роботи – робоча система контролю доступом. В такому випадку обслуговуюча компанія найбільш зацікавлена в тому, щоб у вас система працювала безперебійно, адже замовник не заплатить, якщо система не працює.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;