
import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 10000, label: "Farmers Supported", suffix: "+" },
  { value: 500, label: "Expert Articles", suffix: "+" },
  { value: 200, label: "Video Tutorials", suffix: "+" },
  { value: 50, label: "Agricultural Experts", suffix: "+" }
];

const StatisticsSection = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = stats.map((stat, index) => {
      const duration = 3000; // 3 seconds for counting
      const steps = 60; // 60 steps for smooth animation
      const increment = stat.value / steps;
      const stepDuration = duration / steps;
      let currentCount = 0;

      return setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.value) {
          currentCount = stat.value;
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = currentCount;
            return newCounts;
          });
          clearInterval(intervals[index]);
          
          // Reset and restart after 2 seconds
          setTimeout(() => {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = 0;
              return newCounts;
            });
            
            // Restart counting after reset
            setTimeout(() => {
              let restartCount = 0;
              const restartInterval = setInterval(() => {
                restartCount += increment;
                if (restartCount >= stat.value) {
                  restartCount = stat.value;
                  setCounts(prev => {
                    const newCounts = [...prev];
                    newCounts[index] = restartCount;
                    return newCounts;
                  });
                  clearInterval(restartInterval);
                } else {
                  setCounts(prev => {
                    const newCounts = [...prev];
                    newCounts[index] = restartCount;
                    return newCounts;
                  });
                }
              }, stepDuration);
            }, 500);
          }, 2000);
        } else {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = currentCount;
            return newCounts;
          });
        }
      }, stepDuration);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/0a2a88ec-1c3a-46a6-bed3-0d79cf12d065.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Minimal overlay for better contrast while keeping image visible */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group"
            >
              <div className="bg-white/5 backdrop-blur-none rounded-xl p-4 border border-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-2 tabular-nums">
                  {Math.floor(counts[index]).toLocaleString()}{stat.suffix}
                </div>
                <div className="text-white/90 font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating elements for visual enhancement */}
        <div className="absolute top-10 left-10 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-10 left-20 w-4 h-4 bg-white/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
    </section>
  );
};

export default StatisticsSection;
