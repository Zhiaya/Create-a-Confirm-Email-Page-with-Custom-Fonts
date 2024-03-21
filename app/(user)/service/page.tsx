"use client";
import CardProduct from "@/components/card/CardProduct";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ENDPOINT = "https://fakestoreapi.com/products/";

export default function page() {
	const [products, setProducts] = useState([]);
	const router = useRouter();

	useEffect(() => {
		fetch(ENDPOINT)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	return (
		<div className="h-screen flex flex-wrap justify-center gap-3">
			{products.map((product: any, index) => (
				<CardProduct
          onClick={() => router.push(`/service/${product.id}`)}
					key={index}
					title={product.title}
					image={product.image}
					price={product.price}
				/>
			))}
		</div>
	);
}
