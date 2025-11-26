import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/images/Treco.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-md overflow-hidden flex items-center justify-center bg-transparent">
              <img
                src={logo}
                alt="TRECO logo"
                className="w-full h-full object-contain"
              />
              </div>
              <div>
                <div className="font-bold text-xl text-foreground">TRECO</div>
                <div className="text-xs text-muted-foreground">
                  The Research Company
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              Excellence in research and development consultancy. Delivering
              innovative solutions for complex challenges.
            </p>
            <div className="flex gap-2">
              <Button
                size="icon"
                variant="ghost"
                data-testid="button-social-facebook"
                className="hover-elevate active-elevate-2"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                data-testid="button-social-twitter"
                className="hover-elevate active-elevate-2"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                data-testid="button-social-linkedin"
                className="hover-elevate active-elevate-2"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                data-testid="button-social-instagram"
                className="hover-elevate active-elevate-2"
              >
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#cookies"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} TRECO - The Research Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
