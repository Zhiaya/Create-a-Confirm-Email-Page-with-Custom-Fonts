"use client";
import CardProduct from "@/components/card/CardProduct";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ENDPOINT = "https://fakestoreapi.com/products/";

export default function page() {
  const [product, setProduct] = useState([]);
  const router = useRouter();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(ENDPOINT);
      const data = await response.json();
      setProduct(data);
    }

    fetchData();
  }, []);
  return (
    <div className="h-screen container mx-auto">
      <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"}>
        {product.map((item: any, index) => {
          return (
            <CardProduct
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              onClick={() => router.push(`/service/${item.id}`)}
            />
          );
        })}
      </div>
    </div>
  );
}
