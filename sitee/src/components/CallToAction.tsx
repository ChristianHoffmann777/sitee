import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-slate-800 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8)), url('/360_F_86090219_AgQYqc6e5WTemRT4gUBm9nWGfz3dmBan.jpg')`
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-yellow-400 text-xs font-medium tracking-wider uppercase mb-6">
          ПОТРІБНА ДОПОМОГА?
        </p>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight max-w-3xl mx-auto">
          Виникли питання або потрібна допомога?
        </h2>
        
        <p className="text-base text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Заповніть форму зворотнього зв'язку
        </p>
        
        <div className="max-w-md mx-auto space-y-4">
          <input 
            type="text" 
            placeholder="Ваше ім'я"
            className="w-full px-4 py-3 bg-slate-700 text-white border border-slate-600 rounded focus:border-yellow-400 focus:outline-none"
          />
          <input 
            type="tel" 
            placeholder="Номер телефону"
            className="w-full px-4 py-3 bg-slate-700 text-white border border-slate-600 rounded focus:border-yellow-400 focus:outline-none"
          />
          <textarea 
            placeholder="Опишіть проблему"
            rows={4}
            className="w-full px-4 py-3 bg-slate-700 text-white border border-slate-600 rounded focus:border-yellow-400 focus:outline-none resize-none"
          />
          <button className="w-full bg-yellow-400 text-slate-800 px-8 py-3 text-sm font-semibold hover:bg-yellow-300 transition-colors duration-200">
            Зв'язатись
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;