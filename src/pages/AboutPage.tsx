import React from 'react';
import { Shield, Users, Award, Clock, CheckCircle, Phone, Mail, MapPin, Star, Quote } from 'lucide-react';

const AboutPage = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
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
    alert('Дякуємо! Ваше повідомлення надіслано. Ми зв\'яжемося з вами найближчим часом.');
    setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
  };

  const stats = [
    { number: "10+", label: "РОКІВ НА РИНКУ" },
    { number: "1000+", label: "ЗАДОВОЛЕНИХ КЛІЄНТІВ" },
    { number: "24/7", label: "ТЕХНІЧНА ПІДТРИМКА" },
    { number: "100%", label: "ГАРАНТІЯ ЯКОСТІ" }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Надійність",
      description: "Використовуємо тільки перевірене обладнання від провідних виробників"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Професіоналізм",
      description: "Наша команда складається з досвідчених спеціалістів з багаторічним досвідом"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Якість",
      description: "Гарантуємо високу якість виконаних робіт та встановленого обладнання"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Оперативність",
      description: "Швидко реагуємо на заявки та виконуємо роботи в узгоджені терміни"
    }
  ];

  const services = [
    "Системи контролю доступу",
    "Відеоспостереження",
    "Домофонні системи",
    "Технічне обслуговування",
    "Консультації та підтримка"
  ];

  const team = [
    {
      name: "Олександр Іваненко",
      position: "Керівник проектів",
      experience: "12 років досвіду",
      description: "Спеціаліст з проектування та впровадження систем безпеки"
    },
    {
      name: "Марина Петренко", 
      position: "Інженер-технік",
      experience: "8 років досвіду",
      description: "Експерт з налаштування та обслуговування обладнання"
    },
    {
      name: "Ігор Коваленко",
      position: "Монтажник",
      experience: "10 років досвіду", 
      description: "Професійний монтаж будь-якої складності"
    }
  ];

  const certificates = [
    "Сертифікат якості ISO 9001",
    "Ліцензія на встановлення систем безпеки",
    "Партнерські сертифікати виробників обладнання"
  ];

  return (
    <div className="min-h-screen bg-slate-800 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Про компанію Оберіг
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Ми - надійний партнер у сфері систем безпеки з багаторічним досвідом 
            та індивідуальним підходом до кожного клієнта.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-700">
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

      {/* About Content */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Наша місія
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Компанія "Оберіг" спеціалізується на професійному монтажі та обслуговуванні 
                  систем безпеки для житлових та комерційних об'єктів.
                </p>
                <p>
                  Ми прагнемо забезпечити максимальний рівень безпеки наших клієнтів, 
                  використовуючи найсучасніше обладнання та інноваційні технології.
                </p>
                <p>
                  Наш досвід більше 10 років на ринку дозволяє нам гарантувати 
                  високу якість послуг та надійність встановлених систем.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-slate-700 rounded-lg p-8 shadow-2xl">
                <img 
                  src="/6.jpg" 
                  alt="Про компанію" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Team Section */}
          <section className="py-20 bg-slate-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Наша команда
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="bg-slate-800 rounded-lg p-6 text-center shadow-xl">
                    <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-slate-800 font-bold text-2xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-yellow-400 font-semibold mb-2">{member.position}</p>
                    <p className="text-gray-400 text-sm mb-3">{member.experience}</p>
                    <p className="text-gray-300 text-sm">{member.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Наші цінності
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-slate-700 rounded-lg p-6 text-center">
                  <div className="text-yellow-400 mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Що ми пропонуємо
            </h2>
            <div className="bg-slate-700 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />
                    <span className="text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-20 bg-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Сертифікати та ліцензії
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 text-center shadow-xl">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-slate-800" />
                </div>
                <h3 className="text-lg font-bold text-white">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Історія компанії
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-yellow-400 w-4 h-4 rounded-full mt-2 mr-6"></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">2014 - Заснування компанії</h3>
                  <p className="text-gray-300">Початок діяльності у сфері систем безпеки та контролю доступу</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-400 w-4 h-4 rounded-full mt-2 mr-6"></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">2017 - Розширення послуг</h3>
                  <p className="text-gray-300">Додавання відеоспостереження та домофонних систем до переліку послуг</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-400 w-4 h-4 rounded-full mt-2 mr-6"></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">2020 - Цифровізація</h3>
                  <p className="text-gray-300">Впровадження мобільних додатків та хмарних рішень</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-400 w-4 h-4 rounded-full mt-2 mr-6"></div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">2024 - Сьогодення</h3>
                  <p className="text-gray-300">Понад 1000 задоволених клієнтів та лідерські позиції на ринку</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Наші роботи
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/6.jpg", "/7.jpg"].map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-xl">
                <img 
                  src={image} 
                  alt={`Проект ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Контактна інформація
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-slate-800" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Телефон</h3>
              <p className="text-gray-300">+38(067) 164 06 33</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-slate-800" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300">spoberig@ukr.net</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-slate-800" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Режим роботи</h3>
              <p className="text-gray-300">Пн-Пт: 9:00-18:00<br />Сб-Нд: за домовленістю</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Зв'яжіться з нами
            </h2>
            <p className="text-xl text-gray-300">
              Маєте питання? Заповніть форму, і ми відповімо найближчим часом
            </p>
          </div>
          
          <div className="bg-slate-700 rounded-lg p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-600 text-white border border-slate-500 rounded-lg focus:border-yellow-400 focus:outline-none"
                  placeholder="Ваше ім'я *"
                />
                
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-600 text-white border border-slate-500 rounded-lg focus:border-yellow-400 focus:outline-none"
                  placeholder="Телефон *"
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-600 text-white border border-slate-500 rounded-lg focus:border-yellow-400 focus:outline-none"
                placeholder="Email"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-600 text-white border border-slate-500 rounded-lg focus:border-yellow-400 focus:outline-none"
                placeholder="Тема повідомлення"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 bg-slate-600 text-white border border-slate-500 rounded-lg focus:border-yellow-400 focus:outline-none resize-none"
                placeholder="Ваше повідомлення..."
              />

              <button
                type="submit"
                className="w-full bg-yellow-400 text-slate-800 px-8 py-3 rounded font-semibold hover:bg-yellow-300 transition-colors duration-200"
              >
                Відправити повідомлення
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Готові співпрацювати?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Зв'яжіться з нами для безкоштовної консультації
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

export default AboutPage;