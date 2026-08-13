import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "../components/Layout";

export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({
    meta: [
      { title: "Projects | TRUST LINE INTERIORS" },
      { name: "description", content: "Browse our portfolio of wood-forward interiors for apartments, villas, and independent homes." },
      { property: "og:title", content: "Projects | TRUST LINE INTERIORS" },
      { property: "og:description", content: "Browse our portfolio of wood-forward interiors for apartments, villas, and independent homes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4.jpg";
import project5 from "../assets/project-5.jpg";
import project6 from "../assets/project-6.jpg";

const projects = [
  {
    id: 1,
    title: "Modern apartment living",
    location: "Apartment, Madhapur",
    description: "Warm wood panelling and soft neutrals turn a city apartment into a calm retreat.",
    image: project1,
  },
  {
    id: 2,
    title: "Mediterranean villa",
    location: "Villa, Gachibowli",
    description: "Exposed wooden beams and vaulted ceilings create a grand yet inviting living space.",
    image: project2,
  },
  {
    id: 3,
    title: "Independent house bedroom",
    location: "Independent house, Kondapur",
    description: "Custom wardrobe and fluted wood accent wall bring warmth to the master bedroom.",
    image: project3,
  },
  {
    id: 4,
    title: "Contemporary kitchen",
    location: "Villa, Jubilee Hills",
    description: "Walnut cabinetry and stone finishes make this kitchen the heart of the home.",
    image: project4,
  },
  {
    id: 5,
    title: "Dining room refresh",
    location: "Apartment, Kukatpally",
    description: "A solid wood dining setup designed for everyday meals and dinner parties.",
    image: project5,
  },
  {
    id: 6,
    title: "Home office nook",
    location: "Independent house, Manikonda",
    description: "Built-in wood shelving and a wrap-around desk create a productive corner.",
    image: project6,
  },
];

function Projects() {
  return (
    <Layout>
      <section className="container-tight py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Our projects
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of interiors we have designed and executed for apartments, villas, and independent homes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={800}
                  height={600}
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-primary">{project.location}</p>
                <h3 className="mt-1 font-heading text-xl font-semibold text-card-foreground">{project.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
