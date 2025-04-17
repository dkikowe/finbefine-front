import React from "react";
import styles from "./Dictionary.module.sass";

const Dictionary = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dictionary}>
        <div className={styles.header}>
          <div className={styles.titleRow}>
            <h2 className={styles.title}>Словарь банковских терминов</h2>
            <img
              src="/images/main-icons/dict.svg"
              alt="Dictionary icon"
              width={40}
              height={40}
            />
          </div>
          <p className={styles.subtitle}>
            Сложные финансовые понятия простым языком
          </p>
        </div>

        <div className={styles.linksBlock}>
          <p className={styles.links}>
            Как вывести деньги с Яндекса: обзор способов
          </p>
          <p className={styles.links}>
            Какой налог у самозанятых в 2024 году и что со страховыми взносами
          </p>
          <p className={styles.links}>
            Как вывести деньги с Hamster Kombat: пошаговое руководство
          </p>
        </div>

        <a href="#" className={styles.link}>
          Все термины и понятия
          <img src="/images/main-icons/arrow.svg" alt="" />
        </a>
      </div>
      <div className={styles.dictionary}>
        <div className={styles.header}>
          <div className={styles.titleRow}>
            <h2 className={styles.title}>Вопросы и ответы</h2>
            <img
              src="/images/main-icons/ask.svg"
              alt="Dictionary icon"
              width={40}
              height={40}
            />
          </div>
          <p className={styles.subtitle}>
            Сервис для решения любых финансовых вопросов
          </p>
        </div>

        <div className={styles.linksBlock}>
          <p className={styles.links}>
            Как и где я могу купить золото в слитках в РФ?
          </p>
          <p className={styles.links}>
            Что лучше купить золото или серебро для инвестиций?
          </p>
          <p className={styles.links}>Разные пробы золота, в чем разница?</p>
        </div>

        <a href="#" className={styles.link}>
          Все термины и понятия
          <img src="/images/main-icons/arrow.svg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Dictionary;
