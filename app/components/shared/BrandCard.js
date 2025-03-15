import Link from "next/link";

export default function BrancdCard({ brand }) {
  return (
    <Link href={""} className="flex flex-col items-center shadow-md rounded p-4">
      {/* <span className="text-blue-600">{brand.icon}</span> */}
      <h5 className="mt-2.5 text-sm">{brand.name}</h5>
    </Link>
  );
}
