import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "../components/Layout";

export const Route = createFileRoute("/furniture")({
  component: Furniture,
  head: () => ({
    meta: [
      { title: "Furniture | TRUST LINE INTERIORS" },
      { name: "description", content: "Custom and curated furniture for apartments, villas, and independent homes." },
      { property: "og:title", content: "Furniture | TRUST LINE INTERIORS" },
      { property: "og:description", content: "Custom and curated furniture for apartments, villas, and independent homes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

import furniture1 from "../assets/furniture-1.jpg";
import furniture2 from "../assets/furniture-2.jpg";
import furniture3 from "../assets/furniture-3.jpg";
import furniture4 from "../assets/furniture-4.jpg";

const furnitureItems = [
  {
    id: 1,
    title: "Dining table set",
    description: "Solid wood dining table with six chairs, finished in warm walnut.",
    image: furniture1,
    price: "₹1,85,000",
  },
  {
    id: 2,
    title: "Linen sofa set",
    description: "Three-seater sofa with two armchairs and a solid wood frame.",
    image: furniture2,
    price: "₹2,40,000",
  },
  {
    id: 3,
    title: "Wooden bed frame",
    description: "Minimalist platform bed with matching nightstands.",
    image: furniture3,
    price: "₹1,55,000",
  },
  {
    id: 4,
    title: "Sculpted console",
    description: "Statement console table for entryways and living rooms.",
    image: furniture4,
    price: "₹68,000",
  },
];

function Furniture() {
  return (
    <Layout>
      <section className="container-tight py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Furniture
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Custom and curated pieces designed to match your interiors. From dining tables to sofas, each piece is built with solid wood and thoughtful detailing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {furnitureItems.map((item) => (
            <div key={item.id} className="group overflow-hidden rounded-xl border border-border bg-card">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={800}
                  height={600}
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-card-foreground">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                <p className="mt-3 text-base font-semibold text-foreground">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-secondary p-8 text-center md:p-12">
          <h2 className="font-heading text-2xl font-semibold text-foreground">Need custom furniture?</h2>
          <p className="mt-2 text-muted-foreground">
            We can design bespoke pieces to match your exact dimensions, wood finish, and style.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Request custom piece
          </a>
        </div>
      </section>
    </Layout>
  );
}
