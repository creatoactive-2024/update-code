import React from "react";
import baseURL from "../utils/baseURL"

const CheckoutButton: React.FC = () => {
  const handleCheckout = async (): Promise<void> => {
    try {
      const res = await fetch(`${baseURL}/api/users/paymentt`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Define expected response type
      interface CheckoutSessionResponse {
        id?: string;
        url?: string;
        error?: string;
      }

      const data: CheckoutSessionResponse = await res.json();

      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        alert(data.error || "Error creating checkout session");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Something went wrong");
    }
  };

  return (
    <button
      onClick={handleCheckout}
      style={{
        padding: "10px 20px",
        background: "#6772E5",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Pay $10
    </button>
  );
};

export default CheckoutButton;
