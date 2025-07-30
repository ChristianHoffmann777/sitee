import React from 'react';
import { Search, Filter, ShoppingCart, Star, Heart, Eye, Phone, Mail } from 'lucide-react';
import { useProducts } from '../contexts/ProductContext';

const CatalogPage = () => {
  const { products, categories } = useProducts();
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    product: '',
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
    setFormData({ name: '', phone: '', email: '', product: '', message: '' });
  };

  const allCategories = ["Всі", ...categories];
  const [selectedCategory, setSelectedCategory] = React.useState("Всі");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [favorites, setFavorites] = React.useState<number[]>([]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "Всі" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-slate-800 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Каталог обладнання
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Професійне обладнання для систем безпеки від провідних виробників. 
            Високоякісні рішення для вашого дому чи офісу.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Пошук товарів..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-600 text-white border border-slate-500 rounded-lg focus:border-yellow-400 focus:outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-slate-600 text-white border border-slate-500 rounded-lg px-4 py-3 focus:border-yellow-400 focus:outline-none"
              >
                {allCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-slate-700 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-64 bg-white">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-400 text-slate-800 px-2 py-1 rounded text-xs font-semibold">
                    {product.category}
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button 
                      onClick={() => toggleFavorite(product.id)}
                      className={`p-2 rounded-full transition-colors duration-200 ${
                        favorites.includes(parseInt(product.id))
                          ? 'bg-red-500 text-white' 
                          : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                      }`}
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-red-500 text-white px-3 py-1 rounded text-sm font-semibold">Немає в наявності</span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center mr-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-gray-300 text-sm ml-1">{product.rating}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-1 mb-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-yellow-400">{product.price}</span>
                    <button 
                      disabled={!product.inStock}
                      className="bg-yellow-400 text-slate-800 px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition-colors duration-200 flex items-center gap-2"
                      onClick={() => setFormData({...formData, product: product.name})}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      {product.inStock ? 'Замовити' : 'Недоступно'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                Товари за вашим запитом не знайдено
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-20 bg-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Галерея встановленого обладнання
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/6.jpg", "/7.jpg"].map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img 
                  src={image} 
                  alt={`Встановлене обладнання ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-yellow-400 text-slate-800 p-2 rounded-full hover:bg-yellow-300 transition-colors duration-200">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Замовити обладнання
            </h2>
            <p className="text-xl text-gray-300">
              Заповніть форму, і ми зв'яжемося з вами для уточнення деталей замовлення
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
                name="product"
                value={formData.product}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-600 text-white border border-slate-500 rounded-lg focus:border-yellow-400 focus:outline-none"
                placeholder="Назва товару"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-slate-600 text-white border border-slate-500 rounded-lg focus:border-yellow-400 focus:outline-none resize-none"
                placeholder="Додаткові побажання або питання..."
              />

              <button
                type="submit"
                className="w-full bg-yellow-400 text-slate-800 px-8 py-3 rounded font-semibold hover:bg-yellow-300 transition-colors duration-200"
              >
                Відправити замовлення
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Не знайшли потрібне обладнання?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Зв'яжіться з нами, і ми підберемо оптимальне рішення для ваших потреб
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

export default CatalogPage;