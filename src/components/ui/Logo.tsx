
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

const Logo = ({ className, variant = "dark" }: LogoProps) => {
  const textColor = variant === "light" ? "text-white" : "text-tu-green-700";
  
  return (
    <div className={cn("flex items-center", className)}>
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <path 
          d="M16 3L28 9V23L16 29L4 23V9L16 3Z" 
          fill={variant === "light" ? "#FFFFFF" : "#2F5233"} 
          stroke={variant === "light" ? "#FFFFFF" : "#2F5233"}
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M16 16V29" 
          stroke={variant === "light" ? "#2F5233" : "#FFFFFF"} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M28 9L16 16L4 9" 
          stroke={variant === "light" ? "#2F5233" : "#FFFFFF"} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M4 23L16 16L28 23" 
          stroke={variant === "light" ? "#2F5233" : "#FFFFFF"} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex flex-col">
        <span className={cn("text-lg font-heading font-bold", textColor)}>
          TUJUE UKULIMA
        </span>
        <span className={cn("text-[10px] tracking-wider uppercase -mt-1", 
          variant === "light" ? "text-tu-green-100" : "text-tu-green-500")}>
          SKYFIELD AEROTECH
        </span>
      </div>
    </div>
  );
};

export default Logo;
