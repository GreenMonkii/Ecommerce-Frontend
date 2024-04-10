import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/products/${product._id}`} preventScrollReset={true}>
      <div className="col">
        <div className="card">
          <img
            className="card-img-top w-100 d-block fit-cover"
            src={`${process.env.REACT_APP_API_URL}/img/${product.Image[0]}`}
            alt=""
          />
          <div className="card-body p-4">
            <p className="text-primary card-text mb-0">${product.Price}</p>

            <h4 className="card-title">
              <span style={{ color: "rgb(160, 55, 62)" }}>{product.Name}</span>
            </h4>
            <p className="card-text">{product.Description}</p>
            <div className="d-flex">
              <img
                className="rounded-circle flex-shrink-0 me-3 fit-cover"
                width={50}
                height={50}
                src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
                alt=""
              />
              <div>
                <p className="fw-bold mb-0">{product.Retailer.name}</p>
                <p className="text-muted mb-0">{product.Category[0]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
