
const stats = [
  { value: "10,000+", label: "Farmers Supported" },
  { value: "500+", label: "Expert Articles" },
  { value: "200+", label: "Video Tutorials" },
  { value: "50+", label: "Agricultural Experts" }
];

const StatisticsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
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
