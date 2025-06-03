import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Plane, Heart, Users } from "lucide-react";

const companies = [
  {
    id: "skyfield-aerotech",
    name: "Skyfield Aerotech",
    description: "Revolutionizing agriculture using drone technology for precision farming and crop monitoring",
    logo: "https://res.cloudinary.com/dalbjrgto/image/upload/v1737550678/WhatsApp_Image_2024-09-15_at_02.14.00_c07c6102_a4qllk.jpg",
    coverImage: "https://res.cloudinary.com/dalbjrgto/image/upload/v1748529254/WhatsApp_Image_2025-05-29_at_17.32.56_ea67fa29_ykt8q4.jpg",
    specialty: "Drone Technology",
    established: "2020",
    icon: Plane
  },
  {
    id: "smachs-foundation",
    name: "Smachs Foundation",
    description: "Empowering agricultural communities through education, sustainable practices, and innovative farming solutions",
    logo: "https://res.cloudinary.com/dalbjrgto/image/upload/v1748920724/smachs_logo_uw03kp.png",
    coverImage: "https://res.cloudinary.com/dalbjrgto/image/upload/v1748920724/smachs_foundation_bskd3k.jpg",
    specialty: "Community Development",
    established: "2018",
    icon: Heart
  },
  {
    id: "pula-advisors",
    name: "Pula Advisors",
    description: "Providing innovative insurance solutions and advisory services to protect farmers and agricultural investments across Africa",
    logo: "https://res.cloudinary.com/dalbjrgto/image/upload/v1748928908/pula_pgpec3.png",
    coverImage: "https://res.cloudinary.com/dalbjrgto/image/upload/v1748928909/poula_ylmznu.png",
    specialty: "Agricultural Insurance",
    established: "2015",
    icon: Users
  }
];

const CompaniesPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-r from-tu-green-600 to-tu-green-700">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
                Agricultural Innovation Partners
              </h1>
              <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
                Discover leading companies transforming agriculture through cutting-edge technology and innovative solutions
              </p>
            </div>
          </div>
        </section>

        {/* Companies Grid */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companies.map((company) => (
                <Card key={company.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={company.coverImage}
                      alt={company.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                      />
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <company.icon className="w-5 h-5 text-tu-green-600" />
                      <span className="text-sm font-medium text-tu-green-600">{company.specialty}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{company.name}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{company.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Est. {company.established}</span>
                      <Button asChild className="bg-tu-green-600 hover:bg-tu-green-700">
                        <Link to={`/companies/${company.id}`} className="flex items-center gap-2">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CompaniesPage;
