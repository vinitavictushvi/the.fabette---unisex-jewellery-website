import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { collections } from "../data/collections";

export default function Collection() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const categories = [
    "All",
    ...new Set(collections.map((item) => item.category)),
  ];

  const filteredCollections = useMemo(() => {
    let data = [...collections];

    data = data.filter((item) => {
      const titleMatch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const categoryMatch =
        category === "All"
          ? true
          : item.category.toLowerCase() === category.toLowerCase();

      return titleMatch && categoryMatch;
    });

    if (sort === "low") {
      data.sort((a, b) => Number(a.price) - Number(b.price));
    }

    if (sort === "high") {
      data.sort((a, b) => Number(b.price) - Number(a.price));
    }

    return data;
  }, [search, category, sort]);

  return (
    <div style={{ background: "#fff", color: "#000", minHeight: "100vh" }}>

      {/* HERO */}
      <section style={{ padding: "140px 0 60px", textAlign: "center" }}>
        <div className="container">
          <p style={{
            letterSpacing: "0.35em",
            fontSize: "11px",
            textTransform: "uppercase",
            color: "#666",
          }}>
            Luxury Jewelry Collection
          </p>

          <h1 style={{
            fontSize: "clamp(2.8rem,6vw,5.5rem)",
            fontWeight: "300",
            letterSpacing: "-1px",
            marginTop: "20px",
          }}>
            Signature Collections
          </h1>

          <p style={{
            maxWidth: "700px",
            margin: "25px auto 0",
            color: "#666",
            lineHeight: "1.9",
            fontSize: "15px",
          }}>
            Timeless craftsmanship meets modern design.
            Each piece is designed with precision, elegance,
            and quiet luxury.
          </p>
        </div>
      </section>

      {/* SEARCH + SORT */}
      <section style={{ paddingBottom: "40px" }}>
        <div className="container">
          <div className="row g-3 align-items-center">

            <div className="col-lg-8">
              <div style={{ position: "relative" }}>
                <Search
                  size={18}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "18px",
                    transform: "translateY(-50%)",
                    color: "#999",
                  }}
                />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search collections..."
                  style={{
                    width: "100%",
                    height: "58px",
                    paddingLeft: "50px",
                    border: "1px solid #e5e5e5",
                    outline: "none",
                    fontSize: "14px",
                  }}
                />
              </div>
            </div>

            <div className="col-lg-4">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                style={{
                  width: "100%",
                  height: "58px",
                  border: "1px solid #e5e5e5",
                  fontSize: "14px",
                  background: "#fff",
                }}
              >
                <option value="featured">Featured</option>
                <option value="low">Price: Low → High</option>
                <option value="high">Price: High → Low</option>
              </select>
            </div>

          </div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section style={{ paddingBottom: "50px" }}>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center gap-2">

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                style={{
                  border: "1px solid #ddd",
                  background: category === cat ? "#000" : "#fff",
                  color: category === cat ? "#fff" : "#000",
                  padding: "10px 18px",
                  fontSize: "12px",
                  letterSpacing: "1px",
                  transition: ".3s",
                }}
              >
                {cat}
              </button>
            ))}

          </div>
        </div>
      </section>

      {/* GRID */}
      <section style={{ paddingBottom: "120px" }}>
        <div className="container">
          <div className="row g-4">

            {filteredCollections.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id}>

                <div style={{
                  border: "1px solid #eee",
                  background: "#fff",
                  transition: "0.3s",
                  height: "100%",
                }}>

                  {/* IMAGE */}
                  <div style={{ overflow: "hidden" }}>
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "360px",
                        objectFit: "cover",
                        transition: "0.4s",
                      }}
                    />
                  </div>

                  {/* CONTENT */}
                  <div style={{ padding: "22px" }}>

                    <p style={{
                      fontSize: "11px",
                      letterSpacing: "2px",
                      color: "#777",
                      textTransform: "uppercase",
                    }}>
                      {item.category}
                    </p>

                    <h4 style={{
                      fontWeight: "400",
                      marginTop: "10px",
                    }}>
                      {item.title}
                    </h4>

                    <p style={{
                      color: "#666",
                      fontSize: "14px",
                      lineHeight: "1.8",
                      minHeight: "70px",
                      marginTop: "10px",
                    }}>
                      {item.description}
                    </p>

                    <h4 style={{
                      marginTop: "15px",
                      fontWeight: "400",
                    }}>
                      ₹ {item.price}
                    </h4>

                    <button
                      onClick={() => navigate(`/product/${item.id}`)}
                      style={{
                        marginTop: "18px",
                        width: "100%",
                        padding: "14px",
                        border: "1px solid #000",
                        background: "#000",
                        color: "#fff",
                        fontSize: "12px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        transition: ".3s",
                      }}
                    >
                      View Collection
                    </button>

                  </div>
                </div>
              </div>
            ))}

          </div>

          {filteredCollections.length === 0 && (
            <div style={{ textAlign: "center", marginTop: "60px" }}>
              <h3 style={{ fontWeight: "300" }}>No Collections Found</h3>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}