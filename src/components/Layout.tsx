import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/furniture", label: "Furniture" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/admin", label: "Admin" },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="container-tight flex h-16 items-center justify-between">
        <Link to="/" className="flex flex-col items-start">
          <span className="font-heading text-xl font-semibold tracking-tight text-foreground">
            TRUST LINE INTERIORS
          </span>
          <span className="text-xs font-medium italic tracking-wide text-primary">
            where trust meets passion
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-primary" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:inline-flex"
        >
          Get a quote
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-tight flex flex-col gap-2 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeProps={{ className: "text-primary" }}
                className="py-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              onClick={() => setOpen(false)}
            >
              Get a quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container-tight py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link to="/" className="flex flex-col items-start">
              <span className="font-heading text-2xl font-semibold text-foreground">
                TRUST LINE INTERIORS
              </span>
              <span className="mt-1 text-xs font-medium italic tracking-wide text-primary">
                where trust meets passion
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Interior design studio crafting warm, wood-forward spaces for apartments, villas, and independent homes.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold text-foreground">Explore</h3>
            <nav className="mt-4 grid gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold text-foreground">Contact</h3>
            <address className="mt-4 not-italic text-sm text-muted-foreground">
              <p>sorrabalaji@gmail.com</p>
              <p className="mt-1">9550032499</p>
              <p className="mt-1">Kukatpally, Hyderabad</p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} TRUST LINE INTERIORS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
