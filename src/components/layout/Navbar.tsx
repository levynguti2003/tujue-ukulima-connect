
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Menu, X, ChevronDown, User, LogOut } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Logo from '../ui/Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Mock toggle login for demo purposes
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <Logo className="h-9 w-auto" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-3 py-2 text-gray-700 hover:text-tu-green-600 transition-colors">Home</Link>
            <Link to="/about-us" className="px-3 py-2 text-gray-700 hover:text-tu-green-600 transition-colors">About Us</Link>
            <Link to="/articles" className="px-3 py-2 text-gray-700 hover:text-tu-green-600 transition-colors">Articles</Link>
            <Link to="/videos" className="px-3 py-2 text-gray-700 hover:text-tu-green-600 transition-colors">Videos</Link>
            <Link to="/ask-expert" className="px-3 py-2 text-gray-700 hover:text-tu-green-600 transition-colors">Ask an Expert</Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center px-3 py-2 text-gray-700 hover:text-tu-green-600">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/marketplace" className="w-full cursor-pointer">Marketplace</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/drone-services" className="w-full cursor-pointer">Drone Services</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Profile and Mobile Menu Button */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="rounded-full p-0 h-9 w-9 overflow-hidden">
                    <Avatar>
                      <AvatarFallback className="bg-tu-green-500 text-white">JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="w-full cursor-pointer flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={toggleLogin} className="flex items-center cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={toggleLogin} variant="default">Login</Button>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-gray-700 hover:bg-tu-green-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about-us" 
              className="block px-3 py-2 text-gray-700 hover:bg-tu-green-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/articles" 
              className="block px-3 py-2 text-gray-700 hover:bg-tu-green-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Articles
            </Link>
            <Link 
              to="/videos" 
              className="block px-3 py-2 text-gray-700 hover:bg-tu-green-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Videos
            </Link>
            <Link 
              to="/ask-expert" 
              className="block px-3 py-2 text-gray-700 hover:bg-tu-green-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Ask an Expert
            </Link>
            <Link 
              to="/marketplace" 
              className="block px-3 py-2 text-gray-700 hover:bg-tu-green-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Marketplace
            </Link>
            <Link 
              to="/drone-services" 
              className="block px-3 py-2 text-gray-700 hover:bg-tu-green-100 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Drone Services
            </Link>
            
            {isLoggedIn ? (
              <>
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 text-gray-700 hover:bg-tu-green-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    toggleLogin();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-tu-green-100 rounded-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <Button 
                onClick={() => {
                  toggleLogin();
                  setIsMenuOpen(false);
                }} 
                variant="default"
                className="w-full mt-2"
              >
                Login
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
