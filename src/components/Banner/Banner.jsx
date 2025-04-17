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
        <img src="/images/header-icons/banner1.svg" alt="" />
        <img src="/images/header-icons/banner2.svg" alt="" />
      </div>
    </div>
  );
}
