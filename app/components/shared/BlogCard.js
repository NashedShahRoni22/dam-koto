import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogCard({ blog }) {
  return (
    <div className="flex shadow-md rounded p-2">
      <Image src={blog.image} height={100} width={150} alt={blog.title} />
      <div>
        <h5 className="font-semibold">{blog.title}</h5>
        <p className="text-sm mt-2.5 mb-5">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <Link
          href={""}
          className="px-2.5 py-1 bg-blue-600 text-white text-sm rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
