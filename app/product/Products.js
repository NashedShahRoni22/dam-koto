import { products } from "@/app/data/products";
import React from "react";
import ProductCard from "../components/shared/ProductCard";

export default function Products() {
  return (
    <div className="py-5">
      <h2 className="text-xl font-semibold">Top Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {products.slice(0,8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
