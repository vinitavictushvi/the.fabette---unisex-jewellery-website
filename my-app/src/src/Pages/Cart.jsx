import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  // demo cart data (baad me Context/Redux se aayega)
  const cartItems = [
    {
      id: 1,
      name: "Lumina Ring",
      price: 8950,
      qty: 1,
      image: "/images/ring1.png",
    },
    {
      id: 2,
      name: "Noir Band",
      price: 6250,
      qty: 2,
      image: "/images/ring2.png",
    },
  ];

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="container py-5">

      <h2 className="fw-bold mb-4">YOUR CART</h2>

      <div className="row g-4">

        {/* LEFT CART ITEMS */}
        <div className="col-md-8">

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="d-flex align-items-center justify-content-between border p-3 mb-3"
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "80px",
                  filter: "grayscale(100%)",
                }}
              />

              {/* NAME */}
              <div className="flex-grow-1 ms-3">
                <h6 className="mb-1">{item.name}</h6>
                <small className="text-muted">Qty: {item.qty}</small>
              </div>

              {/* PRICE */}
              <div className="fw-bold">₹ {item.price * item.qty}</div>

            </div>
          ))}

        </div>

        {/* RIGHT SUMMARY */}
        <div className="col-md-4">

          <div className="border p-4">

            <h5 className="mb-3">SUMMARY</h5>

            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span>₹ {total}</span>
            </div>

            <div className="d-flex justify-content-between mb-3">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold mb-3">
              <span>Total</span>
              <span>₹ {total}</span>
            </div>

            <button
              className="btn btn-dark w-100"
              onClick={() => navigate("/checkout")}
            >
              PROCEED TO CHECKOUT
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Cart;