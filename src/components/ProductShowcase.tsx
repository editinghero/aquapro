
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, ShoppingCart } from 'lucide-react';

const ProductShowcase = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  
  const products = [{
    id: 1,
    name: "AquaLux Pro Classic",
    price: 7999,
    originalPrice: 10399,
    image: "Classic copper bottle",
    color: "from-amber-400 to-orange-500",
    features: ["Pure Copper Lining", "24hr Insulation", "500ml Capacity"],
    rating: 4.9,
    reviews: 2847
  }, {
    id: 2,
    name: "AquaLux Pro Elite",
    price: 9599,
    originalPrice: 11999,
    image: "Premium black bottle",
    color: "from-gray-800 to-black",
    features: ["Copper + Silver Lining", "36hr Insulation", "750ml Capacity"],
    rating: 5.0,
    reviews: 1234
  }, {
    id: 3,
    name: "AquaLux Pro Sport",
    price: 7199,
    originalPrice: 8799,
    image: "Sport edition bottle",
    color: "from-blue-500 to-cyan-500",
    features: ["Copper Infused", "12hr Insulation", "350ml Capacity"],
    rating: 4.8,
    reviews: 3421
  }];

  const nextProduct = () => {
    setCurrentProduct(prev => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProduct(prev => (prev - 1 + products.length) % products.length);
  };

  const currentProductData = products[currentProduct];

  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
            Discover Our Collection
          </h2>
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
            Each bottle is crafted with precision and designed for your lifestyle
          </p>
        </div>

        <div className="relative bg-surface-elevated/90 backdrop-blur-xl border border-border rounded-3xl p-6 md:p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Product Image */}
            <div className="relative order-2 lg:order-1">
              <div className={`aspect-square bg-gradient-to-br ${currentProductData.color} rounded-3xl flex items-center justify-center text-white text-lg md:text-xl font-semibold shadow-glow`}>
                {currentProductData.image}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                  <span className="text-sm text-text-secondary ml-2">
                    {currentProductData.rating} ({currentProductData.reviews.toLocaleString()} reviews)
                  </span>
                </div>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                  Featured
                </span>
              </div>

              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                {currentProductData.name}
              </h3>

              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl md:text-3xl font-bold text-foreground">
                    ₹{currentProductData.price.toLocaleString()}
                  </span>
                  <span className="text-lg text-text-secondary line-through">
                    ₹{currentProductData.originalPrice.toLocaleString()}
                  </span>
                </div>
                <div className="text-sm text-green-500 font-medium">
                  Save ₹{(currentProductData.originalPrice - currentProductData.price).toLocaleString()}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Key Features:</h4>
                <div className="space-y-1">
                  {currentProductData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold shadow-matte hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevProduct}
              className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-foreground hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex space-x-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProduct(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentProduct ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextProduct}
              className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-foreground hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
