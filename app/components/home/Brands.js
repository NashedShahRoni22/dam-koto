import { brands } from "@/app/data/brands";
import BrancdCard from "../shared/BrandCard";

export default function Brands() {
  return (
    <div className="py-5">
      <h2 className="text-xl font-semibold">Brands</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-2 mt-5">
        {brands.map((brand, index) => (
          <BrancdCard key={index} brand={brand} />
        ))}
      </div>
    </div>
  );
}

