import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-yellow-400 text-xs font-medium tracking-wider uppercase mb-6">
              ПОСЛУГИ
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
              Про нас
            </h2>
            
            <div className="space-y-6 text-gray-300">
              <p className="text-base leading-relaxed">
                Високі стандарти якісного обслуговування
              </p>
              
              <p className="text-base leading-relaxed">
                Сучасне і надійне охоронне обладнання
              </p>
              
              <p className="text-base leading-relaxed">
                Безкоштовна консультація і оцінка вартості підключення
              </p>
            </div>
            
            <button className="mt-8 bg-transparent border border-gray-400 text-gray-300 px-6 py-3 text-sm hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200">
              Зв'язатись
            </button>
          </div>
          
          <div className="relative">
            <div className="bg-slate-700 rounded-lg p-8 shadow-2xl">
              <img 
                src="/7.jpg" 
                alt="Про нас" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;