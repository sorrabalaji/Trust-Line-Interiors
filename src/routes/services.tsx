import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "../components/Layout";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services | TRUST LINE INTERIORS" },
      { name: "description", content: "Interior design services for apartments, villas, independent houses, and custom furniture." },
      { property: "og:title", content: "Services | TRUST LINE INTERIORS" },
      { property: "og:description", content: "Interior design services for apartments, villas, independent houses, and custom furniture." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

import { Home, Sofa, Palette, Ruler, TreePine, Hammer } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Full home interiors",
    description: "Complete design and execution for apartments, villas, and independent houses from concept to handover.",
  },
  {
    icon: TreePine,
    title: "Woodwork & panelling",
    description: "Custom wardrobes, TV units, wall panelling, ceilings, and partitions in premium wood finishes.",
  },
  {
    icon: Sofa,
    title: "Furniture design",
    description: "Bespoke sofas, beds, dining sets, and accent pieces built to match your space and style.",
  },
  {
    icon: Palette,
    title: "Material & colour consultancy",
    description: "Curated palettes for paints, veneers, tiles, fabrics, and hardware that feel cohesive.",
  },
  {
    icon: Ruler,
    title: "Space planning",
    description: "Smart layouts that improve circulation, storage, and natural light for every room.",
  },
  {
    icon: Hammer,
    title: "Site supervision",
    description: "Regular site visits and quality checks to make sure the finished space matches the design.",
  },
];

function Services() {
  return (
    <Layout>
      <section className="container-tight py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to design, build, and style your space under one roof.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:bg-secondary"
            >
              <div className="inline-flex rounded-lg bg-secondary p-3 text-primary">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading text-xl font-semibold text-card-foreground">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl bg-secondary p-8 text-center md:p-12">
          <h2 className="font-heading text-2xl font-semibold text-foreground">Not sure where to start?</h2>
          <p className="mt-2 text-muted-foreground">
            Book a free consultation and we will help you plan your project step by step.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book consultation
          </a>
        </div>
      </section>
    </Layout>
  );
}
