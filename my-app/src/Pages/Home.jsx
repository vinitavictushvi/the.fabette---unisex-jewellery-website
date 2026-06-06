import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";

import { collections } from "../data/collections";
import jewelryItems from "../data/jewelryItems";
import products from "../data/product";

export default function Home() {
  const trackRef = useRef(null);
  const cursorRef = useRef(null);
  const navigate = useNavigate();

  // ================= STATES FOR NEWSLETTER & SLIDER =================
  const [activeIndex, setActiveIndex] = useState(0);
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // ✅ SAFE ACCESS
  const activeItem = jewelryItems?.[activeIndex] || {};

  // ================= MARQUEE =================
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".track", {
        x: "-50%",
        repeat: -1,
        duration: 68,
        ease: "linear",
      });
    }, trackRef);

    return () => ctx.revert();
  }, []);

  // ================= AUTO SLIDER =================
  useEffect(() => {
    if (!jewelryItems?.length) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % jewelryItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // ================= CUSTOM CURSOR =================
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  // ================= OPEN CART =================
  const openCart = () => {
    navigate("/cart");
  };

  // ================= HANDLE NEWSLETTER SUBSCRIPTION =================
  const handleSubscription = async (e) => {
    e.preventDefault();
    if (!subscriberEmail) return;

    setSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/subscribe-newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: subscriberEmail }),
      });

      const data = await response.json();

      if (data.success) {
        alert("✨ Thank you for subscribing! Check your inbox.");
        setSubscriberEmail(""); 
      } else {
        alert("Subscription failed.");
      }
    } catch (error) {
      console.error(error);
      alert("Could not connect to the backend server.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      style={{
        background: "#050505",
        color: "#fff",
        overflow: "hidden",
        fontFamily: "Cormorant Garamond, serif",
      }}
    >
      {/* ================= CUSTOM CURSOR ================= */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          background: "rgba(212,175,55,0.28)",
          backdropFilter: "blur(6px)",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          mixBlendMode: "difference",
        }}
      />

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HERO ================= */}
      <motion.section
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="position-relative d-flex align-items-center"
        style={{
          minHeight: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1974&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* OVERLAY */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.92), rgba(0,0,0,0.35))",
          }}
        />

        {/* GOLD GLOW */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "rgba(212,175,55,0.12)",
            filter: "blur(120px)",
            top: "-120px",
            right: "-100px",
          }}
        />

        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 0.7, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-uppercase"
                style={{
                  letterSpacing: "0.45em",
                  fontSize: "13px",
                  marginBottom: "24px",
                }}
              >
                Digital Luxury Maison
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                style={{
                  fontSize: "clamp(4rem, 8vw, 8rem)",
                  fontWeight: 300,
                  lineHeight: 0.95,
                }}
              >
                TIMELESS <br />
                <span
                  style={{
                    color: "#D4AF37",
                    fontStyle: "italic",
                    fontWeight: 200,
                  }}
                >
                  LUXURY
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.8 }}
                style={{
                  maxWidth: "520px",
                  lineHeight: 1.9,
                  marginTop: "28px",
                  fontSize: "18px",
                  color: "#d6d6d6",
                }}
              >
                Fabette blends timeless jewellery craftsmanship with modern
                digital elegance — where emotion, architecture, and brilliance
                become one.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="d-flex gap-3 mt-5 flex-wrap"
              >
                <Link
                  to="/collection"
                  className="btn"
                  style={{
                    background: "#D4AF37",
                    color: "#000",
                    padding: "16px 38px",
                    letterSpacing: "0.2em",
                    fontSize: "12px",
                    borderRadius: "0",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  ENTER COLLECTION
                </Link>

                <button
                  type="button"
                  onClick={() => navigate("/about")}
                  className="btn"
                  style={{
                    border: "1px solid rgba(255,255,255,0.25)",
                    color: "#fff",
                    padding: "16px 38px",
                    borderRadius: "0",
                    letterSpacing: "0.2em",
                    fontSize: "12px",
                    background: "transparent",
                  }}
                >
                  OUR STORY
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================= FEATURE STRIP ================= */}
      <section
        className="py-4 border-top border-bottom"
        style={{
          borderColor: "rgba(255,255,255,0.08)",
          background: "#0A0A0A",
        }}
      >
        <div className="container">
          <div className="row text-center">
            {[
              "HANDCRAFTED DETAIL",
              "LUXURY PACKAGING",
              "SECURE PAYMENT",
              "WORLDWIDE SHIPPING",
            ].map((item, i) => (
              <div key={i} className="col-md-3 col-6 py-3">
                <p
                  style={{
                    letterSpacing: "0.28em",
                    fontSize: "11px",
                    margin: 0,
                    color: "#cfcfcf",
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COLLECTION MARQUEE ================= */}
      <section className="py-5">
        <div className="container-fluid px-0">
          <div className="text-center mb-5">
            <p
              style={{
                color: "#D4AF37",
                letterSpacing: "0.35em",
                fontSize: "12px",
              }}
            >
              FEATURED PIECES
            </p>

            <h2
              style={{
                fontSize: "clamp(2.5rem,4vw,4rem)",
                fontWeight: 300,
              }}
            >
              Signature Collection
            </h2>
          </div>

          <div ref={trackRef} style={{ overflow: "hidden" }}>
            <div
              className="track d-flex gap-4 px-4"
              style={{ width: "max-content" }}
            >
              {[...(collections || []), ...(collections || [])].map(
                (item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    style={{
                      width: "340px",
                      height: "500px",
                      position: "relative",
                      overflow: "hidden",
                      background: "#111",
                      borderRadius: "20px",
                    }}
                  >
                    <img
                      src={item?.img}
                      alt={item?.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.05))",
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        bottom: "28px",
                        left: "24px",
                      }}
                    >
                      <h3
                        style={{
                          fontWeight: 300,
                          letterSpacing: "0.15em",
                        }}
                      >
                        {item?.title}
                      </h3>

                      <p
                        style={{
                          color: "#D4AF37",
                          marginTop: "10px",
                          letterSpacing: "0.15em",
                        }}
                      >
                        ₹ {item?.price}
                      </p>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= LUXURY COLLECTION ================= */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(to bottom, #faf7f2, #ffffff)",
          overflow: "hidden",
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center g-5">
            {/* LEFT */}
            <div className="col-lg-6">
              <span
                style={{
                  letterSpacing: "0.3em",
                  color: "#b48a5a",
                  fontSize: "14px",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Luxury Collection
              </span>

              <h1
                className="mt-3"
                style={{
                  fontSize: "3.2rem",
                  fontWeight: 300,
                  lineHeight: 1.2,
                  color: "#111",
                }}
              >
                {activeItem?.name}
              </h1>

              <p
                className="mt-4 text-secondary"
                style={{
                  lineHeight: 2,
                  fontSize: "17px",
                  maxWidth: "520px",
                }}
              >
                {activeItem?.description}
              </p>

              <h3
                className="mt-4"
                style={{
                  color: "#b48a5a",
                  fontWeight: 600,
                  letterSpacing: "1px",
                }}
              >
                ₹ {activeItem?.price}
              </h3>

              <div className="d-flex gap-3 mt-4 flex-wrap">
                <button
                  type="button"
                  onClick={openCart}
                  className="btn px-5 py-3"
                  style={{
                    background: "#111",
                    color: "white",
                    borderRadius: "50px",
                    fontWeight: 600,
                    letterSpacing: "1px",
                  }}
                >
                  Add To Cart
                </button>

                <button
                  type="button"
                  className="btn px-5 py-3"
                  style={{
                    border: "1px solid #111",
                    borderRadius: "50px",
                    fontWeight: 600,
                    letterSpacing: "1px",
                    color: "#111",
                  }}
                >
                  Explore More
                </button>
              </div>

              {/* DOTS */}
              <div className="d-flex gap-2 mt-5">
                {jewelryItems?.map((item, index) => (
                  <div
                    key={item?.id || index}
                    onClick={() => setActiveIndex(index)}
                    style={{
                      width: activeIndex === index ? "35px" : "12px",
                      height: "12px",
                      borderRadius: "50px",
                      background:
                        activeIndex === index ? "#111" : "#d6c5b3",
                      cursor: "pointer",
                      transition: "0.4s",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-6 position-relative">
              <div
                style={{
                  position: "absolute",
                  width: "300px",
                  height: "300px",
                  background: "rgba(180,138,90,0.15)",
                  borderRadius: "50%",
                  top: "-40px",
                  right: "-50px",
                  filter: "blur(20px)",
                }}
              />

              <motion.img
                key={activeItem?.image}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                src={activeItem?.image}
                alt={activeItem?.name}
                className="img-fluid shadow-lg"
                style={{
                  width: "100%",
                  height: "650px",
                  objectFit: "cover",
                  borderRadius: "30px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS (FIXED SLICE -3 FOR 3 PIECES) ================= */}
      <section className="py-5" style={{ background: "#faf7f2" }}>
        <div className="container">
          <div className="text-center mb-5">
            <p
              style={{
                color: "#D4AF37",
                letterSpacing: "0.35em",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              NEW ARRIVALS
            </p>

            <h2
              style={{
                fontSize: "clamp(2.5rem,4vw,4rem)",
                fontWeight: 300,
                color: "#111",
              }}
            >
              Sculpted Elegance
            </h2>
          </div>

          <div className="row g-4">
            {products?.slice(-3).reverse().map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id}>
                <motion.div
                  whileHover={{ y: -12 }}
                  transition={{ duration: 0.4 }}
                  onClick={openCart}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "25px",
                    height: "500px",
                    cursor: "pointer",
                    background: "#111",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.96), rgba(0,0,0,0.08))",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      bottom: "30px",
                      left: "25px",
                      right: "25px",
                      color: "white",
                    }}
                  >
                    <p
                      style={{
                        letterSpacing: "0.25em",
                        fontSize: "11px",
                        color: "#D4AF37",
                        marginBottom: "10px",
                      }}
                    >
                      {item.category}
                    </p>

                    <h3
                      style={{
                        fontWeight: 300,
                        fontSize: "28px",
                        marginBottom: "12px",
                      }}
                    >
                      {item.name}
                    </h3>

                    <p
                      style={{
                        color: "#d6d6d6",
                        lineHeight: 1.8,
                        fontSize: "14px",
                        marginBottom: "18px",
                      }}
                    >
                      {item.description}
                    </p>

                    <h4
                      style={{
                        color: "#D4AF37",
                        fontWeight: "600",
                        marginBottom: "20px",
                      }}
                    >
                      ₹ {item.price.toLocaleString()}
                    </h4>

                    <button
                      type="button"
                      style={{
                        border: "none",
                        padding: "14px 28px",
                        borderRadius: "50px",
                        background: "#fff",
                        color: "#111",
                        fontWeight: "600",
                        letterSpacing: "1px",
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BRAND STATEMENT ================= */}
      <section
        className="position-relative d-flex align-items-center justify-content-center text-center"
        style={{
          minHeight: "65vh",
          background:
            "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1974&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: "clamp(3rem,6vw,6rem)",
              fontWeight: 200,
              lineHeight: 1.2,
              letterSpacing: "0.12em",
            }}
          >
            WE SCULPT <br />
            MEMORY IN LIGHT
          </motion.h2>
        </div>
      </section>

      {/* ================= EDITORIAL GRID ================= */}
      <section className="py-5">
        <div className="container">
          <div className="row g-3">
            {[
              "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
              "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
              "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
              "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
            ].map((img, i) => (
              <div
                key={i}
                className={i === 0 ? "col-lg-6" : "col-lg-2"}
              >
                <div
                  style={{
                    overflow: "hidden",
                    height: "500px",
                    borderRadius: "20px",
                  }}
                >
                  <img
                    src={img}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER (WITH PROP ACTIONS LINKED) ================= */}
      <section
        className="py-5"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="container text-center">
          <p
            style={{
              color: "#D4AF37",
              letterSpacing: "0.35em",
              fontSize: "12px",
            }}
          >
            PRIVATE MAISON LETTER
          </p>

          <h2
            style={{
              fontSize: "clamp(2rem,4vw,4rem)",
              fontWeight: 300,
              marginBottom: "30px",
            }}
          >
            Join The Fabette World
          </h2>

          {/* Connected Prop Structure mapping to Button.jsx */}
          <Button 
            subscriberEmail={subscriberEmail}
            setSubscriberEmail={setSubscriberEmail}
            handleSubscription={handleSubscription}
            submitting={submitting}
          />
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}