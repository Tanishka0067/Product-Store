import React from "react";
import { useProducts } from "../hooks/useProducts";
import LoadingSpinner from "../components/LoadingSpinner";
import ProductCard from "../components/ProductCard";
import { PackageIcon } from "lucide-react";
import { Link } from "react-router";
const ProductListing = () => {
      const { data: products = [], isLoading, error } = useProducts();
    if (isLoading) return <LoadingSpinner />;
  return (
    <div>
       <div className="px-6 max-w-7xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <PackageIcon className="size-5 text-primary" />
          All Products
        </h2>

        {products.length === 0 ? (
          <div className="card bg-base-300">
            <div className="card-body items-center text-center py-16">
              <PackageIcon className="size-16 text-base-content/20" />
              <h3 className="card-title text-base-content/50">
                No products yet
              </h3>
              <p className="text-base-content/40 text-sm">
                Be the first to share something!
              </p>
              <Link to="/create" className="btn btn-primary btn-sm mt-2">
                Create Product
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductListing
