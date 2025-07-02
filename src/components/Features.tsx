
import { Thermometer, Shield, Droplets, Award, Heart, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Thermometer,
      title: "24-Hour Insulation",
      description: "Advanced double-wall vacuum insulation keeps drinks hot for 12 hours and cold for 24 hours.",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: Award,
      title: "Pure Copper Lining",
      description: "Inner copper layer provides natural antimicrobial properties and enhanced taste purity.",
      gradient: "from-amber-500 to-yellow-500"
    },
    {
      icon: Shield,
      title: "Premium Materials",
      description: "Made from 18/8 stainless steel with BPA-free construction for ultimate safety and durability.",
      gradient: "from-gray-600 to-gray-800"
    },
    {
      icon: Droplets,
      title: "Leak-Proof Design",
      description: "Precision-engineered seal and ergonomic cap ensure zero leaks and comfortable drinking experience.",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  const copperBenefits = [
    {
      icon: Heart,
      title: "Natural Purification",
      description: "Copper naturally kills harmful bacteria and viruses, purifying your water.",
      stat: "99.9%",
      statLabel: "Bacteria Elimination"
    },
    {
      icon: Zap,
      title: "Boosts Immunity",
      description: "Copper-infused water helps strengthen your immune system naturally.",
      stat: "Essential",
      statLabel: "Mineral Absorption"
    },
    {
      icon: Shield,
      title: "Antioxidant Properties",
      description: "Copper helps fight free radicals and supports healthy aging.",
      stat: "100%",
      statLabel: "Natural Process"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Why Choose AquaLux Pro?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto">
            Every detail is crafted for the perfect hydration experience. 
            From the copper-infused interior to the precision-engineered exterior.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-16 md:mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/30 dark:bg-surface-elevated/90 backdrop-blur-xl border border-white/30 dark:border-border rounded-2xl p-4 md:p-6 lg:p-8 hover:bg-white/40 dark:hover:bg-surface-elevated transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-2xl"
            >
              <div className={`w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-3 md:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
              </div>

              <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground mb-2 md:mb-3 lg:mb-4">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-text-secondary leading-relaxed">
                {feature.description}
              </p>

              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="relative bg-gradient-to-br from-[#FEE3C0] to-[#FEECCA] dark:from-gray-900/80 dark:to-black/80 backdrop-blur-xl border border-white/30 dark:border-gray-700/50 rounded-3xl p-6 md:p-8 lg:p-12 text-center mb-12 md:mb-16 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 md:mb-6">
              The Ancient Wisdom of Copper
            </h3>
            <p className="text-sm md:text-base lg:text-lg text-text-secondary mb-6 md:mb-8 lg:mb-12 leading-relaxed">
              For over 5,000 years, copper has been revered for its health benefits. Our AquaLux Pro bottles 
              harness this ancient wisdom with modern precision engineering, ensuring you get all the benefits 
              of copper-infused water in every sip.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {copperBenefits.map((benefit, index) => (
                <div key={index} className="bg-white/50 dark:bg-surface-elevated/90 backdrop-blur-xl rounded-2xl p-4 md:p-6 hover:bg-white/60 dark:hover:bg-surface-elevated transition-all duration-300 shadow-lg border border-white/30 dark:border-white/20">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-3 md:mb-4 mx-auto shadow-lg">
                    <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-base md:text-lg lg:text-xl font-bold text-foreground mb-2 md:mb-3">{benefit.title}</h4>
                  <p className="text-xs md:text-sm lg:text-base text-text-secondary mb-3 md:mb-4 leading-relaxed">{benefit.description}</p>
                  <div className="space-y-1">
                    <div className="text-lg md:text-xl lg:text-2xl font-bold text-primary">{benefit.stat}</div>
                    <div className="text-xs text-text-secondary uppercase tracking-wide">{benefit.statLabel}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center">
          <div className="space-y-2">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">5000+</div>
            <div className="text-xs md:text-sm lg:text-base text-text-secondary">Years of Traditional Use</div>
          </div>
          <div className="space-y-2">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">24hrs</div>
            <div className="text-xs md:text-sm lg:text-base text-text-secondary">Temperature Retention</div>
          </div>
          <div className="space-y-2">
            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">99.9%</div>
            <div className="text-xs md:text-sm lg:text-base text-text-secondary">Antimicrobial Efficacy</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
