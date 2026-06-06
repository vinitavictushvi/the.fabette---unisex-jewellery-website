export default function LuxuryCard({ product, onClick }) {
  return (
    <div className="card border-0 bg-transparent text-white">
      <img
        src={product.image}
        className="card-img-top luxury-img"
        alt={product.name}
      />
      <div className="card-body text-center">
        <h6 className="text-uppercase">{product.name}</h6>
        <p>{product.price}</p>
        <button className="btn btn-outline-light btn-sm" onClick={onClick}>
          View
        </button>
      </div>
    </div>
  );
}