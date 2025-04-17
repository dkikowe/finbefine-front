import styles from "./Feedback.module.sass";

export default function Feedback() {
  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
        <h2 className={styles.title}>Последние отзывы о банках в России </h2>
        <div className={styles.feedbackBlock}>
          <img src="/images/main-icons/feedback.svg" alt="" />
          <img src="/images/main-icons/feedback1.svg" alt="" />
        </div>
      </section>
      <div className={styles.button}>
        <p> Все последние отзывы о банках в России</p>
        <img src="/images/main-icons/arrow.svg" alt="" />
      </div>
    </div>
  );
}
