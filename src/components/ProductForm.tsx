import React, { useState, useEffect } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useProducts, Product } from '../contexts/ProductContext';

interface ProductFormProps {
  product?: Product | null;
  onClose: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onClose }) => {
  const { addProduct, updateProduct, categories } = useProducts();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    image: '',
    description: '',
    rating: 4.5,
    inStock: true,
    features: [''],
    specifications: {} as Record<string, string>
  });

  const [specKey, setSpecKey] = useState('');
  const [specValue, setSpecValue] = useState('');

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        category: product.category,
        price: product.price,
        image: product.image,
        description: product.description,
        rating: product.rating,
        inStock: product.inStock,
        features: product.features.length > 0 ? product.features : [''],
        specifications: product.specifications || {}
      });
    }
  }, [product]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData(prev => ({ ...prev, features: newFeatures }));
  };

  const addFeature = () => {
    setFormData(prev => ({ ...prev, features: [...prev.features, ''] }));
  };

  const removeFeature = (index: number) => {
    if (formData.features.length > 1) {
      const newFeatures = formData.features.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, features: newFeatures }));
    }
  };

  const addSpecification = () => {
    if (specKey && specValue) {
      setFormData(prev => ({
        ...prev,
        specifications: { ...prev.specifications, [specKey]: specValue }
      }));
      setSpecKey('');
      setSpecValue('');
    }
  };

  const removeSpecification = (key: string) => {
    const newSpecs = { ...formData.specifications };
    delete newSpecs[key];
    setFormData(prev => ({ ...prev, specifications: newSpecs }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const productData = {
      ...formData,
      features: formData.features.filter(feature => feature.trim() !== '')
    };

    if (product) {
      updateProduct(product.id, productData);
    } else {
      addProduct(productData);
    }
    
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            {product ? 'Редагувати товар' : 'Додати новий товар'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Назва товару *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-700 text-white border border-slate-600 rounded-lg focus:border-yellow-400 focus:outline-none"
                placeholder="Введіть назву товару"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Категорія *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-700 text-white border border-slate-600 rounded-lg focus:border-yellow-400 focus:outline-none"
              >
                <option value="">Оберіть категорію</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Ціна *
              </label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-700 text-white border border-slate-600 rounded-lg focus:border-yellow-400 focus:outline-none"
                placeholder="2,800 грн"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Рейтинг
              </label>
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                min="1"
                max="5"
                step="0.1"
                className="w-full px-4 py-3 bg-slate-700 text-white border border-slate-600 rounded-lg focus:border-yellow-400 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              URL зображення *
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-slate-700 text-white border border-slate-600 rounded-lg focus:border-yellow-400 focus:outline-none"
              placeholder="/path/to/image.jpg"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Опис
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 bg-slate-700 text-white border border-slate-600 rounded-lg focus:border-yellow-400 focus:outline-none resize-none"
              placeholder="Опис товару..."
            />
          </div>

          <div>
            <label className="flex items-center text-gray-300 text-sm font-medium mb-2">
              <input
                type="checkbox"
                name="inStock"
                checked={formData.inStock}
                onChange={handleInputChange}
                className="mr-2"
              />
              В наявності
            </label>
          </div>

          {/* Features */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Особливості
            </label>
            <div className="space-y-2">
              {formData.features.map((feature, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                    className="flex-1 px-4 py-2 bg-slate-700 text-white border border-slate-600 rounded-lg focus:border-yellow-400 focus:outline-none"
                    placeholder="Особливість товару"
                  />
                  <button
                    type="button"
                    onClick={() => removeFeature(index)}
                    className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addFeature}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center"
              >
                <Plus className="w-4 h-4 mr-2" />
                Додати особливість
              </button>
            </div>
          </div>

          {/* Specifications */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Технічні характеристики
            </label>
            
            {/* Add new specification */}
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={specKey}
                onChange={(e) => setSpecKey(e.target.value)}
                className="flex-1 px-4 py-2 bg-slate-700 text-white border border-slate-600 rounded-lg focus:border-yellow-400 focus:outline-none"
                placeholder="Назва характеристики"
              />
              <input
                type="text"
                value={specValue}
                onChange={(e) => setSpecValue(e.target.value)}
                className="flex-1 px-4 py-2 bg-slate-700 text-white border border-slate-600 rounded-lg focus:border-yellow-400 focus:outline-none"
                placeholder="Значення"
              />
              <button
                type="button"
                onClick={addSpecification}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Existing specifications */}
            <div className="space-y-2">
              {Object.entries(formData.specifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between bg-slate-700 px-4 py-2 rounded-lg">
                  <span className="text-white">
                    <strong>{key}:</strong> {value}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeSpecification(key)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              className="flex-1 bg-yellow-400 text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200"
            >
              {product ? 'Оновити товар' : 'Додати товар'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200"
            >
              Скасувати
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;