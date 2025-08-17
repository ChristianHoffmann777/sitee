import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'client' | 'admin';
  address?: string;
  registrationDate: string;
}

interface Service {
  id: string;
  name: string;
  status: 'active' | 'inactive' | 'suspended';
  nextPayment: string;
  amount: string;
  description: string;
}

interface Payment {
  id: string;
  date: string;
  service: string;
  amount: string;
  status: 'paid' | 'pending' | 'failed';
  method: string;
}

interface Notification {
  id: string;
  type: 'payment' | 'maintenance' | 'info' | 'warning';
  title: string;
  message: string;
  date: string;
  read: boolean;
}

interface AuthContextType {
  user: User | null;
  services: Service[];
  payments: Payment[];
  notifications: Notification[];
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
  markNotificationAsRead: (id: string) => void;
  addPayment: (payment: Omit<Payment, 'id'>) => void;
  updateService: (id: string, data: Partial<Service>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Initialize demo data
  useEffect(() => {
    const demoServices: Service[] = [
      {
        id: '1',
        name: 'Відеоспостереження',
        status: 'active',
        nextPayment: '2024-02-15',
        amount: '500 грн',
        description: 'HD камери з нічним баченням'
      },
      {
        id: '2',
        name: 'Домофонна система',
        status: 'active',
        nextPayment: '2024-02-20',
        amount: '300 грн',
        description: 'Відеопанель з мобільним додатком'
      }
    ];

    const demoPayments: Payment[] = [
      {
        id: '1',
        date: '2024-01-15',
        service: 'Відеоспостереження',
        amount: '500 грн',
        status: 'paid',
        method: 'Банківська картка'
      },
      {
        id: '2',
        date: '2024-01-20',
        service: 'Домофонна система',
        amount: '305 грн',
        status: 'paid',
        method: 'Банківський переказ'
      }
    ];

    const demoNotifications: Notification[] = [
      {
        id: '1',
        type: 'payment',
        title: 'Нагадування про оплату',
        message: 'Наближається термін оплати за відеоспостереження',
        date: '2024-02-10',
        read: false
      },
      {
        id: '2',
        type: 'maintenance',
        title: 'Планове обслуговування',
        message: 'Заплановано технічне обслуговування 15.02.2024',
        date: '2024-02-08',
        read: true
      }
    ];

    setServices(demoServices);
    setPayments(demoPayments);
    setNotifications(demoNotifications);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Demo login logic
    if (email === 'admin@oberig.com' && password === 'admin123') {
      setUser({
        id: 'admin1',
        name: 'Адміністратор',
        email: 'admin@oberig.com',
        phone: '+38(067) 164 06 33',
        role: 'admin',
        registrationDate: '2024-01-01'
      });
      return true;
    } else if (email === 'client@example.com' && password === 'client123') {
      setUser({
        id: 'client1',
        name: 'Олександр Петренко',
        email: 'client@example.com',
        phone: '+38(067) 123 45 67',
        role: 'client',
        address: 'м. Київ, вул. Хрещатик, 1',
        registrationDate: '2024-01-15'
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (data: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...data });
    }
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const addPayment = (payment: Omit<Payment, 'id'>) => {
    const newPayment: Payment = {
      ...payment,
      id: Date.now().toString()
    };
    setPayments(prev => [newPayment, ...prev]);
  };

  const updateService = (id: string, data: Partial<Service>) => {
    setServices(prev => 
      prev.map(service => 
        service.id === id ? { ...service, ...data } : service
      )
    );
  };

  return (
    <AuthContext.Provider value={{
      user,
      services,
      payments,
      notifications,
      login,
      logout,
      updateProfile,
      markNotificationAsRead,
      addPayment,
      updateService
    }}>
      {children}
    </AuthContext.Provider>
  );
};
