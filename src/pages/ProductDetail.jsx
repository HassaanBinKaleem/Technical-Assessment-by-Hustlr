import React from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar, Footer } from "../components";
import products from "../data/products.json";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  const recommended = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="card mb-4">
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p className="card-text">{product.description}</p>
            <h4>${product.price}</h4>
            <p>Rating: ⭐ {product.rating}</p>
            <p>Category: {product.category}</p>
            <Link to="/product-list" className="btn btn-dark mt-3">
              Back to Catalog
            </Link>
          </div>
        </div>

        <div className="col-12">
          <h2 className="display-5 text-center">Recommended for You</h2>
          <hr />
        </div>
        <div className="row">
          {recommended.map((r) => (
            <div className="col-md-4 mb-3" key={r.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{r.name}</h5>
                  <p className="card-text">{r.description}</p>
                  <p>Rating: ⭐ {product.rating}</p>
                  <h6>${r.price}</h6>
                  <Link
                    to={`/product-list/${r.id}`}
                    className="btn btn-dark btn-sm m-2"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
