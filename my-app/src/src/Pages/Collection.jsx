import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Lumina Ring", price: "₹ 8,950", image: "/images/ring1.png" },
  { id: 2, name: "Noir Band", price: "₹ 6,250", image: "/images/ring2.png" },
  { id: 3, name: "Aurora Ring", price: "₹ 9,750", image: "/images/ring3.png" },
  { id: 4, name: "Solitaire Studs", price: "₹ 5,950", image: "/images/studs.png" },
];

const Collection = () => {
  return (
    <div className="container py-5">

      <h1 className="text-center fw-bold mb-5">COLLECTIONS</h1>

      <div className="row g-4">

        {products.map((item) => (
          <div className="col-md-3 col-sm-6" key={item.id}>

            <Link
              to={`/product/${item.id}`}
              className="text-decoration-none text-dark"
            >

              <div className="card border-0 text-center shadow-sm h-100">

                <img
                  src={item.image}
                  className="card-img-top"
                  style={{
                    height: "260px",
                    objectFit: "contain",
                    filter: "grayscale(100%)"
                  }}
                  alt={item.name}
                />

                <div className="card-body">
                  <h5>{item.name}</h5>
                  <p className="text-muted">{item.price}</p>
                </div>

              </div>

            </Link>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Collection;