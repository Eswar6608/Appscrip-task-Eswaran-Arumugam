"use client";

import { useState } from "react";
import styles from "../styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ logoSrc }) {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <header className={styles.header}>
      {/* top thin announcement bar */}
      <div className={styles.topbarContainer}>
        <div className={styles.topbarFirst}>
          <Image
            src="/navbarImages/element-4.png"
            alt="topLogo"
            width={16}
            height={16}
            style={{ objectFit: "contain" }}
          />
          Lorem ipsum dolor
        </div>
        <div className={styles.topbarSecond}>
          <Image
            src="/navbarImages/element-4.png"
            alt="topLogo"
            width={16}
            height={16}
            style={{ objectFit: "contain" }}
          />
          Lorem ipsum dolor
        </div>
        <div className={styles.topbarThird}>
          <Image
            src="/navbarImages/element-4.png"
            alt="topLogo"
            width={16}
            height={16}
            style={{ objectFit: "contain" }}
          />
          Lorem ipsum dolor
        </div>
      </div>

      <div className={styles.headerInner}>
        {/* left: mobile menu icon + brand */}
        <div className={styles.leftGroup}>
          <button
            aria-label="Toggle menu"
            className={`${styles.iconBtn} ${styles.hamburger}`}
            onClick={() => {
              console.log("Hamburger clicked");
              setMobileOpen(!mobileOpen);
            }}
          >
            {/* hamburger */}
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <rect width="20" height="2" rx="1"></rect>
              <rect y="6" width="20" height="2" rx="1"></rect>
              <rect y="12" width="20" height="2" rx="1"></rect>
            </svg>
          </button>

          <Link href="/" className={styles.brand}>
            <Image
              src="/navbarImages/Logo.png"
              alt="logo"
              width={35}
              height={35}
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>

        {/* mid-content */}
        <div className={styles.midContent}>
          <span className={styles.brandText}>LOGO</span>
        </div>

        {/* right icons */}
        <div className={styles.rightGroup}>
          {/* Search toggle/input */}
          <div className={styles.searchWrap}>
            {/* {showSearch ? (
              <input
                aria-label="Search products"
                className={styles.searchInput}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
              />
            ) : null} */}
            <button
              // aria-label="Toggle search"
              className={styles.iconBtn}
              // onClick={() => setShowSearch((s) => !s)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                <path
                  d="M21 21l-4.35-4.35"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <circle
                  cx="10.5"
                  cy="10.5"
                  r="5.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </button>
          </div>

          {/* wishlist */}
          <button aria-label="Wishlist" className={styles.iconBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
              <path
                d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 1 0-7.6 7.6L12 22l8.8-9.6a5.4 5.4 0 0 0 0-7.6z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </button>

          {/* cart placeholder (small circle uses product image later) */}
          <Link href="/" className={styles.iconBtn} aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
              <path
                d="M6 6h15l-1.6 9.2a2 2 0 0 1-2 1.6H8.6a2 2 0 0 1-2-1.6L5 2H2"
                stroke="currentColor"
                strokeWidth="1.4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* UserAccount */}
          <div className={styles.userWrap}>
            <button aria-label="User" className={styles.iconBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                <circle
                  cx="12"
                  cy="8"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  fill="none"
                />
                <path
                  d="M4 20c0-4 16-4 16 0"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  fill="none"
                />
              </svg>
            </button>
          </div>

          {/* user / language */}
          <div className={styles.langWrap}>
            <button className={styles.langBtn} aria-label="Language">
              ENG ▾
            </button>
          </div>
        </div>
      </div>

      {/* center nav links (hidden on very small screens) */}
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>
          SHOP
        </Link>
        <Link href="/" className={styles.navLink}>
          SKILLS
        </Link>
        <Link href="/" className={styles.navLink}>
          STORIES
        </Link>
        <Link href="/" className={styles.navLink}>
          ABOUT
        </Link>
        <Link href="/" className={styles.navLink}>
          CONTACT US
        </Link>
      </nav>

      {/* mobile nav drawer (simple, minimal DOM) */}
      {mobileOpen && (
        <div className={styles.mobileNav}>
          <Link href="/" className={styles.mobileLink}>
            Shop
          </Link>
          <Link href="/" className={styles.mobileLink}>
            Skills
          </Link>
          <Link href="/" className={styles.mobileLink}>
            Stories
          </Link>
          <Link href="/" className={styles.mobileLink}>
            About
          </Link>
          <Link href="/" className={styles.mobileLink}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
