import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Store", path: "/" },
    { name: "Community", path: "/community" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full glass-panel border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">H</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight hidden sm:block text-text">
                HONEY<span className="text-primary">GAMES</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === link.path
                    ? "text-text"
                    : "text-text-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Search & Actions */}
          <div className="hidden md:flex items-center gap-6">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-text-muted group-focus-within:text-primary transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search games..."
                className="block w-64 pl-10 pr-3 py-1.5 border border-border rounded-full leading-5 bg-surface text-sm placeholder-text-muted focus:outline-none focus:bg-surface-hover focus:border-primary/50 transition-all duration-300 text-text"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <button onClick={toggleTheme} className="text-text-muted hover:text-primary transition-colors">
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu button & Actions */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="text-text-muted hover:text-primary transition-colors">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button 
              className="text-text-muted hover:text-text"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <div className="relative mt-4 mb-6">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-text-muted" />
                </div>
                <input
                  type="text"
                  placeholder="Search games..."
                  className="block w-full pl-10 pr-3 py-2 border border-border rounded-full leading-5 bg-background text-sm placeholder-text-muted focus:outline-none focus:border-primary/50 transition-all duration-300 text-text"
                />
              </div>
              
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                    location.pathname === link.path
                      ? "bg-primary/10 text-primary"
                      : "text-text-muted hover:bg-surface-hover hover:text-text"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
