
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Sun size={18} className={`text-portfolio-text ${theme === 'light' ? 'opacity-100' : 'opacity-50'}`} />
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        className="bg-portfolio-accent/30 data-[state=checked]:bg-portfolio-accent/70"
      />
      <Moon size={18} className={`text-portfolio-text ${theme === 'dark' ? 'opacity-100' : 'opacity-50'}`} />
    </div>
  );
};

export default ThemeToggle;
