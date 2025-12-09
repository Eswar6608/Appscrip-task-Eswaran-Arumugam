import ProductList from "@/components/ProductList";
import Navbar from "../components/Navbar";
import { fetchProducts } from "../lib/fetchProducts";
import ClientHomePage from "@/components/ClientHomePage";

export default async function HomePage() {
  const products = await fetchProducts();
  const logoSrc = products?.[0]?.image ?? null;
  return <ClientHomePage products={products} logoSrc={logoSrc} />;
}
