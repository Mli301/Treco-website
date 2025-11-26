import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@assets/images/Treco.png";

interface HeaderProps {
  onNavClick: (section: string) => void;
}

export default function Header({ onNavClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About Us", value: "about" },
    { label: "Team", value: "team" },
    { label: "Values & Vision", value: "values" },
    { label: "Projects", value: "projects" },
    { label: "Contact", value: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-md overflow-hidden flex items-center justify-center bg-transparent">
              <img
                src={logo}
                alt="TRECO logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="font-bold text-xl text-foreground">TRECO</div>
              <div className="text-xs text-muted-foreground">The Research Company</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.value}
                variant="ghost"
                onClick={() => onNavClick(item.value)}
                data-testid={`button-nav-${item.value}`}
                className="hover-elevate active-elevate-2"
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover-elevate active-elevate-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <Button
                key={item.value}
                variant="ghost"
                onClick={() => {
                  onNavClick(item.value);
                  setMobileMenuOpen(false);
                }}
                data-testid={`button-mobile-nav-${item.value}`}
                className="justify-start hover-elevate active-elevate-2"
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
