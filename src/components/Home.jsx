import logo from "../assets/images/iteration-1-images/logo.svg";
import footer_logo from "../assets/images/iteration-2-images/footer/logo-footer.svg";
import homeBanner from "../assets/images/iteration-1-images/home-banner.png";
import nav_1 from "../assets/images/iteration-2-images/icons/nav_1.svg";
import nav_2 from "../assets/images/iteration-2-images/icons/nav_2.svg";
import nav_3 from "../assets/images/iteration-2-images/icons/nav_3.svg";
import nav_4 from "../assets/images/iteration-2-images/icons/nav_4.svg";
import nav_5 from "../assets/images/iteration-2-images/icons/nav_5.svg";
import nav_6 from "../assets/images/iteration-2-images/icons/nav_6.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = ({ goToOrder }) => {
  return (
    <div id="container">
      <header
        className="relative flex flex-col items-center justify-start h-screen text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${homeBanner})` }}
      >
        {/* Logo Burada  */}
        <img src={logo} alt="Teknolojik Yemekler" className="h-12 mb-6 mt-20" />

        {/* Kod aciktirir... yazisi  */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center leading-snug mb-6 drop-shadow-lg roboto-condensed-myFont">
          <span className="block sm:inline">KOD</span>{" "}
          <span className="block sm:inline">ACIKTIRIR</span>
          <br className="hidden sm:block" />
          <span className="block sm:inline">PIZZA,</span>{" "}
          <span className="block sm:inline">DOYURUR</span>
        </h1>

        {/* Siparis verme sayfasina git butonu */}
        <button
          className="btn-home"
          onClick={() => {
            toast.info("Siparis sayfasina hosgeldiniz:)", {
              theme: "colored",
              autoClose: 2000,
            });
            goToOrder();
          }}
          data-cy="home-button"
        >
          ACIKTIM
        </button>
      </header>

      <nav className="grid grid-cols-3 sm:grid-cols-6 gap-1 py-6 bg-white w-2/3 mx-auto">
        {[
          { img: nav_1, label: "YENİ! Kore" },
          { img: nav_2, label: "Pizza" },
          { img: nav_3, label: "Burger" },
          { img: nav_4, label: "Kızartmalar" },
          { img: nav_5, label: "Fast Food" },
          { img: nav_6, label: "Gazlı İçecek" },
        ].map(({ img, label }) => (
          <div
            key={label}
            className="flex flex-row items-center gap-2 text-sm font-medium"
          >
            <img src={img} alt={label} className="h-7 mb-2" />
            <span>{label}</span>
          </div>
        ))}
      </nav>

      <main className="home-main">
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 w-2/3 mx-auto py-20">
            {/* sol büyük kutu */}
            <div className="bg-red-600 container-images md:row-span-2 bg-pizza">
              <h2 className="text-2xl font-bold mb-4">Özel Lezzetus</h2>
              <p className="text-sm mb-6">Position Absolute Acı Burger</p>
              <button className="bg-white text-red-600 font-semibold py-2 px-4 rounded-lg w-max">
                SİPARİŞ VER
              </button>
            </div>

            {/* sağ üst */}
            <div className="bg-gray-900 container-images bg-burger">
              <h2 className="text-xl font-bold mb-4">
                Hackathlon <br /> Burger Menü
              </h2>
              <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg w-max">
                SİPARİŞ VER
              </button>
            </div>

            {/* sağ alt */}
            <div className="bg-yellow-100 text-gray-900 container-images bg-courier">
              <h2 className="text-xl font-bold mb-4">
                Çoooook hızlı npm gibi kurye
              </h2>
              <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg w-max">
                SİPARİŞ VER
              </button>
            </div>
          </div>

          {/**yazilar  */}
          <h3 className="text-center !text-red-500 italic mb-2 satisfy-regular text-2xl">
            en çok paketlenen menüler
          </h3>
          <h2 className="text-center text-2xl quattrocento-regular mb-8">
            Acıktıran Kodlara Doyuran Lezzetler
          </h2>

          {/**butonlar  */}
          <div className="flex justify-center flex-wrap gap-4 my-12">
            {[
              "Ramen",
              "Pizza",
              "Burger",
              "French fries",
              "Fast food",
              "Soft drinks",
            ].map((item, i) => (
              <button
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium bg-white"
              >
                <img
                  src={`src/assets/images/iteration-2-images/icons/nav_${
                    i + 1
                  }.svg`}
                ></img>{" "}
                {item}
              </button>
            ))}
          </div>

          {/* 3'lu kart  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-7 w-2/3 mx-auto">
            <div className="bg-white rounded-2xl shadow p-4 text-center">
              <img
                src="src/assets/images/iteration-2-images/pictures/food-1.png"
                alt="Terminal Pizza"
                className="mx-auto h-40 object-contain mb-4"
              />
              <h3 className="font-semibold">Terminal Pizza</h3>
              <p className="text-gray-500 text-sm">(200)</p>
              <p className="font-bold mt-2">60₺</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-4 text-center">
              <img
                src="src/assets/images/iteration-2-images/pictures/food-2.png"
                alt="Position Absolute Acı Pizza"
                className="mx-auto h-40 object-contain mb-4"
              />
              <h3 className="font-semibold">Position Absolute Acı Pizza</h3>
              <p className="text-gray-500 text-sm">(829)</p>
              <p className="font-bold mt-2">85₺</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-4 text-center">
              <img
                src="src/assets/images/iteration-2-images/pictures/food-3.png"
                alt="useEffect Tavuklu Burger"
                className="mx-auto h-40 object-contain mb-4"
              />
              <h3 className="font-semibold">useEffect Tavuklu Burger</h3>
              <p className="text-gray-500 text-sm">(462)</p>
              <p className="font-bold mt-2">75₺</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black text-white pt-12 pb-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/** logo ve İletişim kismi */}
          <div>
            <img
              src={footer_logo}
              alt="Teknolojik Yemekler Logo"
              className="h-12 mb-4"
            />
            <p className="flex items-center text-sm text-gray-300">
              <span className="footer-icon icon-location"></span>
              341 Londonderry Road <br /> İstanbul Türkiye
            </p>

            <p className="flex items-center mt-3 text-sm text-gray-300">
              <span className="footer-icon icon-mail"></span>
              aciktim@teknolojikyemekler.com
            </p>

            <p className="flex items-center mt-2 text-sm text-gray-300">
              <span className="footer-icon icon-phone"></span>
              +90 216 123 45 67
            </p>
          </div>

          {/**ortadaki menu kismi  */}
          <div>
            <h5 className="font-semibold">Siccacik Menuler</h5>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Terminal Pizza
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  5 Kisilik Hackathlon Pizza
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  useEffect Tavuklu Pizza
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Beyaz Console Frosty
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Testler Gecti Mutlu Burger
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Position Absolute Aci Pizza
                </a>
              </li>
            </ul>
          </div>

          {/** sagdaki insta kismi */}
          <div>
            <h6>Instagram</h6>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="insta insta-1"></div>
              <div className="insta insta-2"></div>
              <div className="insta insta-3"></div>
              <div className="insta insta-4"></div>
              <div className="insta insta-5"></div>
              <div className="insta insta-6"></div>
            </div>
          </div>
        </div>

        {/** en alt kisim >*/}
        <div className="max-w-6xl mx-auto px-6 mt-8 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© 2023 Teknolojik Yemekler.</p>
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </footer>
    </div>
  );
};

export default Home;
