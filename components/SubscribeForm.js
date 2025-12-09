// components/SubscribeForm.jsx
"use client";
import { useState } from "react";
import styles from "../styles/footer.module.css";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    // do client-side action / call API route
    console.log("subscribe", email);
    setEmail("");
  }
  return (
    <form className={styles.subscribeForm} onSubmit={handleSubmit}>
      <input
        aria-label="Email"
        placeholder="Enter your e-mail..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">SUBSCRIBE</button>
    </form>
  );
}
