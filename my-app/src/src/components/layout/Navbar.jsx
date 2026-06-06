import { Link, NavLink } from "react-router-dom";

import {
  Search,
  Heart,
  Person,
  List,
  Bag,
} from "react-bootstrap-icons";

export default function Navbar() {
  return (
    <>
      {/* NAVBAR */}
      <nav
        className="navbar navbar-expand-lg fixed-top px-lg-5 px-3 py-3"
        style={{
          backdropFilter: "blur(14px)",
          background: "rgba(0,0,0,0.45)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="container-fluid">

          {/* LEFT */}
          <div className="d-flex align-items-center gap-3">

            {/* MOBILE MENU */}
            <button
              className="btn text-white d-lg-none border-0 p-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileMenu"
            >
              <List size={24} />
            </button>

            {/* LOGO */}
            <Link
              to="/"
              className="navbar-brand text-white m-0 text-decoration-none"
              style={{
                letterSpacing: "0.45em",
                fontWeight: "300",
                fontSize: "15px",
              }}
            >
              FABETTE
            </Link>
          </div>

          {/* CENTER LINKS */}
          <div className="collapse navbar-collapse justify-content-center">

            <div
              className="navbar-nav gap-4 text-uppercase"
              style={{
                letterSpacing: "0.22em",
                fontSize: "12px",
              }}
            >
              {[
                "collection",
                "rings",
                "earrings",
                "necklaces",
                "journal",
                "about",
                "contact",
              ].map((item) => (
                <NavLink
                  key={item}
                  to={`/${item}`}
                  className="nav-link text-white position-relative"
                  style={{
                    opacity: 0.75,
                    transition: "0.3s ease",
                    fontWeight: 300,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = "0.75";
                  }}
                >
                  {item}
                </NavLink>
              ))}
            </div>

          </div>

          {/* RIGHT ICONS */}
          <div className="d-flex align-items-center gap-3">

            {/* SEARCH */}
            <button
              className="btn text-white border-0 p-0"
              style={{
                transition: "0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <Search size={18} />
            </button>

            {/* WISHLIST */}
            <button
              className="btn text-white border-0 p-0 d-none d-md-block"
              style={{
                transition: "0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <Heart size={18} />
            </button>

            {/* USER */}
            <button
              className="btn text-white border-0 p-0 d-none d-md-block"
              style={{
                transition: "0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <Person size={18} />
            </button>

            {/* CART */}
            <Link
              to="/cart"
              className="text-white position-relative"
              style={{
                transition: "0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <Bag size={18} />

              {/* CART COUNT */}
              <span
                className="position-absolute d-flex align-items-center justify-content-center"
                style={{
                  top: "-8px",
                  right: "-10px",
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background: "white",
                  color: "black",
                  fontSize: "10px",
                  fontWeight: "600",
                }}
              >
                2
              </span>
            </Link>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className="offcanvas offcanvas-start text-white"
        tabIndex="-1"
        id="mobileMenu"
        style={{
          background: "#000",
        }}
      >
        {/* HEADER */}
        <div
          className="offcanvas-header"
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h5
            style={{
              letterSpacing: "0.35em",
              fontWeight: "300",
            }}
          >
            FABETTE
          </h5>

          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        {/* BODY */}
        <div className="offcanvas-body d-flex flex-column gap-4 text-uppercase">

          {[
            "collection",
            "rings",
            "earrings",
            "necklaces",
            "bracelets",
            "journal",
            "about",
            "contact",
          ].map((item) => (
            <NavLink
              key={item}
              to={`/${item}`}
              className="text-decoration-none text-white"
              style={{
                letterSpacing: "0.22em",
                fontSize: "13px",
                opacity: 0.8,
                transition: "0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.paddingLeft = "6px";
                e.target.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.target.style.paddingLeft = "0px";
                e.target.style.opacity = "0.8";
              }}
            >
              {item}
            </NavLink>
          ))}

        </div>
      </div>
    </>
  );
}