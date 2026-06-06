import React from "react";

export default function About() {
  return (
    <div style={{ background: "#fff", color: "#000" }}>

      {/* HERO */}
      <section style={{ padding: "140px 0 80px", textAlign: "center" }}>
        <div className="container">

          <p style={{
            fontSize: "12px",
            letterSpacing: "0.35em",
            color: "#777",
            textTransform: "uppercase",
          }}>
            About Our Brand
          </p>

          <h1 style={{
            fontSize: "clamp(3rem,6vw,5rem)",
            fontWeight: "300",
            marginTop: "20px",
          }}>
            Crafted With Purpose
          </h1>

          <p style={{
            maxWidth: "750px",
            margin: "25px auto 0",
            color: "#666",
            lineHeight: "1.9",
            fontSize: "15px",
          }}>
            We design timeless jewelry that reflects elegance,
            simplicity, and modern luxury. Every piece is crafted
            with precision, emotion, and attention to detail.
          </p>

        </div>
      </section>

      {/* STORY SECTION */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row align-items-center g-5">

            {/* LEFT TEXT */}
            <div className="col-lg-6">
              <p style={{
                fontSize: "12px",
                letterSpacing: "0.3em",
                color: "#777",
                textTransform: "uppercase",
              }}>
                Our Story
              </p>

              <h2 style={{
                fontWeight: "300",
                marginTop: "15px",
                fontSize: "2.5rem",
              }}>
                Minimal. Elegant. Timeless.
              </h2>

              <p style={{
                marginTop: "20px",
                color: "#666",
                lineHeight: "1.9",
              }}>
                Founded with a vision to redefine modern luxury,
                our brand focuses on purity of design and
                craftsmanship. We believe true elegance lies in
                simplicity.
              </p>

              <p style={{
                marginTop: "15px",
                color: "#666",
                lineHeight: "1.9",
              }}>
                Every collection is thoughtfully created to
                complement everyday life while maintaining a
                refined aesthetic.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200"
                alt="about"
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                  border: "1px solid #eee",
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: "80px 0", background: "#fafafa" }}>
        <div className="container text-center">

          <h2 style={{
            fontWeight: "300",
            marginBottom: "50px",
          }}>
            Our Values
          </h2>

          <div className="row g-4">

            <div className="col-md-4">
              <h4>Craftsmanship</h4>
              <p style={{ color: "#666", marginTop: "10px" }}>
                Every detail is refined with precision and care.
              </p>
            </div>

            <div className="col-md-4">
              <h4>Minimalism</h4>
              <p style={{ color: "#666", marginTop: "10px" }}>
                We believe less is more in true luxury design.
              </p>
            </div>

            <div className="col-md-4">
              <h4>Timelessness</h4>
              <p style={{ color: "#666", marginTop: "10px" }}>
                Our designs stay relevant beyond trends.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 0", textAlign: "center" }}>
        <div className="container">

          <h2 style={{
            fontWeight: "300",
            fontSize: "2.5rem",
          }}>
            Experience Modern Luxury
          </h2>

          <p style={{
            maxWidth: "600px",
            margin: "20px auto",
            color: "#666",
          }}>
            Discover collections designed for elegance,
            simplicity, and everyday sophistication.
          </p>

          <button
            style={{
              marginTop: "20px",
              padding: "14px 40px",
              border: "1px solid #000",
              background: "#000",
              color: "#fff",
              fontSize: "12px",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
            onClick={() => window.location.href = "/collection"}
          >
            Explore Collection
          </button>

        </div>
      </section>

    </div>
  );
}