import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  features: string[];
  rating: number;
  inStock: boolean;
  description: string;
  specifications?: Record<string, string>;
  createdAt: string;
  updatedAt: string;
}

interface ProductContextType {
  products: Product[];
  categories: string[];
  addProduct: (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  getProduct: (id: string) => Product | undefined;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const categories = ["Домофони", "Відеоспостереження", "Контроль доступу", "Енергосистеми"];

  // Initialize with demo products
  useEffect(() => {
    const demoProducts: Product[] = [
      {
        id: '1',
        name: "Відеопанель RIO FHD(RF) GREY Light Vision",
        category: "Домофони",
        price: "2,800 грн",
        image: "/Відеопанель RIO FHD(RF) GREY Light Vision.png",
        features: ["HD якість", "Нічне бачення", "Дистанційне керування"],
        rating: 4.8,
        inStock: true,
        description: "Сучасна відеопанель з високою роздільністю та надійним захистом",
        specifications: {
          "Роздільність": "1920x1080",
          "Кут огляду": "170°",
          "Живлення": "12V DC",
          "Робоча температура": "-20°C до +60°C"
        },
        createdAt: '2024-01-01',
        updatedAt: '2024-01-01'
      },
      {
        id: '2',
        name: "HDTVI-відеокамера 3Mp Light Vision VLC-3248DM White f=3.6mm",
        category: "Відеоспостереження",
        price: "1,500 грн",
        image: "/HDTVI-відеокамера 3Mp Light Vision VLC-3248DM.jpg",
        features: ["3Mp роздільність", "Нічне бачення", "Вологозахист IP66"],
        rating: 4.6,
        inStock: true,
        description: "Професійна HDTVI камера для зовнішнього спостереження",
        specifications: {
          "Роздільність": "2048x1536",
          "Об'єктив": "3.6mm",
          "ІЧ підсвітка": "до 20м",
          "Захист": "IP66"
        },
        createdAt: '2024-01-02',
        updatedAt: '2024-01-02'
      },
      {
        id: '3',
        name: "IP-відеокамера з 4G 5Mp Light Vision VLC-0505IG Black f=3.6mm",
        category: "Відеоспостереження",
        price: "3,200 грн",
        image: "/IP-відеокамера з 4G 5Mp Light Vision VLC-0505IG.png",
        features: ["5Mp роздільність", "4G підключення", "Мобільний додаток"],
        rating: 4.9,
        inStock: true,
        description: "IP камера з 4G модулем для віддаленого спостереження",
        specifications: {
          "Роздільність": "2592x1944",
          "Зв'язок": "4G LTE",
          "Об'єктив": "3.6mm",
          "Живлення": "12V DC / PoE"
        },
        createdAt: '2024-01-03',
        updatedAt: '2024-01-03'
      }
    ];

    setProducts(demoProducts);
  }, []);

  const addProduct = (productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const updateProduct = (id: string, productData: Partial<Product>) => {
    setProducts(prev => 
      prev.map(product => 
        product.id === id 
          ? { ...product, ...productData, updatedAt: new Date().toISOString() }
          : product
      )
    );
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  const getProduct = (id: string) => {
    return products.find(product => product.id === id);
  };

  return (
    <ProductContext.Provider value={{
      products,
      categories,
      addProduct,
      updateProduct,
      deleteProduct,
      getProduct
    }}>
      {children}
    </ProductContext.Provider>
  );
};