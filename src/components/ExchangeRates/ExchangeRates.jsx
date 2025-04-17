import React from "react";
import styles from "./ExchangeRates.module.scss";

const currencies = [
  {
    name: "Доллар США",
    code: "1 USD",
    flag: "/images/main-icons/usa.svg",
    rate: "88.72 ₽",
    change: "+0.01",
    changePositive: true,
  },
  {
    name: "Евро",
    code: "1 EUR",
    flag: "/images/main-icons/EU.svg",
    rate: "88.72 ₽",
    change: "-0.02",
    changePositive: false,
  },
  {
    name: "Юань",
    code: "1 CNY",
    flag: "/images/main-icons/china.svg",
    rate: "88.72 ₽",
    change: "+0.01",
    changePositive: true,
  },
];

const ExchangeRates = () => {
  return (
    <div className={styles.exchangeRates}>
      <h2 className={styles.title}>Курс валют</h2>

      <div className={styles.currencyGrid}>
        {/* Флаги и названия */}
        <div className={styles.currencyCard}>
          {currencies.map((c, i) => (
            <React.Fragment key={i}>
              <div className={styles.currencyHeader}>
                <img src={c.flag} alt={c.code} className={styles.flag} />
                <div className={styles.currencyInfo}>
                  <span className={styles.currencyName}>{c.name}</span>
                  <span className={styles.currencyValue}>{c.code}</span>
                </div>
              </div>
              {i < currencies.length - 1 && <hr className={styles.line} />}
            </React.Fragment>
          ))}
        </div>

        {/* Курс + изменение */}
        <div className={styles.currencyCard}>
          {currencies.map((c, i) => (
            <React.Fragment key={i}>
              <div className={styles.rate}>
                <p className={styles.rating}>{c.rate}</p>
                <p
                  className={
                    c.changePositive
                      ? styles.rateChange
                      : styles.rateChangenegative
                  }
                >
                  {c.change}
                </p>
                <div className={styles.divider}></div>
                <img src="/images/main-icons/right.svg" alt="→" />
              </div>
              {i < currencies.length - 1 && <hr className={styles.line} />}
            </React.Fragment>
          ))}
        </div>

        {/* Покупка */}
        <div className={styles.currencyCard}>
          {currencies.map((_, i) => (
            <React.Fragment key={i}>
              <div className={styles.rateBuy}>
                <div className={styles.rateLeft}>
                  <p className={styles.titleCard}>Покупка</p>
                  <p className={styles.rating}>86.15 ₽</p>
                </div>
                <div className={styles.divider}></div>
                <img src="/images/main-icons/right.svg" alt="→" />
              </div>
              {i < currencies.length - 1 && <hr className={styles.line} />}
            </React.Fragment>
          ))}
        </div>

        {/* Продажа */}
        <div className={styles.currencyCard}>
          {currencies.map((_, i) => (
            <React.Fragment key={i}>
              <div className={styles.rateBuy}>
                <div className={styles.rateLeft}>
                  <p className={styles.titleCard}>Продажа</p>
                  <p className={styles.rating}>90.27 ₽</p>
                </div>
                <div className={styles.divider}></div>
                <img src="/images/main-icons/right.svg" alt="→" />
              </div>
              {i < currencies.length - 1 && <hr className={styles.line} />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.outlineButton}>Все курсы НБРФ</button>
        <button className={styles.primaryButton}>Конвертер валют</button>
      </div>
    </div>
  );
};

export default ExchangeRates;
