"use client";
import Image from "next/image";
import SubscribeForm from "./SubscribeForm";
import styles from "../styles/footer.module.css";
import { useState, useEffect } from "react";

export default function Footer() {
  const [openSection, setOpenSection] = useState({
    brand: false,
    quick: false,
    follow: false,
  });
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 500 : false
  );

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 500);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Replace paymentImages fetching with local images
  const paymentImages = [
    "/payments/Group 136188.png",
    "/payments/Group 136190.png",
    "/payments/Group 136192.png",
    "/payments/Group 136193.png",
    "/payments/Group 136194.png",
    "/payments/Group 136195.png",
  ];

  const currency = ["/payments/United States of America (US).png"];

  // Helper for toggling sections
  const toggleSection = (key) => {
    setOpenSection((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.topArea}>
        <div className={styles.left}>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <SubscribeForm />
        </div>
        <div className={styles.right}>
          <div className={styles.contact}>
            <h4>CONTACT US</h4>
            <div className={styles.contactItem}>+44 221 133 5360</div>
            <div className={styles.contactItem}>customercare@mettamuse.com</div>
          </div>
          <div className={styles.currency}>
            <h4>CURRENCY</h4>
            <div className={styles.currencyRow}>
              <span className={styles.flag}>
                <Image
                  src="/payments/United States of America (US).png"
                  alt="US Flag"
                  width={24}
                  height={16}
                  style={{ objectFit: "contain" }}
                />
              </span>
              <div>USD</div>
            </div>
            <p className={styles.small}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>
      <hr className={styles.rule} />
      <div className={styles.linksArea}>
        {/* Brand Section */}
        <div className={styles.col}>
          {isMobile ? (
            <button
              className={styles.dropdownBtn}
              onClick={() => toggleSection("brand")}
              aria-expanded={openSection.brand}
            >
              <h4 className={styles.brand}>mettā muse</h4>
              <span>{openSection.brand ? "▲" : "▼"}</span>
            </button>
          ) : (
            <h4 className={styles.brand}>mettā muse</h4>
          )}
          {(isMobile ? openSection.brand : true) && (
            <ul className={styles.linkList}>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          )}
        </div>
        {/* Quick Links Section */}
        <div className={styles.col}>
          {isMobile ? (
            <button
              className={styles.dropdownBtn}
              onClick={() => toggleSection("quick")}
              aria-expanded={openSection.quick}
            >
              <h4>QUICK LINKS</h4>
              <span>{openSection.quick ? "▲" : "▼"}</span>
            </button>
          ) : (
            <h4>QUICK LINKS</h4>
          )}
          {(isMobile ? openSection.quick : true) && (
            <ul className={styles.linkList}>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          )}
        </div>
        {/* Follow Us Section */}
        <div className={styles.col}>
          {isMobile ? (
            <button
              className={styles.dropdownBtn}
              onClick={() => toggleSection("follow")}
              aria-expanded={openSection.follow}
            >
              <h4>FOLLOW US</h4>
              <span>{openSection.follow ? "▲" : "▼"}</span>
            </button>
          ) : (
            <h4>FOLLOW US</h4>
          )}
          {(isMobile ? openSection.follow : true) && (
            <>
              <div className={styles.social}>
                <a
                  aria-label="Instagram"
                  className={styles.socialIcon}
                  href="#"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </a>
                <a aria-label="LinkedIn" className={styles.socialIcon} href="#">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="2" />
                    <path d="M8 11v6" />
                    <path d="M8 8v.01" />
                    <path d="M12 11v6" />
                    <path d="M16 11v6" />
                  </svg>
                </a>
              </div>
              <h4 className={styles.acceptsTitle}>mettā muse ACCEPTS</h4>
              <div className={styles.payments}>
                {paymentImages.map((src, idx) => (
                  <div className={styles.payIcon} key={idx}>
                    <Image
                      src={src}
                      alt={`payment-${idx}`}
                      width={56}
                      height={36}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div className={styles.copy}>
        <small>
          Copyright © {new Date().getFullYear()} mettāmuse. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
