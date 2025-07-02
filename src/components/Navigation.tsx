
import { ShoppingCart, User, Menu, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/contexts/ThemeContext';

interface NavigationProps {
  cartCount?: number;
  onCartClick?: () => void;
}

const Navigation = ({
  cartCount = 0,
  onCartClick
}: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    theme,
    toggleTheme
  } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-2 md:p-4">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-2xl bg-white/10 dark:bg-surface-elevated/10 border border-white/20 dark:border-border/30 rounded-2xl px-3 md:px-6 py-3 md:py-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-background rounded-full"></div>
                </div>
                <span className="text-base md:text-xl font-bold text-primary">AquaPro</span>
              </div>
              
              <div className="flex items-center space-x-2 pl-2 md:pl-4 border-l border-white/20 dark:border-border/30">
                <div className="flex items-center space-x-2">
                  {theme === 'light' ? <Sun className="w-3 h-3 md:w-4 md:h-4 text-text-secondary" /> : <Moon className="w-3 h-3 md:w-4 md:h-4 text-text-secondary" />}
                  <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} className="scale-75 md:scale-100" />
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6 md:space-x-8">
              <a href="#products" className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium text-sm md:text-base">
                Products
              </a>
              <a href="#features" className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium text-sm md:text-base">
                Features
              </a>
              <a href="#about" className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium text-sm md:text-base">
                About
              </a>
            </div>

            <div className="flex items-center space-x-1 md:space-x-3">
              <button className="p-2 hover:bg-white/20 dark:hover:bg-white/10 backdrop-blur-md rounded-full transition-all duration-300">
                <User className="w-4 h-4 md:w-5 md:h-5 text-text-secondary" />
              </button>
              <button onClick={onCartClick} className="relative p-2 hover:bg-white/20 dark:hover:bg-white/10 backdrop-blur-md rounded-full transition-all duration-300">
                <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 text-text-secondary" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-primary text-background text-xs rounded-full flex items-center justify-center font-medium shadow-lg">
                    {cartCount}
                  </span>
                )}
              </button>
              <button 
                className="md:hidden p-2 hover:bg-white/20 dark:hover:bg-white/10 backdrop-blur-md rounded-full transition-all duration-300" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-4 h-4 text-text-secondary" />
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/20 dark:border-border/30 backdrop-blur-md">
              <div className="flex flex-col space-y-3">
                <div className="flex items-center justify-between px-3 py-2">
                  <span className="text-text-secondary text-sm">Theme</span>
                  <div className="flex items-center space-x-2">
                    {theme === 'light' ? <Sun className="w-4 h-4 text-text-secondary" /> : <Moon className="w-4 h-4 text-text-secondary" />}
                    <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} className="scale-90" />
                  </div>
                </div>
                <a href="#products" className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/20 dark:hover:bg-white/10">
                  Products
                </a>
                <a href="#features" className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/20 dark:hover:bg-white/10">
                  Features
                </a>
                <a href="#about" className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/20 dark:hover:bg-white/10">
                  About
                </a>
                <a href="#contact" className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-white/20 dark:hover:bg-white/10">
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
