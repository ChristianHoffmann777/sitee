import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-slate-800 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8)), url('/360_F_86090219_AgQYqc6e5WTemRT4gUBm9nWGfz3dmBan.jpg')`
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          <p className="text-yellow-400 text-5xl font-medium tracking-wider uppercase mb-6">
            ОБЕРІГ
          </p>
          
          <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-8 leading-tight max-w-3xl mx-auto">
            Монтаж та обслуговування домофонних систем, відеоспостереження, та систем контролю доступом
          </h1>
          
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            високоякіні іноваційні системи відеоспостереження, контролю доступу та домофони
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/services" className="bg-yellow-400 text-slate-800 px-8 py-3 text-sm font-semibold hover:bg-yellow-300 transition-colors duration-200 text-center">
              Детальніше
            </a>
            <a href="/personal-cabinet" className="bg-transparent border border-gray-400 text-gray-300 px-8 py-3 text-sm hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200 text-center">
              Особистий кабінет
            </a>
            <a href="/payment" className="bg-transparent border border-gray-400 text-gray-300 px-8 py-3 text-sm hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200 text-center">
              Оплата послуг
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;