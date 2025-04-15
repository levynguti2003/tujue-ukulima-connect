
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
    image: "/placeholder.svg"
  },
  {
    name: "Swabir M. Bwana",
    position: "Chief Financial Officer (CFO) & Director",
    description: "Financial strategist ensuring sustainable growth and resource management.",
    image: "/placeholder.svg"
  },
  {
    name: "Adan Ali Wako",
    position: "Head of Information Technology & Director",
    description: "Oversees platform architecture, cyber security, and data-driven tech integration.",
    image: "/placeholder.svg"
  },
  {
    name: "Evans Mutegi",
    position: "Chief Operations Officer (COO)",
    description: "Ensures smooth field operations, logistics, and client delivery.",
    image: "/placeholder.svg"
  },
  {
    name: "Granton Wanzofu",
    position: "Chief Technology Officer (CTO)",
    description: "Leads hardware and embedded systems development, including drone mechanics.",
    image: "/placeholder.svg"
  },
  {
    name: "Victoria Wambui",
    position: "Chief Strategy & Marketing Officer (CSMO)",
    description: "Drives brand growth, customer engagement, and market expansion.",
    image: "/placeholder.svg"
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
