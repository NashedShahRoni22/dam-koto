import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col items-center justify-between shadow-md rounded p-4">
      <Image src={product.image} height={250} width={200} alt={product.title} />
      <div>
        <h5 className="text-center">{product.title}</h5>
        <p className="font-semibold mt-2.5 mb-5 text-center">${product.price}</p>
      </div>
      <Link
        href={`/product/${product.id}`}
        className="px-4 py-1.5 bg-blue-600 text-white text-sm rounded"
      >
        View Details
      </Link>
    </div>
  );
}
