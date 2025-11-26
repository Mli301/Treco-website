import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Building2, Target, Users } from "lucide-react";
// @ts-ignore: Allow importing PNG via asset alias (add a .d.ts declaration later for a cleaner fix)
import aboutImage from "@assets/generated_images/Team_collaboration_office_scene_20594091.png";

interface AboutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AboutModal({ open, onOpenChange }: AboutModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">About TRECO</DialogTitle>
          <DialogDescription className="text-base">
            The Research Company - Beyond Stats and Words
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                Our Story
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a vision to transform complex challenges into
                innovative solutions, TRECO is a family of technically
                proficient and experienced professionals. Our team consists
                trained and qualified demographers; epidemiologists; 
                data analysts; and experienced report writers who can
                express technical issues in simple terms.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional research and development solutions that
                empower organizations providing cutting edge research services,
                facilitating innovation, use of Science and Technology, and
                creating a “learning” Environment for all our team members.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Our Approach
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We combine deep expertise with cutting-edge methodologies to
                provide tailored solutions. Our multidisciplinary team works
                closely with clients to understand their unique needs and
                deliver results that exceed expectations.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <img
              src={aboutImage}
              alt="TRECO Team"
              className="w-full h-auto rounded-lg shadow-xl"
            />
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-card rounded-lg">
                <div className="text-3xl font-bold text-primary">7+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="p-4 bg-card rounded-lg">
                <div className="text-3xl font-bold text-secondary">20+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="p-4 bg-card rounded-lg">
                <div className="text-3xl font-bold text-accent">20+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
