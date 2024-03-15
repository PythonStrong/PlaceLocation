import Hero from "@/components/FirstPage/Hero";
import Main from "@/components/FirstPage/Main";
import MainBottom from "@/components/FirstPage/MainBottom";
import MainTop from "@/components/FirstPage/MainTop";

export default function Home() {
  return (
    <div>
      <div className="hero_parent hero">
        <Hero />
      </div>
      <div className="mainTop hero">
        <MainTop />
      </div>
      <div className="main hero">
        <Main />
      </div>
      <div>
        <MainBottom />
      </div>
    </div>
  );
}
