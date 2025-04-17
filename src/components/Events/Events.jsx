import React, { useRef } from "react";
import styles from "./Events.module.scss";

const Events = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -containerRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: containerRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.events}>
      <div className={styles.header}>
        <h2 className={styles.title}>Интервью</h2>
        <div className={styles.controls}>
          <button className={styles.controlButton} onClick={scrollLeft}>
            <div className={styles.controlIcon}>
              <img src="/images/main-icons/left.svg" alt="" />
            </div>
          </button>
          <button className={styles.controlButton} onClick={scrollRight}>
            <div className={styles.controlIcon}>
              <img
                src="/images/main-icons/left.svg"
                alt=""
                className={styles.right}
              />
            </div>
          </button>
        </div>
      </div>

      <div className={styles.eventsList} ref={containerRef}>
        {[1, 2].map((_, index) => (
          <div className={styles.eventCard} key={index}>
            <div className={styles.eventImage}>
              <iframe
                width="387"
                height="269"
                src="https://www.youtube.com/embed/iSf3fHNCoHY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className={styles.eventContent}>
              <h3 className={styles.eventTitle}>
                Kinza360: Международный форум возвращается в Алматы. 25-26 авг
              </h3>
              <div className={styles.eventMeta}>
                <div className={styles.metaItem}>
                  <img src="/images/main-icons/view.svg" alt="" />
                  <span>265</span>
                </div>
                <div className={styles.metaItem}>
                  <img src="/images/main-icons/time.svg" alt="" />
                  <span>16.09.24</span>
                </div>
                <div className={styles.metaItem}>
                  <img src="/images/main-icons/view.svg" alt="" />
                  <span>1мин</span>
                </div>
              </div>
              <p className={styles.eventDescription}>
                На фоне ослабления экспортной выручки и умеренных цен на нефть
                рубль может потерять позиции до конца года. Такой прогноз курса
                валют Bankiros.ru дал Александр Потавин, аналитик ФГ «Финам».
              </p>
              <button className={styles.readMore}>Читать дальше</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
