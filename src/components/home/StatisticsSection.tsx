
const stats = [
  { value: "10,000+", label: "Farmers Supported", icon: "👨‍🌾" },
  { value: "500+", label: "Expert Articles", icon: "📝" },
  { value: "200+", label: "Video Tutorials", icon: "🎬" },
  { value: "50+", label: "Agricultural Experts", icon: "👩‍🔬" }
];

const StatisticsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-tu-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-lg shadow-sm border-t-4 border-tu-green-500 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-tu-green-700 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
