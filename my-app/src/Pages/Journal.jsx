import React from "react";

export default function Journal() {
  return (
    <div style={{ background: "#fff", color: "#000" }}>

      {/* HERO */}
      <section style={{ padding: "140px 0 80px", textAlign: "center" }}>
        <div className="container">

          <p style={{
            fontSize: "11px",
            letterSpacing: "0.35em",
            color: "#777",
            textTransform: "uppercase",
          }}>
            Stories & Journal
          </p>

          <h1 style={{
            fontSize: "clamp(3rem,6vw,5rem)",
            fontWeight: "300",
            marginTop: "20px",
          }}>
            Editorial Stories
          </h1>

          <p style={{
            maxWidth: "700px",
            margin: "25px auto 0",
            color: "#666",
            lineHeight: "1.9",
            fontSize: "15px",
          }}>
            A curated collection of stories, inspiration, and insights
            from the world of luxury craftsmanship and modern design.
          </p>

        </div>
      </section>

      {/* FEATURED STORY */}
      <section style={{ padding: "0 0 80px" }}>
        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200"
                alt="featured"
                style={{
                  width: "100%",
                  height: "420px",
                  objectFit: "cover",
                  border: "1px solid #eee",
                }}
              />
            </div>

            <div className="col-lg-6">

              <p style={{
                fontSize: "11px",
                letterSpacing: "0.3em",
                color: "#777",
                textTransform: "uppercase",
              }}>
                Featured Story
              </p>

              <h2 style={{
                fontWeight: "300",
                marginTop: "15px",
              }}>
                The Art of Modern Jewelry Design
              </h2>

              <p style={{
                color: "#666",
                lineHeight: "1.9",
                marginTop: "20px",
              }}>
                Modern jewelry is not just decoration — it is emotion,
                architecture, and craftsmanship combined into wearable art.
              </p>

              <button
                style={{
                  marginTop: "20px",
                  border: "1px solid #000",
                  background: "#000",
                  color: "#fff",
                  padding: "12px 28px",
                  fontSize: "12px",
                  letterSpacing: "2px",
                }}
              >
                READ STORY
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* BLOG GRID */}
      <section style={{ padding: "80px 0 120px" }}>
        <div className="container">

          <div className="row g-4">

            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div className="col-lg-4 col-md-6" key={item}>

                <div style={{
                  border: "1px solid #eee",
                  background: "#fff",
                  height: "100%",
                }}>

                  <img
                    src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200"
                    alt="journal"
                    style={{
                      width: "100%",
                      height: "260px",
                      objectFit: "cover",
                    }}
                  />

                  <div style={{ padding: "20px" }}>

                    <p style={{
                      fontSize: "11px",
                      letterSpacing: "2px",
                      color: "#777",
                      textTransform: "uppercase",
                    }}>
                      Luxury Insight
                    </p>

                    <h4 style={{
                      fontWeight: "400",
                      marginTop: "10px",
                    }}>
                      Crafting Timeless Elegance
                    </h4>

                    <p style={{
                      color: "#666",
                      fontSize: "14px",
                      lineHeight: "1.7",
                      marginTop: "10px",
                    }}>
                      Discover how craftsmanship and design come together to
                      create lasting beauty in jewelry.
                    </p>

                    <button
                      style={{
                        marginTop: "15px",
                        border: "1px solid #000",
                        background: "#fff",
                        padding: "10px 20px",
                        fontSize: "11px",
                        letterSpacing: "2px",
                      }}
                    >
                      READ MORE
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
} 