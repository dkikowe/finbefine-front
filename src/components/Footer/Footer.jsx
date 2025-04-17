import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <div className={styles.footerImage}>
            <img src="/images/footer-icons/footer-image.svg" alt="Footer" />
          </div>
        </div>

        <div className={styles.footerMiddle}>
          <div className={styles.logo}>
            <img src="/images/header-icons/header.svg" alt="" />
          </div>
          <div className={styles.socialLinks}>
            <p className={styles.socialText}>Оставайтесь с нами:</p>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon}>
                <img src="/images/footer-icons/telega.svg" alt="" />
              </a>
              <a href="#" className={styles.socialIcon}>
                <img src="/images/footer-icons/odnokl.svg" alt="" />
              </a>
              <a href="#" className={styles.socialIcon}>
                <img src="/images/footer-icons/vk.svg" alt="" />
              </a>
              <a href="#" className={styles.socialIcon}>
                <img src="/images/footer-icons/dzen.svg" alt="Social" />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.footerBottom}>
          <div className={styles.contactInfo}>
            <h3 className={styles.contactTitle}>Служба поддержки клиентов:</h3>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <img src="/images/footer-icons/telegaGray.svg" alt="" />
              </div>
              <span className={styles.contactText}>В Telegram</span>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <img src="/images/footer-icons/mail.svg" alt="" />
              </div>
              <span className={styles.contactText}>support@bankis.ru</span>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <img src="/images/footer-icons/phone.svg" alt="" />
              </div>
              <span className={styles.contactText}>8 (800) 777-98-47</span>
            </div>
          </div>

          <div className={styles.addressInfo}>
            <div className={styles.addressItem}>
              <img src="/images/footer-icons/locationFooter.svg" alt="" />
              <p className={styles.addressText}>
                117342, Москва, ул. Бутлерова, дом 17, БЦ Neo Geo, офис 4070
              </p>
            </div>
            <div className={styles.addressItem}>
              <img src="/images/footer-icons/locationFooter.svg" alt="ds" />

              <span className={styles.addressText}>Мы в Яндекс картах</span>
            </div>
          </div>
          <div className={styles.footerLinks}>
            <p>
              О проекте СМИ о нас Авторы и эксперты Вакансии Реклама на сайте
              Отписаться Юридическая информация Контакты Карта сайта
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
