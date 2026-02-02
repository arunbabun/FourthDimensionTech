import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY) 
  : null;

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      console.log("Received contact request body:", req.body);
      const data = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(data);

      if (resend) {
        try {
          await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "hello@fourthdimensiontech.net",
            subject: `New Inquiry from ${data.name} (${data.company})`,
            html: `
              <h3>New Contact Form Submission</h3>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Company:</strong> ${data.company}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Message:</strong></p>
              <p>${data.message}</p>
            `,
          });
        } catch (emailError) {
          console.error("Failed to send email:", emailError);
          // We still return 201 because the inquiry was saved to the database
        }
      }

      res.status(201).json(inquiry);
    } catch (error: any) {
      console.error("Inquiry error:", error);
      res.status(400).json({ message: error.message || "Something went wrong" });
    }
  });

  return httpServer;
}
