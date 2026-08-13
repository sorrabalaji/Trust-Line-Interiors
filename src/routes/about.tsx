import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "../components/Layout";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Us | TRUST LINE INTERIORS" },
      { name: "description", content: "Meet the interior design studio behind warm, wood-forward apartments, villas, and independent homes." },
      { property: "og:title", content: "About Us | TRUST LINE INTERIORS" },
      { property: "og:description", content: "Meet the interior design studio behind warm, wood-forward apartments, villas, and independent homes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

import aboutStudio from "../assets/about-studio.jpg";

function About() {
  return (
    <Layout>
      <section className="container-tight py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            About TRUST LINE INTERIORS
          </h1>
          <p className="mt-4 text-lg italic text-primary">
            where trust meets passion
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            We believe interiors should feel like home the moment you walk in. Our studio designs warm, wood-forward spaces for apartments, villas, and independent houses across the city.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <img
            src={aboutStudio}
            alt="Wood and Space design studio with material samples and mood boards"
            className="aspect-[4/3] w-full rounded-xl object-cover"
            width={800}
            height={600}
            loading="lazy"
          />
          <div className="space-y-6">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground">Craft-first approach</h2>
              <p className="mt-2 text-muted-foreground">
                From custom woodwork to furniture selection, every detail is chosen for quality, warmth, and longevity. We partner with skilled carpenters and fabricators to bring designs to life.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground">Spaces that breathe</h2>
              <p className="mt-2 text-muted-foreground">
                Whether it is a compact apartment or a sprawling villa, we plan layouts that maximize natural light, airflow, and everyday comfort.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground">End-to-end service</h2>
              <p className="mt-2 text-muted-foreground">
                We handle everything from concept and 3D visualisation to site execution and final styling, so you can enjoy the process without the stress.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { number: "120+", label: "Projects completed" },
            { number: "8+", label: "Years of experience" },
            { number: "35+", label: "Carpentry partners" },
            { number: "100%", label: "Client satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl bg-secondary p-6 text-center">
              <p className="font-heading text-3xl font-semibold text-foreground">{stat.number}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
