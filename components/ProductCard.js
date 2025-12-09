// components/ProductCard.jsx
"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/product-card.module.css";

export default function ProductCard({ product }) {
  const [wished, setWished] = useState(false);
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        {/* Using next/image for optimization */}
        <Image
          src={product.image}
          alt={product.title}
          width={420}
          height={320}
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className={styles.meta}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.row}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          <button
            className={wished ? styles.wish : styles.wish}
            aria-label="Add to wishlist"
            onClick={() => setWished((prev) => !prev)}
          >
            {wished ? (
              <span style={{ color: "#e11d48" }}>&#10084;</span> // filled heart
            ) : (
              <span style={{ color: "#aaa" }}>&#9825;</span> // outline heart
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
