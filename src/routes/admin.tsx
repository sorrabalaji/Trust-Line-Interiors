import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { getEnquiries } from "../lib/enquiries";

export const Route = createFileRoute("/admin")({
  component: AdminEnquiries,
  head: () => ({
    meta: [{ title: "Admin Enquiries | TRUST LINE INTERIORS" }],
  }),
});

interface EnquiryItem {
  id: string;
  name: string;
  phone: string;
  email: string;
  project: string;
  message: string;
  status: string;
  createdAt: string;
}

function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  async function fetchEnquiries() {
    setLoading(true);
    setError(null);
    try {
      const res = await getEnquiries();
      if (res.success && res.enquiries) {
        setEnquiries(res.enquiries);
      } else {
        setError(res.error || "Failed to load enquiries from database");
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error connecting to server");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const filteredEnquiries = enquiries.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.message.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Layout>
      <section className="container-tight py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              MongoDB Stored Enquiries
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Manage client inquiries, consultation requests, and leads stored in MongoDB.
            </p>
          </div>
          <button
            onClick={fetchEnquiries}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Refresh data
          </button>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <input
            type="text"
            placeholder="Search by name, phone, email, home type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-96 rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
          />
          <div className="text-xs text-muted-foreground">
            Total records: <span className="font-semibold text-foreground">{filteredEnquiries.length}</span>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-border bg-card overflow-hidden shadow-sm">
          {loading ? (
            <div className="p-12 text-center text-muted-foreground">
              Connecting to MongoDB and fetching enquiries...
            </div>
          ) : error ? (
            <div className="p-8 text-center text-destructive">
              <p className="font-semibold">Database Connection Warning</p>
              <p className="mt-1 text-sm">{error}</p>
              <button
                onClick={fetchEnquiries}
                className="mt-4 rounded-md border border-border px-3 py-1.5 text-xs text-foreground hover:bg-secondary"
              >
                Try Again
              </button>
            </div>
          ) : filteredEnquiries.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground">
              {searchTerm ? "No matching enquiries found." : "No enquiries stored in MongoDB yet. Submit a test enquiry on the Contact page!"}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-secondary/50 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border">
                  <tr>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Phone</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Home Type</th>
                    <th className="px-4 py-3">Message</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredEnquiries.map((item) => (
                    <tr key={item.id} className="hover:bg-secondary/20 transition-colors">
                      <td className="px-4 py-3 text-xs text-muted-foreground whitespace-nowrap">
                        {new Date(item.createdAt).toLocaleDateString()} {new Date(item.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </td>
                      <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">{item.name}</td>
                      <td className="px-4 py-3 text-foreground whitespace-nowrap font-mono text-xs">{item.phone}</td>
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{item.email || "—"}</td>
                      <td className="px-4 py-3 text-foreground whitespace-nowrap">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                          {item.project}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground max-w-xs truncate">{item.message || "—"}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
