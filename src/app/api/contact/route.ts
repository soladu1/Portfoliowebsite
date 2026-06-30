import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, subject, message } = body as {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  // Basic validation
  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  // -------------------------------------------------------------------
  // TODO: Integrate a real email service here.
  // Options:
  //   - Resend (https://resend.com)
  //   - Nodemailer with SMTP
  //   - SendGrid / Mailgun
  //
  // Example with Resend:
  //   const { Resend } = await import("resend");
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "portfolio@yourdomain.com",
  //     to:   "hanaweldetnsae73@gmail.com",
  //     subject: `[Portfolio Contact] ${subject}`,
  //     text: `From: ${name} <${email}>\n\n${message}`,
  //   });
  // -------------------------------------------------------------------

  console.log("Contact form submission:", { name, email, subject, message });

  return NextResponse.json({ success: true }, { status: 200 });
}
