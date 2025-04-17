import React from "react";
import styles from "./Offers.module.sass";

const cards = [
  {
    bank: "Сбербанк",
    subtitle: "Кредит на любые цели",
    logo: "/images/main-icons/sber.svg",
  },
  {
    bank: "Альфабанк",
    subtitle: "Кредит на любые цели",
    logo: "/images/main-icons/alpha.svg",
  },
  {
    bank: "Совкомбанк",
    subtitle: "Лучший % на 7 месяцев",
    logo: "/images/main-icons/sber.svg",
  },
  {
    bank: "Сбербанк",
    subtitle: "Кредит на любые цели",
    logo: "/images/main-icons/sber.svg",
  },
];

const Offers = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Предложения месяца</h2>
      <div className={styles.tabs}>
        <span className={styles.activeTab}>Кредиты</span>
        <span>Займы</span>
        <span>Кредитные карты</span>
        <span>Страховки</span>
      </div>

      <div className={styles.cardGrid}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <div className={styles.bankName}>{card.bank}</div>
                <div className={styles.subtitle}>{card.subtitle}</div>
              </div>
              <img src={card.logo} className={styles.logo} alt="logo" />
            </div>
            <div className={styles.cardRow}>
              <span>до 18%</span>
              <p>годовых</p>
            </div>
            <div className={styles.cardRow}>
              <span>до 30 млн ₽</span>
              <p>кредит</p>
            </div>
            <div className={styles.cardRow}>
              <span>20%-40%</span>
              <p>ставка</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttonWrap}>
        <button className={styles.button}>Смотреть все предложения</button>
      </div>
    </section>
  );
};

export default Offers;
