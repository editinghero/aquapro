import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-background/80 backdrop-blur-md flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow animate-pulse mx-auto">
          <div className="w-8 h-8 bg-background rounded-full"></div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">AquaPro</h2>
          <p className="text-text-secondary">Loading Premium Experience...</p>
        </div>
        <div className="w-32 h-1 bg-border rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;