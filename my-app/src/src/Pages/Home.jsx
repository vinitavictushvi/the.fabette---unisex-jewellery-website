import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const collections = [
    {
      title: "RINGS",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "EARRINGS",
      image:
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "NECKLACES",
      image:
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "BRACELETS",
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <div className="bg-white">
      {/* HERO */}

      <section className="bg-black text-white">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=80"
                alt=""
                className="w-100"
                style={{
                  height: "90vh",
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <h1
                  className="fw-light"
                  style={{
                    letterSpacing: "4px",
                    fontSize: "3rem",
                    lineHeight: "1.4",
                  }}
                >
                  TIMELESS LUXURY.
                  <br />
                  ETERNAL PRESENCE.
                </h1>

                <Link
                  to="/collection"
                  className="btn btn-outline-light rounded-0 mt-4 px-4 py-2"
                  style={{
                    letterSpacing: "2px",
                    fontSize: "12px",
                  }}
                >
                  ENTER COLLECTION
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}

      <section className="py-5">
        <div className="container text-center">
          <h5
            className="fw-light mb-5"
            style={{
              letterSpacing: "4px",
            }}
          >
            COLLECTIONS
          </h5>

          <div className="row g-4">
            {collections.map((item, index) => (
              <div className="col-6 col-md-3" key={index}>
                <div>
                  <div
                    className="bg-light border d-flex align-items-center justify-content-center"
                    style={{
                      height: "240px",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid"
                      style={{
                        maxHeight: "200px",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  <p
                    className="mt-3 mb-0 small"
                    style={{
                      letterSpacing: "2px",
                    }}
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center mb-4 mb-lg-0">
              <div className="bg-light p-4">
                <img
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80"
                  alt=""
                  className="img-fluid"
                  style={{
                    maxHeight: "350px",
                  }}
                />
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <h3
                className="fw-light"
                style={{
                  letterSpacing: "3px",
                }}
              >
                LUMINA RING
              </h3>

              <p className="my-3">₹ 8,950</p>

              <Link
                to="/product"
                className="text-dark text-decoration-none border-bottom pb-1"
                style={{
                  letterSpacing: "2px",
                  fontSize: "12px",
                }}
              >
                VIEW DETAILS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}

      <section className="bg-dark text-white text-center py-5">
        <h4
          className="fw-light"
          style={{
            letterSpacing: "3px",
            lineHeight: "1.8",
          }}
        >
          FABETTE EXISTS WHERE
          <br />
          DESIGN BECOMES EMOTION.
        </h4>
      </section>

      {/* GALLERY */}

      <section className="bg-black text-white py-5">
        <div className="container">
          <h5
            className="text-center fw-light mb-5"
            style={{
              letterSpacing: "4px",
            }}
          >
            EDITORIAL GALLERY
          </h5>

          <div className="row g-2">
            {gallery.map((img, index) => (
              <div className="col-6 col-md-3" key={index}>
                <div
                  style={{
                    height: "320px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-100 h-100"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-black text-white border-top border-secondary py-5">
        <div className="container">
          <div className="row text-center text-md-start">
            <div className="col-md-4 mb-3">
              <h6 style={{ letterSpacing: "3px" }}>FABETTE</h6>
            </div>

            <div className="col-md-4 mb-3">
              <p className="small mb-1">COLLECTIONS</p>
              <p className="small mb-1">ABOUT</p>
              <p className="small">CONTACT</p>
            </div>

            <div className="col-md-4 text-md-end">
              <p className="small mb-0">
                © 2026 Fabette Luxury Jewellery
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;