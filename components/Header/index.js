import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css"

function Header() {
    return (
      <header className={styles.header}>
        <Image
          src={`https://img.freepik.com/free-vector/black-background-with-motivating-text_1034-646.jpg?w=740&t=st=1673202965~exp=1673203565~hmac=81aafdaa57abe23c18150f048b8843d045410dc2f8b0b962347ef8a5db7d0bec`}
          width={50}
          height={50}
          />
        <Link href="/" className={styles.logo}>
          <span>BLOG</span>
        </Link>
        <nav>
            <Link href="/about" classname={styles.about}>
              About
            </Link>
        </nav>
        <nav>
            <Link href="https://github.com/yaseminceven" target="_blank" classname={styles.about}>
              Github
            </Link>
        </nav>
      </header>
    );
  }

  export default Header;