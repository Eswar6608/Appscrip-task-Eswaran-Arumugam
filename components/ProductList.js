"use client";
import { useMemo, useState, useEffect } from "react";
import styles from "../styles/product-list.module.css";
import FilterSidebar from "./FilterSidebar";
import ProductCard from "./ProductCard";

/**
 * initialProducts (array) comes from server page props
 *
 * Filtering approach:
 * - Ideal For maps some friendly options to fakestore categories (Men/Women/Kids -> product.category)
 * - Other filters are placeholders — they filter by checking title includes option text (case-insensitive)
 *
 * This keeps UI realistic while demonstrating filter functionality.
 */

export default function ProductList({ initialProducts = [] }) {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    idealFor: [], // e.g., ['Men']
    occasion: [],
    work: [],
    fabric: [],
    segment: [],
    suitableFor: [],
    rawMaterials: [],
    pattern: [],
  });

  const [sortBy, setSortBy] = useState("recommended"); // recommended | newest | popular | price-desc | price-asc
  const [query, setQuery] = useState("");

  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Map friendly Ideal For options to fakestore categories for demonstration
  const idealToCategory = {
    Men: "men's clothing",
    Women: "women's clothing",
    Kids: "kids", // no direct mapping in faux API, used for title match
    Jewelry: "jewelery",
    Electronics: "electronics",
  };

  // Handler: toggle a checkbox option inside a given filter group
  function handleToggle(group, option) {
    setFilters((prev) => {
      const set = new Set(prev[group]);
      if (set.has(option)) set.delete(option);
      else set.add(option);
      return { ...prev, [group]: Array.from(set) };
    });
  }

  function handleClearFilters() {
    setFilters({
      idealFor: [],
      occasion: [],
      work: [],
      fabric: [],
      segment: [],
      suitableFor: [],
      rawMaterials: [],
      pattern: [],
    });
  }

  // Compute filtered & sorted products
  const filtered = useMemo(() => {
    let out = initialProducts.slice();

    // Search query (basic)
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      out = out.filter((p) => p.title.toLowerCase().includes(q));
    }

    // Ideal For -> map to category matching if possible
    if (filters.idealFor.length) {
      const mapped = filters.idealFor.flatMap((opt) => {
        const m = idealToCategory[opt];
        return m ? [m.toLowerCase()] : [opt.toLowerCase()];
      });
      out = out.filter((p) => {
        const cat = (p.category || "").toLowerCase();
        // keep if category matches any mapped or title contains any option
        return mapped.some(
          (m) => cat.includes(m) || p.title.toLowerCase().includes(m)
        );
      });
    }

    // For other groups (placeholders) we filter by checking title includes selected option text
    [
      "occasion",
      "work",
      "fabric",
      "segment",
      "suitableFor",
      "rawMaterials",
      "pattern",
    ].forEach((g) => {
      if (filters[g]?.length) {
        const opts = filters[g].map((o) => o.toLowerCase());
        out = out.filter((p) =>
          opts.some((o) => p.title.toLowerCase().includes(o))
        );
      }
    });

    // Sorting
    if (sortBy === "price-desc") out.sort((a, b) => b.price - a.price);
    else if (sortBy === "price-asc") out.sort((a, b) => a.price - b.price);
    else if (sortBy === "newest") out.sort((a, b) => b.id - a.id);
    else if (sortBy === "popular")
      out.sort((a, b) =>
        a.rating?.rate ? b.rating.rate - a.rating.rate : b.id - a.id
      );
    // recommended -> keep as-is

    return out;
  }, [initialProducts, filters, query, sortBy]);

  // useEffect(() => {
  //   setMounted(true);
  //   function handleResize() {
  //     setIsMobile(window.innerWidth <= 500);
  //   }
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  useEffect(() => {
    // schedule the first mount flag update after effect begins (avoid sync setState in effect)
    const raf =
      typeof window !== "undefined"
        ? window.requestAnimationFrame(() => setMounted(true))
        : null;

    function handleResize() {
      setIsMobile(window.innerWidth <= 500);
    }

    // set initial isMobile safely (window exists because we're in useEffect)
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {/* toolbar */}
      <div className={styles.toolbar}>
        <div className={styles.toolbarLeft}>
          {/* Only show itemCount on desktop */}
          <span className={styles.itemCount}>
            {mounted && isMobile ? null : `${filtered.length} ITEMS`}
          </span>
          <button
            className={styles.hideBtn}
            onClick={() => setShowFilters((s) => !s)}
          >
            {showFilters ? "< HIDE FILTER" : "> SHOW FILTER"}
          </button>
        </div>

        <div className={styles.toolbarRight}>
          {/* Add vertical divider for mobile */}
          {mounted && isMobile && (
            <span className={styles.verticalDivider}></span>
          )}
          <div className={styles.sortWrap}>
            <SortDropdown sortBy={sortBy} onChange={setSortBy} />
          </div>
        </div>
      </div>

      <div
        className={styles.content}
        style={!showFilters ? { display: "block" } : undefined}
      >
        {showFilters && (
          <aside className={styles.sidebar}>
            <FilterSidebar
              filters={filters}
              onToggle={handleToggle}
              onClear={handleClearFilters}
            />
          </aside>
        )}

        <section className={styles.gridArea}>
          <div
            className={`${styles.grid} ${!showFilters ? styles.gridFour : ""}`}
          >
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// small Sort dropdown component (client)
function SortDropdown({ sortBy, onChange }) {
  const [open, setOpen] = useState(false);
  const options = [
    { id: "recommended", label: "RECOMMENDED" },
    { id: "newest", label: "NEWEST FIRST" },
    { id: "popular", label: "POPULAR" },
    { id: "price-desc", label: "PRICE : HIGH TO LOW" },
    { id: "price-asc", label: "PRICE : LOW TO HIGH" },
  ];

  return (
    <div style={{ position: "relative" }}>
      <button className={styles.sortBtn} onClick={() => setOpen((s) => !s)}>
        {options.find((o) => o.id === sortBy)?.label ?? "RECOMMENDED"} ▾
      </button>

      {open && (
        <div
          className={styles.sortDropdown}
          role="menu"
          onMouseLeave={() => setOpen(false)}
        >
          {options.map((opt) => (
            <div
              key={opt.id}
              className={`${styles.sortItem} ${
                sortBy === opt.id ? styles.activeSortItem : ""
              }`}
              onClick={() => {
                onChange(opt.id);
                setOpen(false);
              }}
            >
              {sortBy === opt.id ? "✓ " : ""}
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
