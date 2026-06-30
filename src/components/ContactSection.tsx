"use client";

import { useState, FormEvent } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name:    data.get("name"),
          email:   data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="container section-title">
        <h2>Contact</h2>
      </div>

      <div className="container">
        <div className="row gy-4">
          {/* Info column */}
          <div className="col-lg-5">
            <div className="info-wrap">
              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Axum, Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+251987121253</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>hanaweldetnsae73@gmail.com</p>
                </div>
              </div>

              <iframe
                src="https://www.google.com/maps?q=14.1214,38.7245&z=14&output=embed"
                width="100%"
                height="270"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location map"
              ></iframe>
            </div>
          </div>

          {/* Form column */}
          <div className="col-lg-7">
            <div className="contact-form">
              {status === "loading" && (
                <div className="status-message loading">Sending…</div>
              )}
              {status === "success" && (
                <div className="status-message success">
                  Your message has been sent. Thank you!
                </div>
              )}
              {status === "error" && (
                <div className="status-message error">
                  Something went wrong. Please try again later.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name-field">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name-field"
                        required
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email-field">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email-field"
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="subject-field">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        id="subject-field"
                        required
                        placeholder="Enter subject"
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="message-field">Message</label>
                      <textarea
                        name="message"
                        rows={10}
                        id="message-field"
                        required
                        placeholder="Write your message here…"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-md-12 text-center">
                    <button type="submit" disabled={status === "loading"}>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
