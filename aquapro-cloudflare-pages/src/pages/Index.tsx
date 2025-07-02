
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import { useState } from 'react';

const Index = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-gradient-surface">
        <Navigation 
          cartCount={cartCount} 
          onCartClick={() => setIsCartOpen(true)} 
        />
        <Hero 
          cartCount={cartCount}
          setCartCount={setCartCount}
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
        />
        <Features />
        <Footer />
      </div>
    </>
  );
};

export default Index;
