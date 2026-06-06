import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-5">

      <div className="row g-5">

        <div className="col-md-6">

          <h2 className="mb-4">SHIPPING</h2>

          <input className="form-control mb-3" placeholder="Name" />
          <input className="form-control mb-3" placeholder="Email" />
          <input className="form-control mb-3" placeholder="Phone" />
          <input className="form-control mb-3" placeholder="Address" />

        </div>

        <div className="col-md-6">

          <h2 className="mb-4">SUMMARY</h2>

          <div className="border p-3">

            <div className="d-flex justify-content-between">
              <span>Product</span>
              <span>₹ 8,950</span>
            </div>

            <hr />

            <button
              className="btn btn-dark w-100"
              onClick={() => navigate("/thankyou")}
            >
              COMPLETE PAYMENT
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Checkout;