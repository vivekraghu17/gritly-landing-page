import React from "react";
import styles from "../Stylesheets/header.module.scss";
import gritlyLogo from "../Assets/Images/gritly-logo.png";
import { Button } from "@mui/material";
export default function Header() {
  return (
    <div className={styles["main-div"]}>
      <div className={styles["logo-section"]}>
        <img src={gritlyLogo} alt="logo" className={styles["gritly-logo"]} />
      </div>
      <div className={styles["right-side-header"]}>
        <div className={styles["how-we-work-link"]}>How we work</div>
        <div className={styles["for-companies"]}>For Companies</div>
        <div className={styles["apply-now-section"]}>
          <Button className={styles["apply-now-button"]}>Apply Now</Button>
        </div>
      </div>
    </div>
  );
}
