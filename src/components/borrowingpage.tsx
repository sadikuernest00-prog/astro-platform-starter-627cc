import React from "react";

export default function BorrowingPage() {
  return (
    <div style={{
      background: "linear-gradient(145deg, #0f172a 0%, #1e293b 100%)",
      borderRadius: "16px",
      padding: "60px",
      textAlign: "center",
      boxShadow: "0 4px 20px rgba(0,0,0,0.4)"
    }}>
      <h1 style={{
        fontSize: "48px",
        fontWeight: 600,
        color: "white",
        margin: "0"
      }}>
        Borrowing
      </h1>
      <p style={{
        color: "#cbd5e1",
        fontSize: "18px",
        marginTop: "20px"
      }}>
        This page can explain your borrowing system — such as how users borrow resources,
        credits, or assets within your application. You can later add forms, data,
        or API connections here.
      </p>
    </div>
  );
}
