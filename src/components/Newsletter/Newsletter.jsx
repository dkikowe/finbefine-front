import React from "react";
import styles from "./Newsletter.module.scss";

const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Подписывайтесь на нашу рассылку!</h2>
          <p className={styles.description}>
            Будьте в курсе последних новостей банков! Получайте уведомления о
            важных событиях в экономике России и мира.
          </p>
        </div>
        <div className={styles.form}>
          <div className={styles.inputWrapper}>
            <input type="email" placeholder="Email" className={styles.input} />
          </div>
          <button className={styles.button}>
            <span className={styles.buttonText}>Подписаться</span>
          </button>
        </div>
      </div>
      <img src="/images/main-icons/phones.svg" alt="" />
    </div>
  );
};

export default Newsletter;
