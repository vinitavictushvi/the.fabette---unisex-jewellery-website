import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, Heart, Person, Bag, List, X } from "react-bootstrap-icons";
import { useAuth } from "../../auth/AuthContext";
import LoginModal from "../../auth/LoginModal";

export default function Navbar() {
  const { user, setUser } = useAuth();
  const [loginOpen, setLoginOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("fabette_logged_user");
    setDropdownOpen(false);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top px-3 py-3"
        style={{
          background: "rgba(0,0,0,0.65)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          zIndex: 1050,
        }}
      >
        <div className="container-fluid text-white d-flex align-items-center justify-content-between">
          
          {/* LEFT: LOGO */}
          <Link
            to="/"
            className="navbar-brand text-white fw-light m-0"
            style={{ letterSpacing: "0.35em", fontSize: "15px" }}
          >
            FABETTE
          </Link>

          {/* CENTER: DESKTOP LINKS */}
          <div
            className="d-none d-lg-flex gap-4 text-uppercase"
            style={{ letterSpacing: "0.2em", fontSize: "11px" }}
          >
            {["collection", "journal", "about", "contact"].map((item) => (
              <NavLink
                key={item}
                to={`/${item}`}
                className="text-white text-decoration-none opacity-75"
                style={{ transition: "0.3s" }}
                activeStyle={{ opacity: 1, borderBottom: "1px solid #fff" }}
              >
                {item}
              </NavLink>
            ))}
          </div>

          {/* RIGHT SIDE: ACTIONS */}
          <div className="d-flex align-items-center gap-3">
            
            {/* SEARCH (Desktop) */}
            {user && (
              <div
                className="d-none d-md-flex align-items-center px-3 py-1 rounded-pill"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <Search size={14} className="opacity-75" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  className="border-0 bg-transparent text-white ms-2"
                  style={{ outline: "none", width: "100px", fontSize: "12px" }}
                />
              </div>
            )}

            {/* ICONS */}
            <Heart size={18} className="text-white opacity-75" style={{ cursor: "pointer" }} />
            <Bag size={18} className="text-white opacity-75" style={{ cursor: "pointer" }} />

            {/* PROFILE MODULE */}
            {!user ? (
              <button
                className="btn btn-sm text-white border px-3 py-1 rounded-pill d-flex align-items-center gap-2"
                onClick={() => setLoginOpen(true)}
                style={{ borderColor: "rgba(255,255,255,0.2)", fontSize: "11px", letterSpacing: "1px" }}
              >
                <Person size={15} />
                LOGIN
              </button>
            ) : (
              <div className="position-relative">
                <div
                  className="d-flex align-items-center gap-2 px-2 py-1 rounded-pill"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  <img src={user.image} alt="" style={{ width: "26px", height: "26px", borderRadius: "50%", objectFit: "cover" }} />
                  <span className="text-white d-none d-sm-inline-block" style={{ fontSize: "12px", letterSpacing: "1px" }}>
                    {user.name.split(" ")[0]}
                  </span>
                  <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.6)" }}>▼</span>
                </div>

                {/* LOGOUT DROPDOWN */}
                {dropdownOpen && (
                  <>
                    <div className="position-fixed top-0 start-0 w-100 h-100" style={{ zIndex: 998 }} onClick={() => setDropdownOpen(false)} />
                    <div
                      className="position-absolute end-0 mt-2 bg-dark text-start"
                      style={{
                        width: "160px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
                        zIndex: 999,
                        borderRadius: "0px",
                      }}
                    >
                      <div style={{ padding: "10px 15px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                        <p style={{ margin: 0, fontSize: "10px", color: "#777", textTransform: "uppercase" }}>Account</p>
                        <p style={{ margin: 0, fontSize: "12px", color: "#fff", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{user.name}</p>
                      </div>
                      <button onClick={handleLogout} style={{ width: "100%", background: "none", border: "none", textAlign: "left", padding: "10px 15px", fontSize: "12px", color: "#ff4d4d", letterSpacing: "1px", cursor: "pointer" }}>
                        LOG OUT
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* HAMBURGER BUTTON (Mobile Only) */}
            <button
              className="btn text-white p-0 d-lg-none ms-1"
              onClick={() => setMobileMenuOpen(true)}
              style={{ background: "none", border: "none", zIndex: 1100 }}
            >
              <List size={26} />
            </button>

          </div>
        </div>
      </nav>

      {/* ================= RIGHT SIDE MOBILE DRAWER MENU ================= */}
      {mobileMenuOpen && (
        <>
          {/* Transparent Dark Overlay: Jo piche ke home page ko halka sa chhupayega par poora band nahi karega */}
          <div
            className="position-fixed top-0 start-0 w-100 h-100 d-lg-none"
            style={{
              background: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(3px)",
              zIndex: 1080,
            }}
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Side Drawer Panel: Jo right side se nikal kar aayega sirf 300px width mein */}
          <div
            className="position-fixed top-0 end-0 h-100 d-lg-none bg-dark text-white p-4"
            style={{
              width: "300px",
              background: "rgba(10,10,10,0.98)",
              borderLeft: "1px solid rgba(255,255,255,0.08)",
              zIndex: 1090,
              boxShadow: "-10px 0px 30px rgba(0,0,0,0.5)",
              transition: "transform 0.3s ease",
            }}
          >
            {/* Drawer Close Button */}
            <div className="d-flex justify-content-end mb-4">
              <button
                className="btn text-white p-0"
                onClick={() => setMobileMenuOpen(false)}
                style={{ background: "none", border: "none" }}
              >
                <X size={30} />
              </button>
            </div>

            {/* Drawer Content Area */}
            <div className="d-flex flex-column gap-4 text-uppercase text-start" style={{ letterSpacing: "3px", fontSize: "14px" }}>
              
              {/* MOBILE SEARCH BAR */}
              {user && (
                <div
                  className="d-flex align-items-center px-3 py-2 rounded-pill mb-2"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    width: "100%",
                  }}
                >
                  <Search size={14} className="text-white opacity-75" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Layout..."
                    className="border-0 bg-transparent text-white ms-2 w-100"
                    style={{ outline: "none", fontSize: "13px" }}
                  />
                </div>
              )}

              {/* RESPONSIVE NAVIGATION LINKS */}
              {["collection", "journal", "about", "contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-decoration-none fw-light border-bottom pb-2"
                  style={{ borderColor: "rgba(255,255,255,0.05)" }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}

      {/* LOGIN MODAL */}
      <LoginModal open={loginOpen} setOpen={setLoginOpen} />
    </>
  );
}