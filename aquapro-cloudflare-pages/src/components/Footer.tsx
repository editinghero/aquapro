
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-transparent via-white/5 to-white/10 dark:via-surface-elevated/10 dark:to-surface-elevated/20 backdrop-blur-2xl py-12 md:py-16 lg:py-20 px-4 border-t border-white/20 dark:border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                <div className="w-4 h-4 md:w-5 md:h-5 bg-background rounded-full"></div>
              </div>
              <span className="text-xl md:text-2xl font-bold text-foreground">AquaPro</span>
            </div>
            <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-md">
              Premium copper-infused water bottles designed for the discerning individual. 
              Experience pure hydration with unmatched style and functionality.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            <h3 className="text-lg md:text-xl font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-3 md:space-y-4">
              <a href="#products" className="block text-sm md:text-base text-text-secondary hover:text-primary transition-colors duration-300">
                Products
              </a>
              <a href="#features" className="block text-sm md:text-base text-text-secondary hover:text-primary transition-colors duration-300">
                Features
              </a>
              <a href="#about" className="block text-sm md:text-base text-text-secondary hover:text-primary transition-colors duration-300">
                About Us
              </a>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <h3 className="text-lg md:text-xl font-semibold text-foreground">Support</h3>
            <div className="space-y-3 md:space-y-4">
              <a href="#" className="block text-sm md:text-base text-text-secondary hover:text-primary transition-colors duration-300">
                Shipping Info
              </a>
              <a href="#" className="block text-sm md:text-base text-text-secondary hover:text-primary transition-colors duration-300">
                Returns & Exchanges
              </a>
              <a href="#" className="block text-sm md:text-base text-text-secondary hover:text-primary transition-colors duration-300">
                Size Guide
              </a>
              <a href="#" className="block text-sm md:text-base text-text-secondary hover:text-primary transition-colors duration-300">
                Care Instructions
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 dark:border-border/30 pt-8 md:pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-text-secondary text-sm md:text-base">© 2025 AquaPro. All rights reserved.</div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 md:space-x-8 text-sm md:text-base">
              <a href="#" className="text-text-secondary hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
