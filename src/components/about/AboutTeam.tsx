
import { Users } from "lucide-react";

interface TeamMember {
  name: string;
  position: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Levy Nguti Mutongu",
    position: "CEO & Director",
    description: "Visionary leader and Mechatronics Engineer driving Skyfield's innovation, strategy, and partnerships.",
    image: "/lovable-uploads/5a4a5170-0cd2-4f5b-8b07-19b0dded7d92.png"
  },
  {
    name: "Swabir M. Bwana",
    position: "Chief Financial Officer (CFO) & Director",
    description: "Financial strategist ensuring sustainable growth and resource management.",
    image: "/lovable-uploads/7b32507d-7bf0-4603-84e5-c965162d7fda.png"
  },
  {
    name: "Adan Ali Wako",
    position: "Head of Information Technology & Director",
    description: "Oversees platform architecture, cyber security, and data-driven tech integration.",
    image: "/lovable-uploads/16919357-9302-4435-b48e-e85f05a339c3.png"
  },
  {
    name: "Evans Mutegi",
    position: "Chief Operations Officer (COO)",
    description: "Ensures smooth field operations, logistics, and client delivery.",
    image: "/lovable-uploads/c47ef054-f356-48c9-b1f5-c33032541c4d.png"
  },
  {
    name: "Granton Wanzofu",
    position: "Chief Technology Officer (CTO)",
    description: "Leads hardware and embedded systems development, including drone mechanics.",
    image: "/lovable-uploads/3d78ac94-f76a-4f1e-9415-b9a90d27813a.png"
  },
  {
    name: "Victoria Wambui",
    position: "Chief Strategy & Marketing Officer (CSMO)",
    description: "Drives brand growth, customer engagement, and market expansion.",
    image: "/lovable-uploads/b9f519f0-54e4-4e3a-acda-082f81399faa.png"
  }
];

const AboutTeam = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Users className="h-8 w-8 text-tu-green-600 mr-3" />
          <h2 className="text-3xl font-bold text-tu-green-700">Meet the Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-tu-green-200 mb-4 shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-tu-green-700">{member.name}</h3>
              <div className="text-sm font-medium text-tu-brown-600 mb-2">{member.position}</div>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
