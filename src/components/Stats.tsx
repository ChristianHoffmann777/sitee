import React from 'react';

const Stats = () => {
  const stats = [
    { number: "10+", label: "РОКІВ НА РИНКУ" },
    { number: "1000+", label: "ЗАДОВОЛЕНИХ КЛІЄНТІВ" },
    { number: "24/7", label: "ТЕХНІЧНА ПІДТРИМКА" },
    { number: "100%", label: "ГАРАНТІЯ ЯКОСТІ" }
  ];

  return (
    <section className="py-16 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-400 text-xs font-medium tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;