import React from 'react';

const History = () => {
  const equipment = [
    {
      category: "Домофони",
      items: [
        "Відеопанель RIO FHD(RF) GREY Light Vision"
      ]
    },
    {
      category: "Відеоспостереження", 
      items: [
        "IP-відеокамера з 4G 5Mp Light Vision VLC-0505IG Black f=3.6mm",
        "HDTVI-відеокамера 3Mp Light Vision VLC-3248DM White f=3.6mm",
        "IP-відеокамера 4Mp TVT TD-9541E3 (D/PE/AR2) Black f=2.8mm",
        "IP-відеокамера 2Mp TVT TD-9423A3-LR f=7-22mm з розпізнаванням номерів"
      ]
    },
    {
      category: "Контроль доступу",
      items: [
        "Системи контролю доступу для будинків",
        "Електронні замки та зчитувачі"
      ]
    },
    {
      category: "Енергосистеми",
      items: [
        "Трансформатор Trinix 40 Вт",
        "Блок акумуляторних батарей для UPS KRF-TB192V Kraft",
        "Блок живлення KRF-1220(18CH) BOX Kraft"
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-yellow-400 text-xs font-medium tracking-wider uppercase mb-6">
            КАТАЛОГ ОБЛАДНАННЯ
          </p>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            Популярне обладнання
          </h2>
          
          <button className="bg-yellow-400 text-slate-800 px-6 py-3 text-sm font-semibold hover:bg-yellow-300 transition-colors duration-200 mb-12">
            Переглянути усі товари
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipment.map((category, index) => (
            <div key={index} className="bg-slate-700 rounded-lg p-6 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-slate-600 pb-2">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;