"use client";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import { useEffect, useState } from "react";

export default function ClientHomePage({ products, logoSrc }) {
  // Show Home | Shop nav only on mobile (<=600px)
  const [showNavLinks, setShowNavLinks] = useState(false);
  useEffect(() => {
    function handleResize() {
      setShowNavLinks(window.innerWidth <= 600);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar logoSrc={logoSrc} />
      {showNavLinks && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingLeft: 30,
            marginTop: 18,
          }}
        >
          <a
            href="/"
            style={{
              fontWeight: "bold",
              color: "#BFC8CD",
              textDecoration: "none",
              marginRight: 10,
              fontSize: 16,
              paddingBottom: 2,
            }}
          >
            Home
          </a>
          <a
            href="/shop"
            style={{
              fontWeight: "bold",
              color: "#222",
              textDecoration: "none",
              fontSize: 16,
              paddingBottom: 2,
            }}
          >
            Shop
          </a>
        </div>
      )}
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 56px" }}>
        <header style={{ textAlign: "center", marginBottom: 28 }}>
          <h1 style={{ letterSpacing: 2, fontSize: 34 }}>
            DISCOVER OUR PRODUCTS
          </h1>
          <p style={{ color: "#666", maxWidth: 760, margin: "12px auto" }}>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </header>
        <ProductList initialProducts={products} />
        {/* <Footer /> */}
      </main>
    </>
  );
}
