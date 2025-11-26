import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import {
  Award,
  Heart,
  Lightbulb,
  Shield,
  Target,
  Users,
} from "lucide-react";

interface ValuesModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const coreValues = [
  {
    icon: Award,
    title: "Agility",
    description:
      "We strive for the highest standards in every project, delivering quality that exceeds expectations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace creativity and forward-thinking approaches to solve complex challenges.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with transparency, honesty, and ethical practices in all our engagements.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in the power of partnership, working closely with clients and stakeholders.",
  },
  {
    icon: Heart,
    title: "Commitment",
    description:
      "We are dedicated to our clients' success and long-term sustainable outcomes.",
  },
  {
    icon: Target,
    title: "Impact",
    description:
      "We focus on creating meaningful change that makes a lasting difference.",
  },
];

export default function ValuesModal({ open, onOpenChange }: ValuesModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">
            Core Values & Vision
          </DialogTitle>
          <DialogDescription className="text-base">
            The principles that guide our work and define our future
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8 mt-6">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Our Vision
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To be the global leader in research, Management 
              Consultancy, Monitoring and Evaluation and Data Analytics.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Our Core Values
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {coreValues.map((value, index) => (
                <Card
                  key={index}
                  className="p-6 hover-elevate active-elevate-2 transition-all duration-300"
                  data-testid={`card-value-${index}`}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {value.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
