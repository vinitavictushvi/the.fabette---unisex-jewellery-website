import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/product";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [mainImg, setMainImg] = useState("");
  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState("7");
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    if (product) {
      setMainImg(product.images?.[0] || product.image);
      setQty(1);
      setSelectedSize("7");
    }
  }, [product]);

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Product Not Found</h2>
      </div>
    );
  }

  const relatedProducts = products
    .filter((item) => item.id !== product.id)
    .slice(0, 3);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cart.find(
      (i) => i.id === product.id && i.size === selectedSize
    );

    let updated;

    if (exists) {
      updated = cart.map((i) =>
        i.id === product.id && i.size === selectedSize
          ? { ...i, quantity: i.quantity + qty }
          : i
      );
    } else {
      updated = [
        ...cart,
        {
          ...product,
          quantity: qty,
          size: selectedSize,
        },
      ];
    }

    localStorage.setItem("cart", JSON.stringify(updated));
    navigate("/cart");
  };

  return (
    <div
      style={{
        background: "#fff",
        color: "#000",
        minHeight: "100vh",
        fontFamily: "serif",
      }}
    >
      <div className="container py-5">
        <div className="row g-5">

          {/* ================= LEFT GALLERY ================= */}
          <div className="col-lg-7">
            <div className="row">

              {/* THUMBNAILS */}
              <div className="col-2">
                <div className="d-flex flex-column gap-3">
                  {product.images?.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt=""
                      onClick={() => setMainImg(img)}
                      style={{
                        width: "100%",
                        height: "100px",
                        objectFit: "cover",
                        cursor: "pointer",
                        border:
                          mainImg === img
                            ? "2px solid #000"
                            : "1px solid #ddd",
                        opacity: mainImg === img ? 1 : 0.6,
                        transition: "0.3s",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* MAIN IMAGE */}
              <div className="col-10">
                <div
                  style={{
                    background: "#f7f7f7",
                    padding: "20px",
                    border: "1px solid #eee",
                  }}
                >
                  <img
                    src={mainImg}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "650px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT DETAILS ================= */}
          <div className="col-lg-5">

            <p
              style={{
                letterSpacing: "4px",
                color: "#777",
                fontSize: "12px",
                textTransform: "uppercase",
              }}
            >
              {product.category}
            </p>

            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "300",
                marginBottom: "15px",
              }}
            >
              {product.name}
            </h1>

            {/* RATING */}
            <div className="d-flex align-items-center gap-2 mb-3">
              <span>★★★★★</span>
              <span style={{ color: "#666" }}>
                ({product.reviews} Reviews)
              </span>
            </div>

            {/* PRICE */}
            <div className="d-flex align-items-center gap-3 mb-4">
              <h2 style={{ fontWeight: "400", margin: 0 }}>
                ₹ {product.price.toLocaleString()}
              </h2>

              {product.oldPrice && (
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "#999",
                    fontSize: "18px",
                  }}
                >
                  ₹ {product.oldPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* DESCRIPTION */}
            <p
              style={{
                color: "#666",
                lineHeight: 1.9,
                fontSize: "15px",
                marginBottom: "35px",
              }}
            >
              {product.description}
            </p>

            {/* SIZE */}
            <div className="mb-4">
              <p style={{ fontWeight: "600", marginBottom: "12px" }}>
                Select Size
              </p>

              <div className="d-flex gap-2">
                {["6", "7", "8", "9"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      width: "50px",
                      height: "50px",
                      border:
                        selectedSize === size
                          ? "2px solid #000"
                          : "1px solid #ddd",
                      background:
                        selectedSize === size ? "#000" : "#fff",
                      color:
                        selectedSize === size ? "#fff" : "#000",
                      transition: "0.3s",
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* QUANTITY */}
            <div className="mb-4">
              <p style={{ fontWeight: "600", marginBottom: "12px" }}>
                Quantity
              </p>

              <div
                className="d-flex align-items-center"
                style={{
                  border: "1px solid #ddd",
                  width: "170px",
                  height: "55px",
                }}
              >
                <button
                  onClick={() => qty > 1 && setQty(qty - 1)}
                  style={{
                    width: "55px",
                    height: "55px",
                    border: "none",
                    background: "transparent",
                    fontSize: "20px",
                  }}
                >
                  -
                </button>

                <div style={{ flex: 1, textAlign: "center" }}>
                  {qty}
                </div>

                <button
                  onClick={() => setQty(qty + 1)}
                  style={{
                    width: "55px",
                    height: "55px",
                    border: "none",
                    background: "transparent",
                    fontSize: "20px",
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="d-grid gap-3">
              <button
                onClick={addToCart}
                style={{
                  height: "58px",
                  background: "#000",
                  color: "#fff",
                  border: "none",
                  letterSpacing: "3px",
                  fontSize: "13px",
                }}
              >
                ADD TO CART
              </button>

              <button
                style={{
                  height: "58px",
                  background: "#fff",
                  color: "#000",
                  border: "1px solid #000",
                  letterSpacing: "3px",
                  fontSize: "13px",
                }}
              >
                BUY NOW
              </button>
            </div>

            {/* INFO */}
            <div className="mt-5">
              <div className="d-flex justify-content-between py-3 border-bottom">
                <span>SKU</span>
                <span>{product.sku}</span>
              </div>

              <div className="d-flex justify-content-between py-3 border-bottom">
                <span>Material</span>
                <span>{product.material}</span>
              </div>

              <div className="d-flex justify-content-between py-3 border-bottom">
                <span>Availability</span>
                <span>{product.stock}</span>
              </div>

              <div className="d-flex justify-content-between py-3 border-bottom">
                <span>Shipping</span>
                <span>{product.delivery}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= TABS ================= */}
        <div className="mt-5 pt-5">
          <div className="d-flex gap-4 border-bottom pb-3">
            {["description", "details", "shipping"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  border: "none",
                  background: "transparent",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  fontSize: "13px",
                  color: activeTab === tab ? "#000" : "#777",
                  borderBottom:
                    activeTab === tab ? "2px solid #000" : "none",
                  paddingBottom: "10px",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div style={{ paddingTop: "35px", color: "#666" }}>
            {activeTab === "description" && (
              <p>{product.description}</p>
            )}

            {activeTab === "details" && (
              <div>
                <p>• {product.material}</p>
                <p>• {product.category}</p>
                <p>• {product.sku}</p>
              </div>
            )}

            {activeTab === "shipping" && (
              <div>
                <p>{product.delivery}</p>
                <p>3-5 Business Days Delivery</p>
              </div>
            )}
          </div>
        </div>

        {/* ================= RELATED PRODUCTS ================= */}
        <div className="mt-5 pt-5">
          <div className="text-center mb-5">
            <h2
              style={{
                fontSize: "2.3rem",
                fontWeight: "300",
                letterSpacing: "2px",
              }}
            >
              YOU MAY ALSO LOVE
            </h2>
          </div>

          <div className="row g-4">
            {relatedProducts.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id}>
                <div
                  style={{
                    border: "1px solid #eee",
                    background: "#fff",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "320px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="p-4 text-center">
                    <h5 style={{ letterSpacing: "2px" }}>
                      {item.name}
                    </h5>

                    <p style={{ color: "#666" }}>
                      ₹ {item.price.toLocaleString()}
                    </p>

                    <button
                      onClick={() =>
                        navigate(`/product/${item.id}`)
                      }
                      style={{
                        border: "1px solid #000",
                        background: "#fff",
                        padding: "12px 30px",
                        letterSpacing: "2px",
                        fontSize: "12px",
                      }}
                    >
                      VIEW PRODUCT
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}