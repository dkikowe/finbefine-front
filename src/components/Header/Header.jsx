import React from "react";
import s from "./Header.module.sass";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.headTop}>
          <div className={s.logo}>
            <img src="/images/header-icons/header.svg" alt="" />
          </div>

          <div className={s.search}>
            <input type="text" placeholder="Поиск" className={s.searchInput} />
            <div className={s.searchIcon} />
          </div>

          <div className={s.user}>
            <div className={s.userCab}>
              <img src="/images/header-icons/location.svg" alt="" />
              <p className={s.loc}>Москва</p>
            </div>

            <div className={s.userCab}>
              <img src="/images/header-icons/cabinet.svg" alt="" />
              <p className={s.cabnik}>Личный кабинет</p>
            </div>
          </div>
        </div>

        <nav className={s.nav}>
          <ul className={s.navList}>
            <li className={s.navItem}>
              <a href="#" className={s.navLink}>
                Кредиты
              </a>
            </li>
            <li className={s.navItem}>
              <a href="#" className={s.navLink}>
                Страхование
              </a>
            </li>
            <li className={s.navItem}>
              <a href="#" className={s.navLink}>
                Займы
              </a>
            </li>
            <li className={s.navItem}>
              <a href="#" className={s.navLink}>
                Ипотека
              </a>
            </li>
            <li className={s.navItem}>
              <a href="#" className={s.navLink}>
                Вклады
              </a>
            </li>
            <li className={s.navItem}>
              <a href="#" className={s.navLink}>
                Карты
              </a>
            </li>
            <li className={s.navItem}>
              <a href="#" className={s.navLink}>
                Недвижимость
              </a>
            </li>
            <li className={s.navItem}>
              <a href="#" className={s.navLink}>
                Образование
              </a>
            </li>
            <li className={s.navItem}>
              <a href="#" className={s.navLink}>
                Новости
              </a>
            </li>
            <li className={s.navItem}>
              <a href="#" className={s.navLink}>
                Ещё
                <span className={s.moreIcon} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
