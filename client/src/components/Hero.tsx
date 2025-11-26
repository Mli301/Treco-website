import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@assets/generated_images/Corporate_office_building_hero_f7062cf6.png";

interface HeroProps {
  onLearnMore: () => void;
  onContact: () => void;
}

export default function Hero({ onLearnMore, onContact }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Zooming background image */}
      <div
        className="absolute inset-0 bg-cover bg-center hero-zoom"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* Keyframes and class for the zoom effect */}
      <style>{`
        .hero-zoom {
          will-change: transform;
          /* subtle parallax: keep the image centered while scaling */
          transform-origin: center;
          animation: hero-zoom 30s ease-in-out infinite;
        }
        @keyframes hero-zoom {
          0% { transform: scale(1) translateZ(0); }
          25% { transform: scale(1.03) translateZ(0); }
          50% { transform: scale(1.06) translateZ(0); }
          75% { transform: scale(1.03) translateZ(0); }
          100% { transform: scale(1) translateZ(0); }
        }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Beyond The
            <br />
            <span className="text-accent">Stats & Words</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            TRECO delivers innovative solutions for complex challenges through
            strategic consultancy and groundbreaking development projects
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={onLearnMore}
              data-testid="button-hero-learn-more"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 min-h-12 px-8 text-lg hover-elevate active-elevate-2"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onContact}
              data-testid="button-hero-contact"
              className="bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white/20 min-h-12 px-8 text-lg hover-elevate active-elevate-2"
            >
              <Play className="mr-2 h-5 w-5" />
              Get Started
            </Button>
          </div>
        </div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/70 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
