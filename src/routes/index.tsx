import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "../components/Layout";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "TRUST LINE INTERIORS | Warm, Wood-Forward Interiors" },
      { name: "description", content: "Interior design studio for apartments, villas, and independent houses. Custom woodwork and furniture in warm, inviting spaces." },
      { property: "og:title", content: "TRUST LINE INTERIORS | Warm, Wood-Forward Interiors" },
      { property: "og:description", content: "Interior design studio for apartments, villas, and independent houses. Custom woodwork and furniture in warm, inviting spaces." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

import heroInterior from "../assets/hero-interior.jpg";
import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";

const featuredProjects = [
  {
    id: 1,
    title: "Modern apartment living",
    location: "Madhapur",
    image: project1,
  },
  {
    id: 2,
    title: "Mediterranean villa",
    location: "Gachibowli",
    image: project2,
  },
  {
    id: 3,
    title: "Independent house bedroom",
    location: "Kondapur",
    image: project3,
  },
];

const services = [
  "Full home interiors",
  "Custom woodwork",
  "Bespoke furniture",
  "Material consultancy",
];

function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="container-tight py-12 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium uppercase tracking-wide text-primary">TRUST LINE INTERIORS</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Warm interiors rooted in wood and craft
            </h1>
            <p className="mt-6 text-lg italic text-primary">
              where trust meets passion
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              We design and execute wood-forward interiors for apartments, villas, and independent houses — complete with custom furniture that feels like home.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View projects
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Get a quote
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src={heroInterior}
              alt="Warm minimalist living room with natural wood furniture and large windows"
              className="w-full rounded-2xl object-cover shadow-lg"
              width={1440}
              height={912}
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-border bg-secondary">
        <div className="container-tight py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              What we do
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              End-to-end interior solutions for homes that value warmth and quality.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <h3 className="font-heading text-lg font-semibold text-card-foreground">{service}</h3>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
            >
              See all services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="container-tight py-16 md:py-24">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Featured projects
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              A glimpse of homes we have designed and built.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            View all projects
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
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
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="border-t border-border bg-secondary">
        <div className="container-tight py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Loved by homeowners
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              “They transformed our 3BHK into a warm, magazine-worthy home. The woodwork quality is outstanding and the team was easy to work with.”
            </p>
            <p className="mt-4 font-heading text-sm font-semibold text-foreground">Ananya Reddy</p>
            <p className="text-xs text-muted-foreground">Apartment owner, Madhapur</p>
            <div className="mt-8">
              <Link
                to="/testimonials"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
              >
                Read more stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-tight py-16 md:py-24">
        <div className="rounded-2xl bg-primary px-6 py-12 text-center md:px-12 md:py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-primary-foreground md:text-4xl">
            Ready to design your home?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Share your space with us and we will help you plan interiors that feel warm, personal, and timeless.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-background px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
          >
            Book free consultation
          </Link>
        </div>
      </section>
    </Layout>
  );
}
