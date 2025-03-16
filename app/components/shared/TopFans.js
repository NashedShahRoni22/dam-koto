import { products } from "@/app/data/products";

export default function TopFans() {
  return (
    <div className="py-5">
      <h2 className="text-xl font-semibold">Top By Fans</h2>
      <table className="mt-5 w-full">
        <thead className="bg-green-600 text-white">
          <tr>
            <td className="px-4 py-1.5">Phone</td>
            <td className="px-4 py-1.5">Hits</td>
          </tr>
        </thead>
        <tbody>
          {products.slice(0,8).map((brand, index) => (
            <tr key={index} className={`border-b border-x border-dashed border-gray-400 ${index % 2 === 1 && "bg-green-100"}`}>
              <td className="px-4 py-1.5">{index+1}. {brand.title}</td>
              <td className="px-4 py-1.5">{brand.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
