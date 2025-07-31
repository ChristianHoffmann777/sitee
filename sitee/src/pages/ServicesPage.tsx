import React from 'react';
import { Shield, Camera, Lock, Wrench, Clock, CheckCircle, Phone, Mail, MapPin, Star } from 'lucide-react';

const ServicesPage = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Дякуємо! Ваша заявка прийнята. Ми зв\'яжемося з вами найближчим часом.');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Системи контролю доступу",
      description: "Встановлення та налаштування сучасних систем контролю доступу для будинків та офісів",
      features: ["Картки доступу", "Біометричні сканери", "Мобільний додаток", "24/7 моніторинг"],
      price: "від 5,000 грн"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Відеоспостереження",
      description: "Професійні системи відеоспостереження з високою якістю зображення",
      features: ["HD/4K камери", "Нічне бачення", "Хмарне зберігання", "Мобільний перегляд"],
      price: "від 3,500 грн"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Домофонні системи",
      description: "Сучасні відео та аудіо домофони для багатоквартирних будинків",
      features: ["Відеопанелі", "Дистанційне відкриття", "Запис розмов", "Інтеграція з мобільним"],
      price: "від 2,800 грн"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Технічне обслуговування",
      description: "Регулярне обслуговування та ремонт встановленого обладнання",
      features: ["Планові перевірки", "Екстрений ремонт", "Оновлення ПЗ", "Консультації"],
      price: "від 500 грн/міс"
    }
  ];

  const advantages = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Швидкий монтаж",
      description: "Встановлення систем протягом 1-3 днів"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Гарантія якості",
      description: "2 роки гарантії на всі роботи та обладнання"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Надійність",
      description: "Використовуємо тільки перевірене обладнання"
    }
  ];

  const detailedServices = [
    {
      title: "Встановлення систем контролю доступу",
      description: "Повний цикл робіт від проектування до введення в експлуатацію",
      image: "/1.jpg",
      features: ["Проектування системи", "Монтаж обладнання", "Налаштування ПЗ", "Навчання персоналу"]
    },
    {
      title: "Системи відеоспостереження",
      description: "Професійні рішення для безпеки вашого об'єкта",
      image: "/7.jpg", 
      features: ["HD/4K камери", "Нічне бачення", "Детекція руху", "Хмарне зберігання"]
    },
    {
      title: "Домофонні системи",
      description: "Сучасні рішення для багатоквартирних будинків",
      image: "/3.jpg",
      features: ["Відеопанелі", "Аудіозв'язок", "Дистанційне відкриття", "Мобільний додаток"]
    },
    {
      title: "Технічне обслуговування",
      description: "Підтримка працездатності встановленого обладнання",
      image: "/6.jpg",
      features: ["Планові перевірки", "Профілактичні роботи", "Екстрений ремонт", "Оновлення ПЗ"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-800 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Наші послуги
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Професійні рішення для безпеки вашого дому чи офісу. 
            Повний спектр послуг від консультації до технічного обслуговування.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-700 rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-yellow-400 mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-yellow-400">{service.price}</span>
                  <button className="bg-yellow-400 text-slate-800 px-6 py-2 rounded font-semibold hover:bg-yellow-300 transition-colors duration-200">
                    Замовити
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Детальний опис послуг
          </h2>
          
          <div className="space-y-16">
            {detailedServices.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img src={service.image} alt={service.title} className="w-full h-80 object-cover rounded-lg shadow-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Чому обирають нас
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-slate-800">
                    {advantage.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{advantage.title}</h3>
                <p className="text-gray-300">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Request Form */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Замовити послугу
            </h2>
            <p className="text-xl text-gray-300">
              Заповніть форму, і ми зв'яжемося з вами для уточнення деталей
            </p>
          </div>
          
          <div className="bg-slate-700 rounded-lg p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Ім'я *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-600 text-white border border-slate-500 rounded-lg focus:border-yellow-400 focus:outline-none"
                    placeholder="Ваше ім'я"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-600 text-white border border-slate-500 rounded-lg focus:border-yellow-400 focus:outline-none"
                    placeholder="+38(067) 123 45 67"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-600 text-white border border-slate-500 rounded-lg focus:border-yellow-400 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Послуга *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-600 text-white border border-slate-500 rounded-lg focus:border-yellow-400 focus:outline-none"
                >
                  <option value="">Оберіть послугу</option>
                  <option value="access-control">Системи контролю доступу</option>
                  <option value="video-surveillance">Відеоспостереження</option>
                  <option value="intercom">Домофонні системи</option>
                  <option value="maintenance">Технічне обслуговування</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Повідомлення
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-600 text-white border border-slate-500 rounded-lg focus:border-yellow-400 focus:outline-none resize-none"
                  placeholder="Опишіть ваші потреби або задайте питання..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-slate-800 px-8 py-3 rounded font-semibold hover:bg-yellow-300 transition-colors duration-200"
              >
                Відправити заявку
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Готові почати?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Зв'яжіться з нами для безкоштовної консультації та розрахунку вартості
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+380671640633" className="bg-yellow-400 text-slate-800 px-8 py-3 rounded font-semibold hover:bg-yellow-300 transition-colors duration-200">
              Зателефонувати
            </a>
            <a href="/payment" className="bg-transparent border border-gray-400 text-gray-300 px-8 py-3 rounded hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200">
              Написати повідомлення
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;