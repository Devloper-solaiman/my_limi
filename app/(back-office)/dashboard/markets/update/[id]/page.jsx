import { getData } from "@/lib/getData";
import Image from "next/image";
import React from "react";

export default async function UpdateMarket({ params: { id } }) {
  const markets = await getData(`markets/${id}`);

  console.log(markets);
  return (
    <div className="max-w-sm mx-auto my-10 py-50 px-8 bg-gray-700 border border-gray-200 rounded-lg shadow-md">
      {/* Title */}
      <h1 className="text-3xl font-bold p-4">{markets.title}</h1>
      
      {/* Image */}
      <Image
        alt={markets.title}
        src={markets.logoUrl}
        width={200}
        height={200}
        className="rounded-lg"
      />

      {/* Slug */}
      <div className="p-4">
        <h4 className="text-lg font-semibold">Slug: {markets.slug}</h4>
        
        {/* Description */}
        <p className="mt-2">Description: {markets.description}</p>

      </div>
    </div>
  );
}
