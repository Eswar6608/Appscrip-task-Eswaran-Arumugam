"use client";

import { useEffect, useState } from "react";
import { fetchProducts } from "../lib/fetchProducts";
import ClientHomePage from "@/components/ClientHomePage";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [logoSrc, setLogoSrc] = useState(null);

  useEffect(() => {
    async function load() {
      const res = await fetchProducts();
      setProducts(res);
      setLogoSrc(res?.[0]?.image ?? null);
    }
    load();
  }, []);

  return <ClientHomePage products={products} logoSrc={logoSrc} />;
}
