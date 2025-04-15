
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Linkedin
} from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-tu-green-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo variant="light" className="h-8 w-auto" />
            </div>
            <p className="text-tu-green-100 mb-4">
              Empowering farmers through knowledge, innovation, and community.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/KDYp665orgNNEkGs/" target="_blank" rel="noopener noreferrer" className="text-tu-green-100 hover:text-white" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/skyfield-aerotech/" target="_blank" rel="noopener noreferrer" className="text-tu-green-100 hover:text-white" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@skyfieldaerotech?si=EyUlfKF0i47St2Yz" target="_blank" rel="noopener noreferrer" className="text-tu-green-100 hover:text-white" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-tu-green-100 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/articles" className="text-tu-green-100 hover:text-white transition-colors">Articles</Link>
              </li>
              <li>
                <Link to="/videos" className="text-tu-green-100 hover:text-white transition-colors">Video Tutorials</Link>
              </li>
              <li>
                <Link to="/ask-expert" className="text-tu-green-100 hover:text-white transition-colors">Ask an Expert</Link>
              </li>
              <li>
                <Link to="/marketplace" className="text-tu-green-100 hover:text-white transition-colors">Marketplace</Link>
              </li>
              <li>
                <Link to="/drone-services" className="text-tu-green-100 hover:text-white transition-colors">Drone Services</Link>
              </li>
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h3 className="text-lg font-bold mb-4">Topics</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/articles/pest-control" className="text-tu-green-100 hover:text-white transition-colors">Pest Control</Link>
              </li>
              <li>
                <Link to="/articles/smart-farming" className="text-tu-green-100 hover:text-white transition-colors">Smart Farming</Link>
              </li>
              <li>
                <Link to="/articles/drone-spraying" className="text-tu-green-100 hover:text-white transition-colors">Drone Spraying</Link>
              </li>
              <li>
                <Link to="/articles/climate-smart-agriculture" className="text-tu-green-100 hover:text-white transition-colors">Climate-Smart Agriculture</Link>
              </li>
              <li>
                <Link to="/articles/soil-health" className="text-tu-green-100 hover:text-white transition-colors">Soil Health</Link>
              </li>
              <li>
                <Link to="/articles/rice-farming" className="text-tu-green-100 hover:text-white transition-colors">Rice Farming</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-tu-green-200" />
                <span className="text-tu-green-100">
                  123 Aero Drive, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-tu-green-200" />
                <a href="tel:0115037380" className="text-tu-green-100 hover:text-white transition-colors">
                  0115037380
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-tu-green-200" />
                <a href="mailto:skyfield.kenya@gmail.com" className="text-tu-green-100 hover:text-white transition-colors">
                  skyfield.kenya@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-tu-green-700 mt-10 pt-6 text-center text-tu-green-200">
          <p>&copy; {new Date().getFullYear()} Tujue Ukulima - Skyfield Aerotech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
