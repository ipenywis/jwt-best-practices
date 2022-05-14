import React from "react";
import { useEffect, useState } from "react";
import axios from "../../axios";
import { useAuth } from "../../hooks/auth";

export function Dashboard(props) {
  const { user } = useAuth();
  const [payment, setPayment] = useState(null);

  const [value, setValue] = useState("");

  console.log("User: ", user);

  const getPayment = async () => {
    const response = await axios.get("http://localhost:5000/api/v1/payment");

    if (response && response.data) {
      setPayment(response.data);
    }
  };

  useEffect(() => {
    getPayment();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h4>
        Dashboard! You're Authenticated!
        <b>Welcome 😃</b>
        <p>{payment}</p>
      </h4>
      <input
        type="text"
        placeholder="XSS Vulnerable Input"
        onChange={(e) => setValue(e.target.value)}
      />
      <span dangerouslySetInnerHTML={{ __html: value }}></span>
    </div>
  );
}
