import React from "react";

const AllBooks = () => {
  const handlePayment = async () => {
    try {
      // ✅ Call backend /pay route
      const res = await fetch("http://localhost:5000/pay");
      const data = await res.json();

      // ✅ Redirect user to SSLCommerz page
      window.location.href = data.paymentUrl;

    } catch (err) {
      console.error("Payment initiation failed:", err);
      alert("Payment start korte parlam na. Try again!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Buy Test Product - 100 BDT</h1>
      <button
        onClick={handlePayment}
        style={{
          padding: "12px 25px",
          fontSize: "18px",
          cursor: "pointer",
          borderRadius: "5px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none"
        }}
      >
        Pay Now
      </button>
    </div>
  );
};

export default AllBooks;
