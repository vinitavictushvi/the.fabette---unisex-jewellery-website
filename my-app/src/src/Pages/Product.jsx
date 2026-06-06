import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "Lumina Ring", price: "₹ 8,950", image: "/images/ring1.png" },
  { id: 2, name: "Noir Band", price: "₹ 6,250", image: "/images/ring2.png" },
  { id: 3, name: "Aurora Ring", price: "₹ 9,750", image: "/images/ring3.png" },
  { id: 4, name: "Solitaire Studs", price: "₹ 5,950", image: "/images/studs.png" },
];

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2 className="text-center py-5">Product Not Found</h2>;

  return (
    <div className="container py-5">

      <div className="row align-items-center g-5">

        <div className="col-md-6 text-center">
          <img
            src={product.image}
            className="img-fluid"
            style={{ filter: "grayscale(100%)", maxHeight: "420px" }}
            alt={product.name}
          />
        </div>

        <div className="col-md-6">

          <h1 className="fw-bold">{product.name}</h1>

          <h3 className="my-3">{product.price}</h3>

          <p className="text-muted">
            A statement of timeless elegance.
          </p>

          {/* QTY */}
          <div className="d-flex gap-3 my-4">
            <button className="btn btn-outline-dark" onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
            <span>{qty}</span>
            <button className="btn btn-outline-dark" onClick={() => setQty(qty + 1)}>+</button>
          </div>

          {/* BUTTONS */}
          <button
            className="btn btn-dark w-100 mb-2"
            onClick={() => navigate("/checkout")}
          >
            BUY NOW
          </button>

        </div>

      </div>

    </div>
  );
};

export default Product;