import React from "react";
import styles from "./News.module.sass";

const Offers = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Новости рынка и банков</h2>
      <div className={styles.tabs}>
        <div className={styles.mainTabs}>
          <span>Кредиты</span>
          <span>Мероприятия</span>
          <span>Курсы валют</span>
          <span>Криптовалюта</span>
          <span>Мнение</span>
          <span>Вклады</span>
        </div>
        <div className={styles.telega}>
          <span className={styles.tg}>Читайте также в</span>
          <img src="/images/main-icons/telegrammm.svg" alt="" />
        </div>
      </div>

      <div className={styles.news}>
        <div className={styles.newsTop}>
          <img src="/images/main-icons/news1.svg" alt="" />
          <img src="/images/main-icons/news2.svg" alt="" />
        </div>
        <div className={styles.newsBottom}>
          <img src="/images/main-icons/news3.svg" alt="" />
          <img src="/images/main-icons/news4.svg" alt="" />
          <img src="/images/main-icons/news5.svg" alt="" />
        </div>
      </div>

      <div className={styles.buttonWrap}>
        <button className={styles.button}>Читать еще</button>
      </div>
    </section>
  );
};

export default Offers;
