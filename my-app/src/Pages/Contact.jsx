import React from "react";

export default function Contact() {
  return (
    <div className="bg-white text-dark">

      {/* HERO */}
      <section className="text-center" style={{ padding: "160px 0 80px" }}>
        <div className="container">

          <p className="text-uppercase text-secondary small mb-3"
            style={{ letterSpacing: "0.4em", fontSize: "11px" }}>
            Get in Touch
          </p>

          <h1 className="display-4 fw-light mb-4"
            style={{ letterSpacing: "-0.03em" }}>
            Let’s Create Something Timeless
          </h1>

          <p className="text-muted mx-auto"
            style={{ maxWidth: "680px", lineHeight: "1.9", fontSize: "15px" }}>
            Whether it’s a collaboration, custom request, or just a conversation —
            we’re always open to meaningful connections.
          </p>

        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="pb-5">
        <div className="container">
          <div className="row g-4 text-center">

            {[
              { title: "Email", value: "support@fabette.com" },
              { title: "Phone", value: "+91 98765 43210" },
              {
                title: "Studio",
                value: "Fabette Studio\nMumbai, India"
              }
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <div
                  className="p-5 h-100"
                  style={{
                    border: "1px solid #eee",
                    borderRadius: "16px",
                    background: "#fafafa",
                    transition: "0.3s ease",
                  }}
                >
                  <h6
                    className="text-uppercase text-secondary mb-3"
                    style={{ letterSpacing: "0.25em", fontSize: "11px" }}
                  >
                    {item.title}
                  </h6>

                  <p className="mb-0 text-dark" style={{ whiteSpace: "pre-line" }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-5">
        <div className="container" style={{ maxWidth: "720px" }}>

          <div
            className="p-5"
            style={{
              border: "1px solid #eee",
              borderRadius: "18px",
              background: "#ffffff",
              boxShadow: "0 10px 30px rgba(0,0,0,0.04)"
            }}
          >

            <h3 className="text-center fw-light mb-4"
              style={{ letterSpacing: "-0.02em" }}>
              Send a Message
            </h3>

            <p className="text-center text-muted mb-5" style={{ fontSize: "14px" }}>
              We usually respond within 24 hours
            </p>

            <form className="row g-3">

              <div className="col-md-6">
                <input
                  className="form-control py-3"
                  placeholder="Your Name"
                  style={{
                    borderRadius: "10px",
                    border: "1px solid #eaeaea",
                    boxShadow: "none"
                  }}
                />
              </div>

              <div className="col-md-6">
                <input
                  className="form-control py-3"
                  placeholder="Your Email"
                  style={{
                    borderRadius: "10px",
                    border: "1px solid #eaeaea",
                    boxShadow: "none"
                  }}
                />
              </div>

              <div className="col-12">
                <textarea
                  rows="6"
                  className="form-control py-3"
                  placeholder="Your Message"
                  style={{
                    borderRadius: "10px",
                    border: "1px solid #eaeaea",
                    boxShadow: "none",
                    resize: "none"
                  }}
                />
              </div>

              <div className="col-12 text-center">
                <button
                  className="btn px-5 py-3 mt-2"
                  style={{
                    background: "#111",
                    color: "#fff",
                    borderRadius: "999px",
                    letterSpacing: "0.2em",
                    fontSize: "12px"
                  }}
                >
                  SEND MESSAGE
                </button>
              </div>

            </form>

          </div>

        </div>
      </section>

    </div>
  );
}