import React from 'react';
import { CreditCard, Phone, Mail, MapPin, Clock, CheckCircle, Shield, Calculator, FileText, Download } from 'lucide-react';

const PaymentPage = () => {
  const [selectedService, setSelectedService] = React.useState('');
  const [calculatedAmount, setCalculatedAmount] = React.useState(0);
  
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    amount: '',
    message: ''
  });

  const services = [
    { id: 'video', name: 'Відеоспостереження', price: '500 грн/міс' },
    { id: 'intercom', name: 'Домофонна система', price: '300 грн/міс' },
    { id: 'access', name: 'Контроль доступу', price: '400 грн/міс' },
    { id: 'maintenance', name: 'Технічне обслуговування', price: '200 грн/міс' }
  ];

  const paymentMethods = [
    { id: 'card', name: 'Банківська картка', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'bank', name: 'Банківський переказ', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'cash', name: 'Готівка', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'online', name: 'Онлайн банкінг', icon: <CreditCard className="w-5 h-5" /> }
  ];

  const paymentHistory = [
    { date: '15.01.2024', service: 'Відеоспостереження', amount: '500 грн', status: 'Оплачено' },
    { date: '20.01.2024', service: 'Домофонна система', amount: '300 грн', status: 'Оплачено' },
    { date: '10.01.2024', service: 'Технічне обслуговування', amount: '200 грн', status: 'Оплачено' },
    { date: '05.01.2024', service: 'Контроль доступу', amount: '400 грн', status: 'Оплачено' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  React.useEffect(() => {
    const service = services.find(s => s.id === selectedService);
    if (service) {
      const price = parseInt(service.price.replace(/[^\d]/g, ''));
      setCalculatedAmount(price);
      setFormData(prev => ({ ...prev, amount: `${price} грн` }));
    }
  }, [selectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment submission
    console.log('Payment form submitted:', formData);
    alert('Дякуємо! Ваша заявка на оплату прийнята. Ми зв\'яжемося з вами найближчим часом.');
  };

  return (
    <div className="min-h-screen bg-slate-800 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Оплата послуг
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Зручні способи оплати за наші послуги. Оберіть найбільш підходящий для вас варіант.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Payment Form */}
          <div className="space-y-8">
            <div className="bg-slate-700 rounded-lg p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Форма оплати</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
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
                  onChange={(e) => { handleInputChange(e); setSelectedService(e.target.value); }}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-600 text-white border border-slate-500 rounded-lg focus:border-yellow-400 focus:outline-none"
                >
                  <option value="">Оберіть послугу</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name} - {service.price}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Сума до оплати *
                </label>
                <input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-600 text-white border border-slate-500 rounded-lg focus:border-yellow-400 focus:outline-none"
                  placeholder="500 грн"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Додаткова інформація
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-600 text-white border border-slate-500 rounded-lg focus:border-yellow-400 focus:outline-none resize-none"
                  placeholder="Додаткові коментарі або побажання..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-slate-800 px-8 py-3 rounded font-semibold hover:bg-yellow-300 transition-colors duration-200"
              >
                Подати заявку на оплату
              </button>
            </form>
          </div>
            
            {/* Payment Calculator */}
            <div className="bg-slate-700 rounded-lg p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                Калькулятор вартості
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Оберіть послугу
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-600 text-white border border-slate-500 rounded-lg focus:border-yellow-400 focus:outline-none"
                  >
                    <option value="">Оберіть послугу</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                {selectedService && (
                  <div className="bg-slate-600 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Вартість послуги:</span>
                      <span className="text-yellow-400 font-bold text-lg">{calculatedAmount} грн</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Комісія:</span>
                      <span className="text-gray-300">0 грн</span>
                    </div>
                    <hr className="border-slate-500 my-2" />
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">До сплати:</span>
                      <span className="text-yellow-400 font-bold text-xl">{calculatedAmount} грн</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Payment Methods & Info */}
          <div className="space-y-8">
            {/* Payment Methods */}
            <div className="bg-slate-700 rounded-lg p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6">Способи оплати</h3>
              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="flex items-center p-4 bg-slate-600 rounded-lg">
                    <div className="text-yellow-400 mr-3">
                      {method.icon}
                    </div>
                    <span className="text-white">{method.name}</span>
                  </div>
                ))}
                <div className="mt-4 p-4 bg-slate-600 rounded-lg">
                  <div className="flex items-center text-yellow-400 mb-2">
                    <Shield className="w-4 h-4 mr-2" />
                    <span className="font-semibold">Безпечні платежі</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Всі платежі захищені SSL-шифруванням та відповідають стандартам PCI DSS
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-700 rounded-lg p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6">Контактна інформація</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-yellow-400" />
                  <span>+38(067) 164 06 33</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-yellow-400" />
                  <span>spoberig@ukr.net</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="w-5 h-5 mr-3 text-yellow-400" />
                  <span>Пн-Пт: 9:00-18:00</span>
                </div>
              </div>
            </div>

            {/* Payment History */}
            <div className="bg-slate-700 rounded-lg p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6">Історія платежів</h3>
              <div className="space-y-3">
                {paymentHistory.map((payment, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-slate-600 rounded">
                    <div>
                      <p className="text-white font-semibold">{payment.service}</p>
                      <p className="text-gray-400 text-sm">{payment.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-yellow-400 font-semibold">{payment.amount}</p>
                      <span className="text-green-400 text-sm">{payment.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Instructions */}
            <div className="bg-slate-700 rounded-lg p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6">Інструкції з оплати</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    Заповніть форму з вашими даними та оберіть послугу
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    Наш менеджер зв'яжеться з вами для підтвердження
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    Оплатіть зручним для вас способом
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    Отримайте підтвердження оплати
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    Зберігайте чеки для звітності
                  </span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-slate-600 rounded-lg">
                <h4 className="text-white font-semibold mb-2 flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Документи для оплати
                </h4>
                <div className="space-y-2">
                  <button className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-200">
                    <Download className="w-4 h-4 mr-2" />
                    Завантажити реквізити для банківського переказу
                  </button>
                </div>
              </div>
            </div>
            
            {/* FAQ */}
            <div className="bg-slate-700 rounded-lg p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6">Часті питання</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Як швидко обробляється платіж?</h4>
                  <p className="text-gray-300 text-sm">Платежі картою обробляються миттєво, банківські перекази - протягом 1-2 робочих днів.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Чи можна налаштувати автоплатіж?</h4>
                  <p className="text-gray-300 text-sm">Так, ви можете налаштувати автоматичне списання коштів в особистому кабінеті.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Що робити, якщо платіж не пройшов?</h4>
                  <p className="text-gray-300 text-sm">Зв'яжіться з нашою службою підтримки за телефоном +38(067) 164 06 33.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;