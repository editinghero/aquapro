
import { ShoppingCart, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import Bottle3D from './Bottle3D';
import CartPopup from './CartPopup';

interface HeroProps {
  cartCount: number;
  setCartCount: (count: number) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const Hero = ({ cartCount, setCartCount, isCartOpen, setIsCartOpen }: HeroProps) => {
  const [selectedSize, setSelectedSize] = useState('500ml');
  const [selectedColor, setSelectedColor] = useState('dark');
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState<Array<{id: string, size: string, color: string, quantity: number}>>([]);

  const sizes = ['350ml', '500ml', '750ml'];
  const colors = [
    { name: 'dark', label: 'Dark Grey', value: '#393b46' },
    { name: 'orange', label: 'Orange', value: '#ff8c00' },
    { name: 'teal', label: 'Teal', value: '#99d2d6' },
    { name: 'purple', label: 'Purple', value: '#9798e2' },
    { name: 'pink', label: 'Pink', value: '#e0949b' },
    { name: 'brown', label: 'Brown', value: '#8a5153' },
    { name: 'mint', label: 'Mint Green', value: '#a8dda7' }
  ];
  
  const price = selectedSize === '350ml' ? 7199 : selectedSize === '500ml' ? 7999 : 9599;

  useEffect(() => {
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalItems);
  }, [cartItems, setCartCount]);

  const addToCart = () => {
    const newItem = {
      id: `${selectedSize}-${selectedColor}-${Date.now()}`,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity
    };
    setCartItems([...cartItems, newItem]);
    setQuantity(1);
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 md:pt-24 pb-10 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-center min-h-[80vh]">
          
          <div className="space-y-3 md:space-y-4 lg:space-y-6 order-2 lg:order-1 px-2 md:px-0">
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center space-x-2 text-xs md:text-sm mb-6 md:mb-4">
                <span className="px-2 md:px-3 py-1 bg-white/10 backdrop-blur-md border border-primary/20 rounded-full text-text-secondary">
                  Premium Collection
                </span>
              </div>
              
              <h1 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground leading-tight">
                AquaPro Elite
                <span className="block text-sm md:text-lg lg:text-xl xl:text-2xl bg-gradient-primary bg-clip-text text-transparent mt-1 md:mt-2">
                  Pure Copper Infused
                </span>
              </h1>
              
              <p className="text-xs md:text-sm lg:text-base text-text-secondary leading-relaxed">
                Experience the ancient wisdom of copper with modern innovation. 
                Our premium bottles naturally purify water while maintaining perfect temperature for 24+ hours.
              </p>

              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-primary text-primary" />
                ))}
                <span className="text-xs md:text-sm text-text-secondary ml-2">(2,847 reviews)</span>
              </div>
            </div>

            <div className="space-y-2 md:space-y-3 text-xs md:text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full"></span>
                <span>24hr Temperature Control</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full"></span>
                <span>99.9% Pure Copper Lining</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-500 rounded-full"></span>
                <span>Food Grade Steel with Matte Finish</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-500 rounded-full"></span>
                <span>Leak-Proof & BPA Free</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-xs md:max-w-sm">
              <Bottle3D selectedColor={selectedColor} selectedSize={selectedSize} />
            </div>
          </div>

          <div className="space-y-3 md:space-y-4 lg:space-y-6 order-3 px-2 md:px-0">
            <div className="space-y-2 md:space-y-3">
              <h3 className="text-sm md:text-base lg:text-lg font-semibold text-foreground">Choose Color</h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`relative w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border-2 transition-all duration-300 ${
                      selectedColor === color.name
                        ? 'border-primary scale-110 shadow-glow'
                        : 'border-border hover:border-primary/50'
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.label}
                  >
                    {selectedColor === color.name && (
                      <div className="absolute inset-0 rounded-full border-2 border-primary bg-primary/20"></div>
                    )}
                  </button>
                ))}
              </div>
              <p className="text-xs md:text-sm text-text-secondary">
                {colors.find(c => c.name === selectedColor)?.label}
              </p>
            </div>

            <div className="space-y-2 md:space-y-3">
              <h3 className="text-sm md:text-base lg:text-lg font-semibold text-foreground">Choose Size</h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-2 py-1 md:px-3 md:py-2 lg:px-4 lg:py-2 rounded-lg border-2 transition-all duration-300 text-xs md:text-sm backdrop-blur-md ${
                      selectedSize === size
                        ? 'border-primary bg-primary/20 text-primary shadow-glow'
                        : 'border-border/30 bg-white/10 text-foreground hover:border-primary/50 hover:bg-white/20'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3 md:space-y-4">
              <div className="space-y-2">
                <label className="text-xs md:text-sm font-medium text-text-secondary">Quantity</label>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-border/30 rounded-lg p-2 w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-6 h-6 md:w-8 md:h-8 rounded-md bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-foreground border border-border/30 text-sm"
                  >
                    -
                  </button>
                  <span className="w-6 md:w-8 text-center font-medium text-foreground text-sm">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-6 h-6 md:w-8 md:h-8 rounded-md bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-foreground border border-border/30 text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground">
                  ₹{(price * quantity).toLocaleString()}
                </div>
                <div className="text-xs md:text-sm text-text-secondary">Free shipping across India</div>
              </div>
            </div>

            <button 
              onClick={addToCart}
              className="w-full bg-gradient-primary text-primary-foreground px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 rounded-xl font-semibold text-sm md:text-base lg:text-lg shadow-matte hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2 md:space-x-3"
            >
              <ShoppingCart className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
              <span>Add to Cart</span>
            </button>

            <div className="text-xs md:text-sm text-text-secondary space-y-1">
              <p>✓ 30-day money-back guarantee</p>
              <p>✓ 2-year premium warranty</p>
              <p>✓ Free delivery across India</p>
            </div>
          </div>
        </div>
      </div>
      
      <CartPopup 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        setCartItems={setCartItems}
        colors={colors}
      />
    </section>
  );
};

export default Hero;
