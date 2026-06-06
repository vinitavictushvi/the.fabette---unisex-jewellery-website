export default function Footer() {
  return (
    <footer
      className="py-5 text-center"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.1)",
        background: "#000",
      }}
    >
      <div className="container">

        <h5
          className="text-uppercase mb-3"
          style={{
            letterSpacing: "0.4em",
            fontWeight: 200,
            color: "#aaa",
          }}
        >
          Fabette Maison
        </h5>

        <p className="text-secondary small mb-4">
          A digital luxury atelier inspired by heritage craftsmanship and modern elegance.
        </p>

        <div className="d-flex justify-content-center gap-4 mb-4 small">
          <span className="text-secondary">Instagram</span>
          <span className="text-secondary">Pinterest</span>
          <span className="text-secondary">Contact</span>
        </div>

        <p className="text-secondary small">
          © 2026 FABETTE. All rights reserved.
        </p>

      </div>
    </footer>
  );
}