import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  
  // FIXED: formData state declare nahi thi aur syntax broken tha, use sahi kiya hai
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // ================= TOTAL =================

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 0 : 0;

  const total = subtotal + shipping;

  // ================= HANDLE CHANGE =================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= PLACE ORDER =================

  // FIXED: Incomplete duplicate function brackets aur syntax errors remove kiye hain
  const placeOrder = () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.pincode
    ) {
      alert("Please fill all fields");
      return;
    }

    if (paymentMethod === "cod") {
      alert("Order Placed Successfully");
      localStorage.removeItem("cart");
      navigate("/thankyou");
    } else {
      alert("Online Payment Backend Pending");
    }
  };

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
          SECURE CHECKOUT
        </h1>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="container py-5">
        <div className="row g-5">
          {/* ================= LEFT FORM ================= */}

          <div className="col-lg-7">
            <div
              style={{
                border: "1px solid #eee",
                padding: "40px",
              }}
            >
              <h3
                style={{
                  fontWeight: "300",
                  marginBottom: "35px",
                  letterSpacing: "2px",
                }}
              >
                SHIPPING INFORMATION
              </h3>

              <div className="row g-4">
                {/* FULL NAME */}

                <div className="col-md-12">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-control"
                    style={inputStyle}
                  />
                </div>

                {/* EMAIL */}

                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    style={inputStyle}
                  />
                </div>

                {/* PHONE */}

                <div className="col-md-6">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    style={inputStyle}
                  />
                </div>

                {/* ADDRESS */}

                <div className="col-md-12">
                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="form-control"
                    style={inputStyle}
                  />
                </div>

                {/* CITY */}

                <div className="col-md-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className="form-control"
                    style={inputStyle}
                  />
                </div>

                {/* STATE */}

                <div className="col-md-4">
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    className="form-control"
                    style={inputStyle}
                  />
                </div>

                {/* PINCODE */}

                <div className="col-md-4">
                  <input
                    type="text"
                    name="pincode"
                    placeholder="PIN Code"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="form-control"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* PAYMENT SECTION */}

              <div className="mt-5">
                <h4
                  style={{
                    fontWeight: "300",
                    marginBottom: "25px",
                    letterSpacing: "2px",
                  }}
                >
                  PAYMENT METHOD
                </h4>

                <div
                  style={{
                    border: "1px solid #ddd",
                    padding: "25px",
                  }}
                >
                  {/* COD */}

                  <div className="mb-3">
                    <label className="d-flex align-items-center gap-2">
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      Cash On Delivery
                    </label>
                  </div>

                  {/* ONLINE */}

                  <div>
                    <label className="d-flex align-items-center gap-2">
                      <input
                        type="radio"
                        name="payment"
                        value="online"
                        checked={paymentMethod === "online"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      Online Payment
                    </label>
                  </div>

                  {/* QR */}

                  {paymentMethod === "online" && (
                    <div className="text-center mt-4">
                      <img
                        src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=upi://pay"
                        alt="QR"
                        style={{
                          width: "220px",
                          height: "220px",
                        }}
                      />

                      <p
                        style={{
                          marginTop: "15px",
                          color: "#777",
                        }}
                      >
                        Scan & Complete Payment
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SUMMARY ================= */}

          <div className="col-lg-5">
            <div
              style={{
                border: "1px solid #eee",
                padding: "35px",
                position: "sticky",
                top: "30px",
              }}
            >
              <h3
                style={{
                  fontWeight: "300",
                  marginBottom: "35px",
                  letterSpacing: "2px",
                }}
              >
                ORDER SUMMARY
              </h3>

              {/* ITEMS */}

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between align-items-center mb-4"
                >
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={item.images?.[0] || item.image}
                      alt={item.name}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        border: "1px solid #eee",
                        background: "#f7f7f7",
                      }}
                    />

                    <div>
                      <h6
                        style={{
                          marginBottom: "5px",
                          fontWeight: "400",
                        }}
                      >
                        {item.name}
                      </h6>

                      <p
                        style={{
                          color: "#777",
                          margin: 0,
                          fontSize: "13px",
                        }}
                      >
                        Qty : {item.quantity}
                      </p>

                      {item.size && (
                        <p
                          style={{
                            color: "#999",
                            margin: 0,
                            fontSize: "13px",
                          }}
                        >
                          Size : {item.size}
                        </p>
                      )}
                    </div>
                  </div>

                  <h6
                    style={{
                      fontWeight: "400",
                    }}
                  >
                    ₹ {(item.price * item.quantity).toLocaleString()}
                  </h6>
                </div>
              ))}

              <hr />

              {/* SUBTOTAL */}

              <div className="d-flex justify-content-between mb-3">
                <span style={{ color: "#666" }}>Subtotal</span>

                <span>₹ {subtotal.toLocaleString()}</span>
              </div>

              {/* SHIPPING */}

              <div className="d-flex justify-content-between mb-3">
                <span style={{ color: "#666" }}>Shipping</span>

                <span>Free</span>
              </div>

              {/* TAX */}

              <div className="d-flex justify-content-between mb-4">
                <span style={{ color: "#666" }}>Taxes</span>

                <span>Included</span>
              </div>

              <hr />

              {/* TOTAL */}

              <div className="d-flex justify-content-between mt-4 mb-4">
                <h5
                  style={{
                    fontWeight: "400",
                  }}
                >
                  TOTAL
                </h5>

                <h4
                  style={{
                    fontWeight: "500",
                  }}
                >
                  ₹ {total.toLocaleString()}
                </h4>
              </div>

              {/* BUTTON */}
              <button
                onClick={placeOrder}
                style={{
                  width: "100%",
                  height: "58px",
                  background: "#000",
                  color: "#fff",
                  border: "none",
                  letterSpacing: "3px",
                  fontSize: "13px",
                  cursor: "pointer"
                }}
              >
                {paymentMethod === "cod" ? "PLACE COD ORDER" : "PAY NOW"}
              </button>

              {/* EXTRA */}

              <div
                style={{
                  marginTop: "25px",
                  fontSize: "13px",
                  color: "#777",
                  lineHeight: "2",
                }}
              >
                ✔ Secure Checkout <br />
                ✔ Encrypted Payment <br />
                ✔ Luxury Packaging <br />
                ✔ Fast Delivery
              </div>
            </div>
          </div>
        </div>
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

// ================= INPUT STYLE =================

const inputStyle = {
  height: "58px",
  borderRadius: "0",
  border: "1px solid #ddd",
  boxShadow: "none",
  paddingLeft: "18px",
  fontSize: "14px",
};