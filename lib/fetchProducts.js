// lib/fetchProducts.js

export async function fetchProducts() {
  // Note: no client-side API key required for fakestoreapi.com
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  const products = await res.json();
  return products;
}
