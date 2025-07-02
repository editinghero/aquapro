
import { useState } from 'react';

interface ProductCardProps {
  selectedSize: string;
}

const ProductCard = ({ selectedSize }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glassmorphism Container */}
      <div className="relative bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-6 md:p-8 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1">
        
        {/* Floating Elements */}
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full blur-lg opacity-60 animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-md opacity-40 animate-pulse delay-1000"></div>

        {/* Product Image Container */}
        <div className="relative mb-6">
          <div className="w-64 md:w-80 h-80 md:h-96 mx-auto relative">
            {/* Realistic Water Bottle Mockup */}
            <div className={`absolute inset-0 transition-transform duration-700 ${isHovered ? 'transform rotate-y-12 scale-110' : ''}`}>
              {/* Bottle Shadow */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-6 md:h-8 bg-black/20 rounded-full blur-lg"></div>
              
              {/* Main Bottle Body - More Realistic */}
              <div className="relative w-24 md:w-32 h-72 md:h-80 mx-auto bg-gradient-to-b from-amber-100 via-amber-200 to-amber-300 rounded-3xl shadow-2xl transform transition-all duration-300 border border-amber-300/50">
                
                {/* Copper Inner Glow Effect */}
                <div className="absolute inset-2 bg-gradient-to-b from-orange-200/40 via-amber-300/60 to-orange-400/40 rounded-2xl"></div>
                <div className="absolute inset-3 bg-gradient-to-b from-amber-100/30 to-orange-200/30 rounded-2xl blur-sm"></div>
                
                {/* Bottle Cap - More Realistic */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 md:w-20 h-14 md:h-16 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 rounded-t-3xl shadow-lg border border-gray-400">
                  <div className="w-12 md:w-16 h-10 md:h-12 bg-gradient-to-b from-white/60 to-gray-200/60 rounded-t-2xl mx-auto mt-1"></div>
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
                
                {/* Premium Label Area */}
                <div className="absolute inset-x-2 md:inset-x-4 top-16 md:top-20 h-24 md:h-32 bg-white/95 backdrop-blur-sm rounded-2xl p-3 md:p-4 shadow-inner border border-white/50">
                  <div className="text-center space-y-1 md:space-y-2">
                    <div className="w-6 md:w-8 h-6 md:h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto flex items-center justify-center shadow-md">
                      <div className="w-3 md:w-4 h-3 md:h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="text-sm md:text-lg font-bold text-gray-800">AquaLux</div>
                    <div className="text-xs text-gray-600">Pure Copper</div>
                    <div className="text-xs md:text-sm font-semibold text-orange-600">{selectedSize}</div>
                  </div>
                </div>
                
                {/* Copper Accent Bands */}
                <div className="absolute left-0 right-0 top-1/3 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80"></div>
                <div className="absolute left-0 right-0 bottom-1/3 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-80"></div>
                
                {/* Realistic 3D Highlights */}
                <div className="absolute top-8 left-1 md:left-2 w-1 md:w-2 h-24 md:h-32 bg-white/50 rounded-full blur-sm"></div>
                <div className="absolute top-12 right-1 md:right-2 w-0.5 md:w-1 h-16 md:h-20 bg-amber-600/30 rounded-full"></div>
                
                {/* Water Level Indicator */}
                <div className="absolute inset-x-3 md:inset-x-4 bottom-8 md:bottom-12 h-16 md:h-20 bg-gradient-to-t from-blue-200/40 to-transparent rounded-b-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Size Indicators */}
        <div className="flex justify-center space-x-2 mb-4">
          {['350ml', '500ml', '750ml'].map((size) => (
            <div
              key={size}
              className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300 ${
                selectedSize === size 
                  ? 'bg-orange-500 scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            ></div>
          ))}
        </div>

        {/* Features */}
        <div className="text-center space-y-2">
          <div className="text-xs md:text-sm text-gray-600 space-y-1">
            <p className="flex items-center justify-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>24hr Temperature Control</span>
            </p>
            <p className="flex items-center justify-center space-x-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              <span>99.9% Pure Copper Lining</span>
            </p>
            <p className="flex items-center justify-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Food Grade Steel</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
