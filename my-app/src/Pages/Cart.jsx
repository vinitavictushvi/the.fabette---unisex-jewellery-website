





import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(storedCart);
  }, []);

  // ================= UPDATE QTY =================

  const updateQty = (id, type) => {
    const updated = cart.map((item) => {
      if (item.id === id) {
        const newQty =
          type === "inc"
            ? item.quantity + 1
            : item.quantity > 1
            ? item.quantity - 1
            : 1;

        return {
          ...item,
          quantity: newQty,
        };
      }

      return item;
    });

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // ================= REMOVE ITEM =================

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // ================= TOTAL =================

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 0 : 0;

  const total = subtotal + shipping;

  return (
    <div
      style={{
        background: "#fff",
        minHeight: "100vh",
        color: "#000",
        fontFamily: "serif",
      }}
    >
      {/* ================= HEADER ================= */}

      <div
        style={{
          padding: "80px 0 40px",
          textAlign: "center",
          borderBottom: "1px solid #eee",
        }}
      >
        <p
          style={{
            letterSpacing: "4px",
            color: "#777",
            fontSize: "12px",
            textTransform: "uppercase",
          }}
        >
          Fabette Luxury Maison
        </p>

        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "300",
            letterSpacing: "2px",
          }}
        >
          YOUR CART
        </h1>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="container py-5">

        {cart.length === 0 ? (
          <div className="text-center py-5">

            <h2
              style={{
                fontWeight: "300",
                marginBottom: "20px",
              }}
            >
              Your cart is empty
            </h2>

            <p
              style={{
                color: "#777",
                marginBottom: "30px",
              }}
            >
              Add luxury pieces to continue shopping.
            </p>

            <button
              onClick={() => navigate("/collection")}
              style={{
                padding: "15px 40px",
                background: "#000",
                color: "#fff",
                border: "none",
                letterSpacing: "3px",
                fontSize: "13px",
              }}
            >
              CONTINUE SHOPPING
            </button>
          </div>
        ) : (
          <div className="row g-5">

            {/* ================= LEFT CART ITEMS ================= */}

            <div className="col-lg-8">

              {/* TABLE HEADER */}

              <div
                className="d-none d-md-flex justify-content-between pb-3 mb-4"
                style={{
                  borderBottom: "1px solid #ddd",
                  fontSize: "13px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#777",
                }}
              >
                <div style={{ width: "45%" }}>Product</div>
                <div style={{ width: "20%" }}>Quantity</div>
                <div style={{ width: "20%" }}>Total</div>
                <div style={{ width: "15%" }}></div>
              </div>

              {/* ITEMS */}

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="row align-items-center mb-4 pb-4"
                  style={{
                    borderBottom: "1px solid #eee",
                  }}
                >

                  {/* IMAGE + INFO */}

                  <div className="col-md-5">

                    <div className="d-flex gap-3 align-items-center">

                      <img
                        src={item.images?.[0] || item.image}
                        alt={item.name}
                        style={{
                          width: "120px",
                          height: "120px",
                          objectFit: "cover",
                          background: "#f7f7f7",
                          border: "1px solid #eee",
                        }}
                      />

                      <div>

                        <h5
                          style={{
                            fontWeight: "400",
                            letterSpacing: "1px",
                          }}
                        >
                          {item.name}
                        </h5>

                        <p
                          style={{
                            color: "#777",
                            marginBottom: "5px",
                            fontSize: "14px",
                          }}
                        >
                          ₹ {item.price.toLocaleString()}
                        </p>

                        {item.size && (
                          <p
                            style={{
                              color: "#999",
                              fontSize: "13px",
                            }}
                          >
                            Size : {item.size}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* QTY */}

                  <div className="col-md-3 mt-4 mt-md-0">

                    <div
                      className="d-flex align-items-center"
                      style={{
                        width: "140px",
                        border: "1px solid #ddd",
                        height: "50px",
                      }}
                    >
                      <button
                        onClick={() =>
                          updateQty(item.id, "dec")
                        }
                        style={{
                          width: "45px",
                          height: "50px",
                          border: "none",
                          background: "transparent",
                          fontSize: "20px",
                        }}
                      >
                        -
                      </button>

                      <div
                        style={{
                          flex: 1,
                          textAlign: "center",
                        }}
                      >
                        {item.quantity}
                      </div>

                      <button
                        onClick={() =>
                          updateQty(item.id, "inc")
                        }
                        style={{
                          width: "45px",
                          height: "50px",
                          border: "none",
                          background: "transparent",
                          fontSize: "20px",
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* TOTAL */}

                  <div className="col-md-2 mt-4 mt-md-0">

                    <h6
                      style={{
                        fontWeight: "400",
                      }}
                    >
                      ₹{" "}
                      {(
                        item.price * item.quantity
                      ).toLocaleString()}
                    </h6>
                  </div>

                  {/* REMOVE */}

                  <div className="col-md-2 mt-4 mt-md-0 text-md-end">

                    <button
                      onClick={() => removeItem(item.id)}
                      style={{
                        border: "none",
                        background: "transparent",
                        color: "#999",
                        fontSize: "20px",
                      }}
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ================= RIGHT SUMMARY ================= */}

            <div className="col-lg-4">

              <div
                style={{
                  border: "1px solid #eee",
                  padding: "35px",
                  position: "sticky",
                  top: "30px",
                }}
              >
                <h4
                  style={{
                    marginBottom: "30px",
                    fontWeight: "300",
                    letterSpacing: "2px",
                  }}
                >
                  ORDER SUMMARY
                </h4>

                {/* SUBTOTAL */}

                <div
                  className="d-flex justify-content-between mb-3"
                >
                  <span style={{ color: "#666" }}>
                    Subtotal
                  </span>

                  <span>
                    ₹ {subtotal.toLocaleString()}
                  </span>
                </div>

                {/* SHIPPING */}

                <div
                  className="d-flex justify-content-between mb-3"
                >
                  <span style={{ color: "#666" }}>
                    Shipping
                  </span>

                  <span>
                    {shipping === 0 ? "Free" : shipping}
                  </span>
                </div>

                {/* TAX */}

                <div
                  className="d-flex justify-content-between mb-4"
                >
                  <span style={{ color: "#666" }}>
                    Taxes
                  </span>

                  <span>Included</span>
                </div>

                <hr />

                {/* TOTAL */}

                <div
                  className="d-flex justify-content-between mt-4 mb-4"
                >
                  <h5
                    style={{
                      fontWeight: "400",
                    }}
                  >
                    Total
                  </h5>

                  <h5
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    ₹ {total.toLocaleString()}
                  </h5>
                </div>

                {/* BUTTON */}

                <button
                  onClick={() => navigate("/checkout")}
                  style={{
                    width: "100%",
                    height: "58px",
                    background: "#000",
                    color: "#fff",
                    border: "none",
                    letterSpacing: "3px",
                    fontSize: "13px",
                    marginBottom: "20px",
                  }}
                >
                  PROCEED TO CHECKOUT
                </button>

                {/* FEATURES */}

                <div
                  style={{
                    fontSize: "13px",
                    color: "#777",
                    lineHeight: "2",
                  }}
                >
                  ✔ Secure Payment <br />
                  ✔ Free Express Shipping <br />
                  ✔ Luxury Packaging <br />
                  ✔ 7 Days Easy Return
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ================= FOOTER ================= */}

      <div
        style={{
          background: "#000",
          color: "#fff",
          padding: "60px 0",
          marginTop: "80px",
        }}
      >
        <div className="container">

          <div className="row">

            <div className="col-lg-4 mb-4">
              <h3
                style={{
                  letterSpacing: "3px",
                  fontWeight: "300",
                }}
              >
                FABETTE
              </h3>
            </div>

            <div className="col-lg-2 col-6 mb-4">
              <p style={{ color: "#999" }}>COLLECTION</p>
              <p>Rings</p>
              <p>Earrings</p>
              <p>Necklaces</p>
            </div>

            <div className="col-lg-2 col-6 mb-4">
              <p style={{ color: "#999" }}>ABOUT</p>
              <p>Our Story</p>
              <p>Craftsmanship</p>
              <p>Journal</p>
            </div>

            <div className="col-lg-2 col-6 mb-4">
              <p style={{ color: "#999" }}>SUPPORT</p>
              <p>Shipping</p>
              <p>Returns</p>
              <p>FAQ</p>
            </div>

            <div className="col-lg-2 col-6 mb-4">
              <p style={{ color: "#999" }}>CONTACT</p>
              <p>Instagram</p>
              <p>Facebook</p>
              <p>Email</p>
            </div>
          </div>

          <hr
            style={{
              borderColor: "#222",
              margin: "40px 0 20px",
            }}
          />

          <p
            style={{
              color: "#666",
              fontSize: "13px",
            }}
          >
            © 2025 Fabette. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}