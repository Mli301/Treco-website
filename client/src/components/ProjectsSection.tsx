import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

import project1 from "@assets/images/ENYC logo.jpg";
import project2 from "@assets/images/SPORT-YOUTH-header (2).png";
import project3 from "@assets/images/School feeding.jpg";
import project4 from "@assets/images/WASH.jpg";
import project5 from "@assets/images/Treco.png";
import project6 from "@assets/images/Cango.png";
import project7 from "@assets/images/Treco.png";
import project8 from "@assets/images/Youth.png";

const projects = [
  {
    id: 1,
    title: "Development of the National Youth Coordination Framework",
    category: "Development",
    description:
      "Strengthening Youth Coordination through the Inter-Ministerial Committee. This will assist MSCY in enhancing youth coordination at both central and grassroots levels through the inter-ministerial committee.",
    image: project1,
    year: "2025",
  },
  {
    id: 2,
    title: "MoSCYA Strategic Plan",
    category: "Good governance",
    description:
      "Our main role was facilitating the mapping of the Ministry’s strategic Direction for the next 5 years as well as assisting the ministry devise an effective way of ensuring an integrated approach of implementation of its mandate.",
    image: project2,
    year: "2024",
  },
  {
    id: 3,
    title: "Evaluation of The School Feeding Initiative Project",
    category: "Food Security",
    description:
      "State-of-the-art research facility supporting breakthrough scientific innovations.",
    image: project3,
    year: "2023",
  },
  {
    id: 4,
    title: "Lubombo Sustainable Rural Water Supply, Sanitation & Access",
    category: "Food Security",
    description:
      "Upscaling of a Private Public Partnership Model in Rural Areas - to establish whether interventions have increased people’s access to potable water.",
    image: project4,
    year: "2023",
  },
  {
    id: 5,
    title: "Evaluation of the Lets Talk Campaign for addressing Early and Unintended Pregnancy among in school adolescent girls and young women",
    category: "Research and Education for Health & Development",
    description:
      "Increase accurate knowledge of sexual and reproductive health (SRH), contraception methods, and consequences of early pregnancy among in-school adolescent girls and young women by at least 30% within 12 months of the campaign.",
    image: project5,
    year: "2023",
  },
  {
    id: 6,
    title: "Evaluation of the Governance and Political Participation Pillar of the Eswatini National Development Strategy",
    category: "Governance",
    description:
      "Measure progress toward achieving targets related to governance quality, transparency, accountability, and citizen participation. Assess institutional performance, including the effectiveness of public administration, decentralization, and rule-of-law institutions. Determine the extent and quality of political participation, especially by women, youth, minorities, and marginalized groups.",
    image: project6,
    year: "2022",
  },
  {
    id: 7,
    title: "Evaluation of National Life Skills Education Programme",
    category: "Research and Evaluation",
    description:
      "We designed this research study and also compiled the final report including presenting the findings to national LSE stakeholders.",
    image: project7,
    year: "2022",
  },
  {
    id: 8,
    title: "National Youth Policy review and Development",
    category: "Good governance",
    description:
      "our role was mainly the design of the methodology for the development of robust national youth policy, stakeholder engagement and consultations as well as drafting and finalizing the Policy.",
    image: project8,
    year: "2020",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-card" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Projects Completed
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our portfolio of successful projects across diverse sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-2xl group"
              data-testid={`card-project-${project.id}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary">{project.year}</Badge>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <Badge className="text-xs">{project.category}</Badge>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-lg font-semibold text-foreground leading-tight">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
