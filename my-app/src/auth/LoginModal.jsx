import React, { useEffect } from "react";
import { useAuth } from "./AuthContext";

export default function LoginModal({ open, setOpen }) {
  const { setUser } = useAuth();

  // 1. REFRESH CONTROL (Har login type ke liye initialization check)
  useEffect(() => {
    const savedUser = localStorage.getItem("fabette_logged_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, [setUser]);

  // 2. GOOGLE STREAM IDENTITY MODULE
  useEffect(() => {
    if (!open) return;

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: "YOUR_GOOGLE_CLIENT_ID_HERE.apps.googleusercontent.com", // Apni ID dalein
          callback: handleGoogleResponse,
        });

        window.google.accounts.id.prompt();

        window.google.accounts.id.renderButton(
          document.getElementById("realGoogleBtn"),
          { theme: "outline", size: "large", width: 310, text: "continue_with" }
        );
      }
    };

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [open]);

  const handleGoogleResponse = (response) => {
    const token = response.credential;
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );

    const googleUser = JSON.parse(jsonPayload);

    const realUserData = {
      name: googleUser.name,
      email: googleUser.email,
      image: googleUser.picture,
      provider: "google",
    };

    setUser(realUserData);
    localStorage.setItem("fabette_logged_user", JSON.stringify(realUserData));
    setOpen(false);
  };

  // 3. INSTAGRAM & GUEST PERSISTENT HANDLERS
  const loginAlternative = (type) => {
    let fallbackUser = {};

    if (type === "instagram") {
      fallbackUser = {
        name: "victushvi_official",
        email: "insta.user@fabette.com",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
        provider: "instagram",
      };
    } else {
      fallbackUser = {
        name: "Guest User",
        email: "guest@fabette.com",
        image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        provider: "guest",
      };
    }

    // Dono states aur LocalStorage ko safe update karna
    setUser(fallbackUser);
    localStorage.setItem("fabette_logged_user", JSON.stringify(fallbackUser));
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ background: "rgba(0,0,0,0.7)", zIndex: 9999, backdropFilter: "blur(4px)" }}
    >
      <div className="bg-white p-4 text-center" style={{ width: "360px", borderRadius: "0px", border: "1px solid #eee" }}>
        <p style={{ letterSpacing: "3px", color: "#777", fontSize: "11px", textTransform: "uppercase", marginBottom: "5px" }}>
          Welcome to Maison
        </p>
        <h3 style={{ fontWeight: "300", letterSpacing: "1px", marginBottom: "30px", fontSize: "1.5rem" }}>
          SIGN IN TO ACCOUNT
        </h3>

        <div className="d-flex justify-content-center mb-3">
          <div id="realGoogleBtn" style={{ width: "100%" }}></div>
        </div>

        <button 
          className="btn d-flex align-items-center justify-content-center gap-3 mb-3" 
          onClick={() => loginAlternative("instagram")}
          style={{ width: "100%", height: "44px", background: "#fff", color: "#000", border: "1px solid #ddd", borderRadius: "0", fontSize: "13px", letterSpacing: "1px" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          CONTINUE WITH INSTAGRAM
        </button>

        <div className="d-flex align-items-center my-3">
          <hr className="flex-grow-1" style={{ borderColor: "#eee" }} />
          <span style={{ fontSize: "11px", color: "#999", padding: "0 10px" }}>OR</span>
          <hr className="flex-grow-1" style={{ borderColor: "#eee" }} />
        </div>

        <button 
          className="btn" 
          onClick={() => loginAlternative("guest")}
          style={{ width: "100%", height: "48px", background: "#000", color: "#fff", border: "none", borderRadius: "0", fontSize: "13px", letterSpacing: "2px" }}
        >
          CONTINUE AS GUEST
        </button>

        <p onClick={() => setOpen(false)} style={{ marginTop: "20px", fontSize: "12px", color: "#777", textDecoration: "underline", cursor: "pointer", marginBottom: "0" }}>
          Cancel & Close
        </p>
      </div>
    </div>
  );
}