import logo from "../assets/images/iteration-1-images/logo.svg";

const Success = ({ summary }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#CE2829] text-white">
      {/* Logo */}
      <div className="flex justify-center my-12">
        <img
          src={logo}
          alt="Teknolojik Yemekler"
          className="h-9 drop-shadow-md"
        />
      </div>

      {/* İçerik */}
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        {/* Başlıklar */}
        <div className="my-10 text-center">
          <h1 className="text-3xl my-3 satisfy-regular">lezzetin yolda</h1>
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 roboto-condensed-myFont">
            <span className="block sm:inline my-2">SİPARİŞ</span>{" "}
            <span className="block sm:inline my-2">ALINDI ! </span>
          </h1>
        </div>

        <hr className="w-1/3 border-white/60 mb-10" />

        {/* Sipariş Özeti */}
        {summary && (
          <>
            <div className="font-semibold my-7">
              Position Absolute Aci Pizza
            </div>
            <div className="bg-transparent p-6 w-full max-w-xs text-left font-semibold">
              <ul className="space-y-2">
                <li className="text-white/70">
                  Ad Soyad: <span className="text-white">{summary.name}</span>
                </li>
                <li className="text-white/70">
                  Boyut: <span className="text-white">{summary.size[0]}</span>
                </li>
                <li className="text-white/70">
                  Hamur: <span className="text-white">{summary.dough}</span>
                </li>
                <li className="text-white/70">
                  Ek Malzemeler:{" "}
                  <span className="text-white">
                    {summary.extras?.join(", ")}
                  </span>
                </li>
              </ul>
            </div>

            {/* Sipariş Toplamı Kartı */}
            <div className="my-10 p-6 w-full max-w-3xs border border-white/40 rounded-lg text-left">
              <h6 className="mb-4 font-semibold text-center">
                Sipariş Toplamı
              </h6>
              <div className="space-y-4">
                <p className="flex justify-between">
                  <span>Seçimler:</span>
                  <span>{summary.extras?.length * 5 * summary.quantity}₺</span>
                </p>
                <p className="flex justify-between">
                  <span>Toplam:</span>
                  <span>{summary.total} ₺</span>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Success;
