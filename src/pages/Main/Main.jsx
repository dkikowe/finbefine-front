import Banner from "../../components/Banner/Banner";
import ExchangeRates from "../../components/ExchangeRates/ExchangeRates";
import Nav from "../../components/Nav/Nav";
import Offers from "../../components/Offers/Offers";
import s from "./Main.module.sass";
import News from "../../components/News/News";
import Events from "../../components/Events/Events";
import Best from "../../components/Best/Best";
import Feedback from "../../components/Feedback/Feedback";
import Dictionary from "../../components/Dictionary/Dictionary";
import InfoSection from "../../components/Info/Info";
import Newsletter from "../../components/Newsletter/Newsletter";

export default function Main() {
  return (
    <div className={s.container}>
      <Banner />
      <Nav />
      <ExchangeRates />
      <Offers />
      <News />
      <Events />
      <Best />
      <Feedback />
      <Dictionary />
      <InfoSection />
      <Newsletter />
    </div>
  );
}
