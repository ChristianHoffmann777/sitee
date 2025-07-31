import React from 'react';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from './LoginModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);
  const { user, logout } = useAuth();

  return (
    <>
      <header className="bg-slate-800/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img 
              src="/image.png" 
              alt="oberigLogo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-white text-xl font-bold">Оберіг</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm font-medium">ГОЛОВНА</a>
            {user ? (
              <a href="/personal-cabinet" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm font-medium">АБОНЕНТАМ</a>
            ) : (
              <button onClick={() => setIsLoginModalOpen(true)} className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm font-medium">АБОНЕНТАМ</button>
            )}
            <a href="/services" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm font-medium">ПОСЛУГИ</a>
            <a href="/catalog" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm font-medium">КАТАЛОГ</a>
            <a href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm font-medium">ПРО НАС</a>
            {user?.role === 'admin' && (
              <a href="/admin" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 text-sm font-medium">АДМІН</a>
            )}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <span className="text-yellow-400 text-sm font-semibold">+38(067) 164 06 33</span>
            {user ? (
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 text-gray-300">
                  <User className="w-4 h-4" />
                  <span className="text-sm">{user.name}</span>
                </div>
                <button
                  onClick={logout}
                  className="bg-transparent border border-gray-400 text-gray-300 px-4 py-2 text-sm hover:border-red-400 hover:text-red-400 transition-all duration-200 flex items-center"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  Вийти
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="bg-transparent border border-gray-400 text-gray-300 px-4 py-2 text-sm hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200"
                >
                  Увійти
                </button>
                <a href="/payment" className="bg-yellow-400 text-slate-800 px-4 py-2 text-sm font-semibold hover:bg-yellow-300 transition-colors duration-200">
                  Зв'язатись
                </a>
              </>
            )}
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">ГОЛОВНА</a>
              {user ? (
                <a href="/personal-cabinet" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">АБОНЕНТАМ</a>
              ) : (
                <button onClick={() => setIsLoginModalOpen(true)} className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-left">АБОНЕНТАМ</button>
              )}
              <a href="/services" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">ПОСЛУГИ</a>
              <a href="/catalog" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">КАТАЛОГ</a>
              <a href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">ПРО НАС</a>
              {user?.role === 'admin' && (
                <a href="/admin" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200">АДМІН</a>
              )}
              <span className="text-yellow-400 text-sm font-semibold">+38(067) 164 06 33</span>
              {user ? (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <User className="w-4 h-4" />
                    <span className="text-sm">{user.name}</span>
                  </div>
                  <button
                    onClick={logout}
                    className="bg-transparent border border-gray-400 text-gray-300 px-4 py-2 hover:border-red-400 hover:text-red-400 transition-all duration-200 w-fit flex items-center"
                  >
                    <LogOut className="w-4 h-4 mr-1" />
                    Вийти
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => setIsLoginModalOpen(true)}
                    className="bg-transparent border border-gray-400 text-gray-300 px-4 py-2 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200 w-fit text-center"
                  >
                    Увійти
                  </button>
                  <a href="/payment" className="bg-yellow-400 text-slate-800 px-4 py-2 hover:bg-yellow-300 transition-colors duration-200 w-fit text-center font-semibold">
                    Зв'язатись
                  </a>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
      </header>
      
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
};

export default Header;