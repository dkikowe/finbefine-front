import s from "./Banner.module.sass";

export default function Banner() {
  return (
    <div className={s.container}>
      <img
        src="/images/header-icons/banner.svg"
        alt="sds"
        className={s.banner1}
      />
      <div className={s.rest}>
        <img src="/images/main-icons/b1.svg" alt="sds" />
        <img src="/images/main-icons/b2.svg" alt="ds" />
      </div>
    </div>
  );
}
