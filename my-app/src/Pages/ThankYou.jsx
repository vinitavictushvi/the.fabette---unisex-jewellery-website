import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = ({ status = "success" }) => {
  const navigate = useNavigate();
  const isSuccess = status === "success";

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{
        background: "#fafafa",
        fontFamily: "serif",
      }}
    >
      <div
        className="text-center p-5 shadow-sm"
        style={{
          border: "1px solid #eaeaea",
          borderRadius: "14px",
          width: "420px",
          background: "#fff",
        }}
      >

        {/* ICON */}
        <div
          className="d-flex align-items-center justify-content-center mx-auto mb-4"
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            border: `2px solid ${isSuccess ? "#16a34a" : "#dc2626"}`,
            color: isSuccess ? "#16a34a" : "#dc2626",
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          {isSuccess ? "✓" : "✕"}
        </div>

        {/* TITLE */}
        <h2
          style={{
            letterSpacing: "3px",
            fontWeight: "300",
            color: "#111",
          }}
        >
          {isSuccess ? "ORDER SUCCESSFUL" : "PAYMENT FAILED"}
        </h2>

        {/* MESSAGE */}
        <p style={{ color: "#555", marginTop: "12px" }}>
          {isSuccess
            ? "Your order has been placed successfully."
            : "Something went wrong with your payment."}
        </p>

        <p style={{ color: "#888", fontSize: "14px" }}>
          {isSuccess
            ? "A confirmation email has been sent to you."
            : "Please try again or use another payment method."}
        </p>

        {/* BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="btn mt-4"
          style={{
            background: isSuccess ? "#111" : "#dc2626",
            color: "#fff",
            padding: "12px 22px",
            borderRadius: "8px",
            letterSpacing: "2px",
            fontSize: "12px",
            width: "100%",
            border: "none",
          }}
        >
          CONTINUE SHOPPING
        </button>

        {/* FOOTER NOTE */}
        <div
          style={{
            marginTop: "18px",
            fontSize: "12px",
            color: "#999",
          }}
        >
          {isSuccess
            ? "✔ Secure payment • ✔ Fast delivery • ✔ Premium packaging"
            : "Need help? Contact support team."}
        </div>

      </div>
    </div>
  );
};

export default ThankYou;