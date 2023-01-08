import React from "react";

import styles from "./styles.module.css"

export default function NotFound() {
  return (
    <div>
      <h1 className={styles.h1}>Blog doesn't exist</h1>
      <img className={styles.img} src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-13617.jpg?w=1060&t=st=1673194716~exp=1673195316~hmac=46bec5824242ab88b5e3d2c61d241e22a662c7b233ea99a6a2f02e309b54222f" alt="not found"></img>
    </div>
  );
}