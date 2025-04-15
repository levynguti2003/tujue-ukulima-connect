
import { BarChart3, Users, TrendingUp, Brain } from "lucide-react";

interface ImpactStat {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const impactStats: ImpactStat[] = [
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "500+ Farmers",
    description: "Empowered through drone services"
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-white" />,
    title: "40% Reduction",
    description: "In crop losses in pilot regions"
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    title: "Digital Jobs",
    description: "Created for rural youth"
  },
  {
    icon: <Brain className="h-8 w-8 text-white" />,
    title: "AI-Powered",
    description: "Digital hub for knowledge sharing"
  }
];

const AboutImpact = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-tu-green-700 to-tu-green-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transform transition-all duration-300 hover:-translate-y-2">
              <div className="bg-tu-green-600 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{stat.title}</h3>
              <p className="text-white/80">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutImpact;
