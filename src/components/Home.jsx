import logo from "../assets/images/iteration-1-images/logo.svg";
import homeBanner from "../assets/images/iteration-1-images/home-banner.png";

const Home = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-start h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${homeBanner})` }}
    >
      {/* Logo Burada  */}
      <img src={logo} alt="Teknolojik Yemekler" className="h-12 mb-6 mt-20" />

      {/* Kod aciktirir... yazisi  */}
      <h1 className="text-4xl font-bold text-center leading-snug mb-6 drop-shadow-lg">
        KOD ACIKTIRIR <br /> PIZZA, DOYURUR
      </h1>

      {/* Siparis verme sayfasina git butonu */}
      <button className="btn-home">ACIKTIM</button>
    </div>
  );
};

export default Home;
