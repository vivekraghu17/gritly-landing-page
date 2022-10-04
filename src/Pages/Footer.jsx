import React from "react";

export default function Footer() {
  return (
    <div
      className="footer"
      style={{ color: "white", backgroundColor: "#0e1555" }}
    >
      <span>All Right Reserved @Gritly {new Date().getFullYear()}</span>
    </div>
  );
}
