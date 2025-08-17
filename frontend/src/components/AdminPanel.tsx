import React, { useState } from 'react';
import { Plus, Edit, Trash2, Search, Filter, Package, Users, BarChart3, Settings } from 'lucide-react';
import { useProducts, Product } from '../contexts/ProductContext';
import ProductForm from './ProductForm';

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isProductFormOpen, setIsProductFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  
  const { products, categories, deleteProduct } = useProducts();

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setIsProductFormOpen(true);
  };

  const handleDeleteProduct = (id: string) => {
    if (window.confirm('Ви впевнені, що хочете видалити цей товар?')) {
      deleteProduct(id);
    }
  };

  const handleCloseForm = () => {
    setIsProductFormOpen(false);
    setEditingProduct(null);
  };

  const tabs = [
    { id: 'products', name: 'Товари', icon: <Package className="w-4 h-4" /> },
    { id: 'users', name: 'Користувачі', icon: <Users className="w-4 h-4" /> },
    { id: 'analytics', name: 'Аналітика', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'settings', name: 'Налаштування', icon: <Settings className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-slate-800 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Панель адміністратора</h1>
          <p className="text-gray-300">Управління товарами та користувачами</p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-slate-700 rounded-lg p-1 mb-8">
          <nav className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'bg-yellow-400 text-slate-800'
                    : 'text-gray-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            {/* Header Actions */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col md:flex-row gap-4 items-center flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Пошук товарів..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 text-white border border-slate-600 rounded-lg focus:border-yellow-400 focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-slate-700 text-white border border-slate-600 rounded-lg px-4 py-3 focus:border-yellow-400 focus:outline-none"
                  >
                    <option value="">Всі категорії</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                onClick={() => setIsProductFormOpen(true)}
                className="bg-yellow-400 text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200 flex items-center"
              >
                <Plus className="w-5 h-5 mr-2" />
                Додати товар
              </button>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-slate-700 rounded-lg overflow-hidden shadow-xl">
                  <div className="relative h-48 bg-white">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain p-4"
                    />
                    <div className="absolute top-2 left-2 bg-yellow-400 text-slate-800 px-2 py-1 rounded text-xs font-semibold">
                      {product.category}
                    </div>
                    <div className="absolute top-2 right-2">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        product.inStock 
                          ? 'bg-green-500 text-white' 
                          : 'bg-red-500 text-white'
                      }`}>
                        {product.inStock ? 'В наявності' : 'Немає в наявності'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-bold text-yellow-400">{product.price}</span>
                      <span className="text-gray-300">★ {product.rating}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditProduct(product)}
                        className="flex-1 bg-blue-600 text-white px-3 py-2 rounded font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        Редагувати
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="flex-1 bg-red-600 text-white px-3 py-2 rounded font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center justify-center"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Видалити
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">Товари не знайдено</p>
              </div>
            )}
          </div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <div className="bg-slate-700 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Управління користувачами</h2>
            <p className="text-gray-300">Функціонал управління користувачами буде додано в наступних версіях.</p>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="bg-slate-700 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Аналітика</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-600 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Всього товарів</h3>
                <p className="text-3xl font-bold text-yellow-400">{products.length}</p>
              </div>
              <div className="bg-slate-600 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">В наявності</h3>
                <p className="text-3xl font-bold text-green-400">
                  {products.filter(p => p.inStock).length}
                </p>
              </div>
              <div className="bg-slate-600 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Категорій</h3>
                <p className="text-3xl font-bold text-blue-400">{categories.length}</p>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-slate-700 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Налаштування системи</h2>
            <p className="text-gray-300">Налаштування системи будуть додані в наступних версіях.</p>
          </div>
        )}
      </div>

      {/* Product Form Modal */}
      {isProductFormOpen && (
        <ProductForm
          product={editingProduct}
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
};

export default AdminPanel;