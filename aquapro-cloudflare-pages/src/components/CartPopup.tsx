
import { X, Trash2 } from 'lucide-react';

interface CartItem {
  id: string;
  size: string;
  color: string;
  quantity: number;
}

interface CartPopupProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  setCartItems: (items: CartItem[]) => void;
  colors: Array<{ name: string; label: string; value: string }>;
}

const CartPopup = ({ isOpen, onClose, cartItems, setCartItems, colors }: CartPopupProps) => {
  if (!isOpen) return null;

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const getColorValue = (colorName: string) => {
    return colors.find(c => c.name === colorName)?.value || '#393b46';
  };

  const getColorLabel = (colorName: string) => {
    return colors.find(c => c.name === colorName)?.label || colorName;
  };

  const getPrice = (size: string) => {
    return size === '350ml' ? 7199 : size === '500ml' ? 7999 : 9599;
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + (getPrice(item.size) * item.quantity);
    }, 0);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-[#FFF7E4] to-[#FFFBEB] dark:bg-surface-elevated/90 backdrop-blur-xl border border-white/30 dark:border-border/30 rounded-2xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto shadow-glow">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground">Shopping Cart</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-all duration-300"
          >
            <X className="w-5 h-5 text-text-secondary" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-text-secondary">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white/30 dark:bg-white/5 backdrop-blur-md border border-white/30 dark:border-border/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-8 h-8 rounded-full border-2 border-border"
                        style={{ backgroundColor: getColorValue(item.color) }}
                      ></div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.size}</p>
                        <p className="text-xs text-text-secondary">{getColorLabel(item.color)}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="p-1 hover:bg-white/10 rounded-full transition-all duration-300"
                    >
                      <Trash2 className="w-4 h-4 text-text-secondary" />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-md bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-foreground border border-white/30 dark:border-border/30 text-sm"
                      >
                        -
                      </button>
                      <span className="w-6 text-center font-medium text-foreground text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-md bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-foreground border border-white/30 dark:border-border/30 text-sm"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-sm font-semibold text-foreground">
                      ₹{(getPrice(item.size) * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/30 dark:border-border/30 pt-4">
              <div className="flex items-center justify-between mb-4">
                <p className="text-lg font-semibold text-foreground">Total</p>
                <p className="text-lg font-bold text-primary">₹{getTotalPrice().toLocaleString()}</p>
              </div>
              
              <button className="w-full bg-gradient-primary text-primary-foreground px-4 py-3 rounded-xl font-semibold shadow-matte hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPopup;
