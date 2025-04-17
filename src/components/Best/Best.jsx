import styles from "./Best.module.sass";

export default function Best() {
  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
        <h2 className={styles.title}>
          Лучшие условия по продуктам в банках в России
        </h2>
        <div className={styles.tabs}>
          <div className={styles.mainTabs}>
            <span>Кредиты</span>
            <span>Вклады</span>
            <span>Ипотека</span>
            <span>Кредитные карты</span>
            <span>Дебетовые карты</span>
          </div>
          <div className={styles.telega}>
            <span className={styles.tg}>Читайте также в</span>
            <img src="/images/main-icons/telegrammm.svg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
