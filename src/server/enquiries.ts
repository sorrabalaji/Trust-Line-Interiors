import { createServerFn } from "@tanstack/react-start";
import { connectToDatabase } from "../lib/db";
import { Enquiry } from "../models/Enquiry";

export interface CreateEnquiryInput {
  name: string;
  phone: string;
  email?: string;
  project: string;
  message?: string;
}

export const submitEnquiry = createServerFn({ method: "POST" })
  .validator((data: CreateEnquiryInput) => data)
  .handler(async ({ data }) => {
    try {
      await connectToDatabase();
      const enquiry = await Enquiry.create({
        name: data.name,
        phone: data.phone,
        email: data.email || "",
        project: data.project,
        message: data.message || "",
      });

      return {
        success: true,
        id: String(enquiry._id),
        message: "Enquiry saved to MongoDB database successfully",
      };
    } catch (error: unknown) {
      console.error("Failed to save enquiry to MongoDB:", error);
      const errorMessage = error instanceof Error ? error.message : "Database error";
      return {
        success: false,
        error: errorMessage,
      };
    }
  });

export const getEnquiries = createServerFn({ method: "GET" }).handler(async () => {
  try {
    await connectToDatabase();
    const enquiries = await Enquiry.find().sort({ createdAt: -1 }).lean();
    return {
      success: true,
      enquiries: enquiries.map((item) => ({
        id: String(item._id),
        name: item.name,
        phone: item.phone,
        email: item.email || "",
        project: item.project,
        message: item.message || "",
        status: item.status,
        createdAt: item.createdAt ? new Date(item.createdAt).toISOString() : new Date().toISOString(),
      })),
    };
  } catch (error: unknown) {
    console.error("Failed to fetch enquiries from MongoDB:", error);
    const errorMessage = error instanceof Error ? error.message : "Database error";
    return {
      success: false,
      error: errorMessage,
      enquiries: [],
    };
  }
});
