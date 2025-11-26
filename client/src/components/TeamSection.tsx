import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

import teamMember1 from "@assets/images/1000379614.jpg";
import teamMember2 from "@assets/images/1000379613.jpg";
import teamMember3 from "@assets/images/1000379648.jpg";
import teamMember4 from "@assets/images/1000029123.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Lungelo Bhembe",
    role: "Director",
    expertise: "Lead Consultant",
    image: teamMember1,
    initials: "LB",
  },
  {
    id: 2,
    name: "Zinhle Bhembe",
    role: "Financial Manager",
    expertise: "Administration",
    image: teamMember2,
    initials: "ZB",
  },
  {
    id: 3,
    name: "Vuyani S Dlamini",
    role: "Research Associate",
    expertise: "Project Management",
    image: teamMember3,
    initials: "SD",
  },
  {
    id: 4,
    name: "Mlindisi L Mhlanga",
    role: "IT Officer",
    expertise: "Programming & Systems",
    image: teamMember4,
    initials: "MM",
  },
  
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-background" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Expert Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the professionals driving innovation and excellence at TRECO
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="p-6 hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-2xl"
              data-testid={`card-team-member-${member.id}`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <Avatar className="h-32 w-32 border-4 border-primary/10">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-2">
                    {member.role}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {member.expertise}
                  </Badge>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    data-testid={`button-linkedin-${member.id}`}
                    className="hover-elevate active-elevate-2"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    data-testid={`button-email-${member.id}`}
                    className="hover-elevate active-elevate-2"
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
