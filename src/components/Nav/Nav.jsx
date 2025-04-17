import s from "./Nav.module.sass";

const icons = [
  {
    title: "Кредиты",
    img: "/images/main-icons/loan.svg", // Заглушка
  },
  {
    title: "Страхование",
    img: "/images/main-icons/insurance.svg",
  },
  {
    title: "Займы",
    img: "/images/main-icons/wallet.svg",
  },
  {
    title: "Ипотека",
    img: "/images/main-icons/ipoteka.svg",
  },
  {
    title: "Вклады",
    img: "/images/main-icons/vklad.svg",
  },
  {
    title: "Карты",
    img: "/images/main-icons/card.svg",
  },
  {
    title: "Калькулятор",
    img: "/images/main-icons/calc.svg",
  },
  {
    title: "Рейтинг",
    img: "/images/main-icons/rating.svg",
  },
];

export default function Nav() {
  return (
    <div className={s.container}>
      <div className={s.cards}>
        {icons.map((icon, index) => (
          <div key={index} className={s.card}>
            <img src={icon.img} alt={icon.title} className={s.image} />
            <div className={s.label}>{icon.title}</div>
          </div>
        ))}
      </div>
      <div className={s.all}>
        <p> Все сервисы</p>
      </div>
    </div>
  );
}
