import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Layout } from "../components/Layout";
import { submitEnquiry } from "../lib/enquiries";

const ENQUIRY_PHONE = "919550032499";
const ENQUIRY_EMAIL = "sorrabalaji@gmail.com";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact | TRUST LINE INTERIORS" },
      { name: "description", content: "Book a free consultation with TRUST LINE INTERIORS for your apartment, villa, or independent home project." },
      { property: "og:title", content: "Contact | TRUST LINE INTERIORS" },
      { property: "og:description", content: "Book a free consultation with TRUST LINE INTERIORS for your apartment, villa, or independent home project." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [waLink, setWaLink] = useState("");
  const [waTarget, setWaTarget] = useState<"_blank" | "_top">("_blank");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dbSaved, setDbSaved] = useState(false);

  function getFormData(form: HTMLFormElement) {
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    return {
      name: get("name"),
      phone: get("phone"),
      email: get("email"),
      project: get("project") || "Apartment interior",
      message: get("message"),
      text: [
        "New enquiry - TRUST LINE INTERIORS",
        `Name: ${get("name")}`,
        `Phone: ${get("phone")}`,
        `Email: ${get("email")}`,
        `Home type: ${get("project")}`,
        `Message: ${get("message")}`,
      ].join("\n"),
    };
  }

  function openLink(link: string, target: string) {
    const windowFeatures = target === "_blank" ? "noopener,noreferrer" : undefined;
    const newWindow = window.open(link, target, windowFeatures);
    if (!newWindow) {
      window.location.href = link;
    }
  }

  async function saveToDb(payload: { name: string; phone: string; email?: string; project: string; message?: string }) {
    try {
      const res = await submitEnquiry({ data: payload });
      if (res && res.success) {
        setDbSaved(true);
      }
    } catch (err) {
      console.error("Error saving enquiry to MongoDB:", err);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, phone, email, project, message, text } = getFormData(form);
    if (!name || !phone) return;

    setIsSubmitting(true);
    await saveToDb({ name, phone, email, project, message });
    setIsSubmitting(false);

    const link = `https://wa.me/${ENQUIRY_PHONE}?text=${encodeURIComponent(text)}`;
    setWaLink(link);
    const inPreviewFrame = window.self !== window.top;
    const target = inPreviewFrame ? "_top" : "_blank";
    setWaTarget(target);

    // WhatsApp blocks embedded pages. In preview, _top exits the frame;
    // on the published site, _blank keeps the website open.
    openLink(link, target);
    setSent(true);
  }

  async function sendByEmail(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.closest("form");
    if (!form) return;
    const { name, phone, email, project, message, text } = getFormData(form);
    if (!name || !phone) return;

    setIsSubmitting(true);
    await saveToDb({ name, phone, email, project, message });
    setIsSubmitting(false);

    const mailto = `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(
      "New enquiry - TRUST LINE INTERIORS",
    )}&body=${encodeURIComponent(text)}`;
    openLink(mailto, "_self");
    setSent(true);
  }


  return (
    <Layout>
      <section className="container-tight py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Start your project
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Share your name, phone number, and home type — we respond within 10 to 15 minutes.
          </p>
        </div>


        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">Contact details</h2>
              <address className="mt-4 not-italic text-muted-foreground">
                <p className="font-medium text-foreground">Email</p>
                <p className="mt-1">sorrabalaji@gmail.com</p>
                <p className="mt-4 font-medium text-foreground">Phone</p>
                <p className="mt-1">9550032499</p>
                <p className="mt-4 font-medium text-foreground">Studio</p>
                <p className="mt-1">Kukatpally, Hyderabad</p>
              </address>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">Working hours</h2>
              <p className="mt-2 text-muted-foreground">Monday to Saturday: 10:00 AM - 7:00 PM</p>
              <p className="text-muted-foreground">Sunday: By appointment</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="phone" className="text-sm font-medium text-card-foreground">
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                  Email (optional)
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="project" className="text-sm font-medium text-card-foreground">
                  Home type
                </label>
                <select
                  id="project"
                  name="project"
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                >
                  <option>Apartment interior</option>
                  <option>Villa interior</option>
                  <option>Independent house</option>
                  <option>Furniture only</option>
                  <option>Woodwork</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
              >
                {isSubmitting ? "Saving & opening WhatsApp..." : "Send enquiry on WhatsApp"}
              </button>
              <button
                type="button"
                onClick={sendByEmail}
                disabled={isSubmitting}
                className="rounded-md border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary disabled:opacity-50"
              >
                {isSubmitting ? "Saving & opening Email..." : "Send enquiry by email"}
              </button>
              <p className="text-sm text-muted-foreground">
                Submissions are stored safely in our database, and open WhatsApp or your email app with a prefilled message.
              </p>
              {dbSaved && (
                <div className="rounded-md bg-emerald-500/10 p-3 text-xs font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  ✓ Enquiry successfully saved to MongoDB database!
                </div>
              )}
              {sent && (
                <div className="text-sm font-medium text-primary space-y-1">
                  <p>
                    Thanks! The enquiry window is open — please send it from WhatsApp or your mail app.
                    We reply within 10 to 15 minutes.
                  </p>
                  {waLink && (
                    <p className="font-normal text-muted-foreground">
                      WhatsApp didn't open?{" "}
                      <a
                        href={waLink}
                        target={waTarget}
                        rel="noopener noreferrer"
                        className="font-medium text-primary underline underline-offset-4"
                      >
                        Tap here to open it
                      </a>
                      .
                    </p>
                  )}
                </div>
              )}
            </div>
          </form>

        </div>
      </section>
    </Layout>
  );
}
