import { products } from "@/app/data/products";
import React from "react";
import BlogCard from "../shared/BlogCard";

export default function Blogs() {
  return (
    <div className="py-5">
      <h5 className="font-semibold text-xl">Blogs Here</h5>
      <div className="grid gap-2 mt-5">
        {products.slice(0, 8).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
