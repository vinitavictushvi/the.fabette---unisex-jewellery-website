// src/components/ui/Button.jsx
import React from "react";

export default function Button({ subscriberEmail, setSubscriberEmail, handleSubscription, submitting }) {
  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", width: "100%" }}>
      <form onSubmit={handleSubscription} className="d-flex flex-column flex-sm-row gap-2">
        <input
          type="email"
          placeholder="ENTER YOUR EMAIL"
          value={subscriberEmail || ""}
          onChange={(e) => setSubscriberEmail(e.target.value)}
          required
          disabled={submitting}
          style={{
            flexGrow: 1,
            height: "56px",
            borderRadius: "0",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            background: "transparent",
            paddingLeft: "20px",
            fontSize: "13px",
            color: "#fff",
            outline: "none",
            letterSpacing: "1px"
          }}
        />
        
        <button
          type="submit"
          disabled={submitting}
          style={{
            background: submitting ? "#aaa" : "#D4AF37",
            border: "none",
            padding: "16px 34px",
            color: "#000",
            fontWeight: 600,
            letterSpacing: "0.2em",
            cursor: submitting ? "not-allowed" : "pointer",
            height: "56px",
            transition: "0.3s"
          }}
        >
          {submitting ? "LOADING..." : "SUBSCRIBE"}
        </button>
      </form>
    </div>
  );
}