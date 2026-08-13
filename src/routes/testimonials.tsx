import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "../components/Layout";

export const Route = createFileRoute("/testimonials")({
  component: Testimonials,
  head: () => ({
    meta: [
      { title: "Testimonials | TRUST LINE INTERIORS" },
      { name: "description", content: "Read what clients say about their interiors by TRUST LINE INTERIORS." },
      { property: "og:title", content: "Testimonials | TRUST LINE INTERIORS" },
      { property: "og:description", content: "Read what clients say about their interiors by TRUST LINE INTERIORS." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const testimonials = [
  {
    id: 1,
    name: "Ananya Reddy",
    role: "Apartment owner, Madhapur",
    quote: "They transformed our 3BHK into a warm, magazine-worthy home. The woodwork quality is outstanding and the team was easy to work with.",
  },
  {
    id: 2,
    name: "Ramesh & Priya",
    role: "Villa owners, Gachibowli",
    quote: "From the first sketch to the final sofa placement, everything was handled professionally. Our villa finally feels like us.",
  },
  {
    id: 3,
    name: "Vikram Sharma",
    role: "Independent house owner, Kondapur",
    quote: "The custom wardrobe and wood panelling in our bedroom exceeded our expectations. Great eye for detail and honest pricing.",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    role: "Apartment owner, Jubilee Hills",
    quote: "We only wanted the kitchen and dining done, but they made it feel like a complete home. Highly recommend for woodwork.",
  },
  {
    id: 5,
    name: "Arjun & Meera",
    role: "Independent house owners, Manikonda",
    quote: "The home office they designed is now our favourite room. Built-in shelves, clean wiring, and a beautiful desk.",
  },
  {
    id: 6,
    name: "Divya Nair",
    role: "Apartment owner, Kukatpally",
    quote: "Friendly team, on-time delivery, and the dining furniture they custom made is the highlight of our home.",
  },
];

function Testimonials() {
  return (
    <Layout>
      <section className="container-tight py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Client stories
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from homeowners who trusted us with their spaces.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.id}
              className="rounded-xl border border-border bg-card p-6"
            >
              <p className="text-base leading-relaxed text-card-foreground">“{testimonial.quote}”</p>
              <footer className="mt-4 border-t border-border pt-4">
                <p className="font-heading text-sm font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </Layout>
  );
}
