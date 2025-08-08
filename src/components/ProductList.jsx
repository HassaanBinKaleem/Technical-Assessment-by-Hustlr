import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products.json";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="col-12">
        <h2 className="display-5 text-center">Product Catalog</h2>
        <hr />
      </div>

      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <h6 className="mb-2">${product.price}</h6>
                <small className="text-muted">⭐ {product.rating}</small>
                <div className="mt-auto">
                  <Link
                    to={`/product-list/${product.id}`}
                    className="btn btn-dark btn-sm m-2"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <p className="text-center mt-4">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
