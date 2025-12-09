// lib/fetchProducts.js

// export async function fetchProducts() {
//   // Note: no client-side API key required for fakestoreapi.com
//   const res = await fetch("https://fakestoreapi.com/products", {
//     cache: "no-store",
//   });
//   if (!res.ok) throw new Error("Failed to fetch products");
//   const products = await res.json();
//   return products;
// }

// example in lib/fetchProducts.js
export async function fetchProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      console.error("products fetch failed", res.status);
      return [];
    }
    return await res.json();
  } catch (err) {
    console.error("fetchProducts error", err);
    return [];
  }
}
