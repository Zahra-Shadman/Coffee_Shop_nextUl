"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  weight: string;
  image: string;
}

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/Product.json");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="mx-auto  text-center  py-3">Shop Products</h1>
      <ul className=" grid  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 ">
        {products.map((product) => (
          <li
            key={product.id}
            className="p-2 rounded-md bg-gray-200 text-center text-black"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={350}
              height={100}
              className="mx-auto"
            />

            <h2 className="py-3 font-semibold">{product.name}</h2>
            <p className="text-pink-600 ">{product.description}</p>
            <p> ${product.price.toFixed(2)}</p>
            <p>Weight: {product.weight}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
