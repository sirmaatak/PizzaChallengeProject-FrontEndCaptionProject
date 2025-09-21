import logo from "../assets/images/iteration-1-images/logo.svg";

const Success = () => {
  return (
    <div className="flex flex-col h-screen bg-[#CE2829] text-white">
      {/* Logo en üstte */}
      <div className="flex justify-center mt-20">
        <img
          src={logo}
          alt="Teknolojik Yemekler"
          className="h-9 drop-shadow-md"
        />
      </div>

      {/* Orta içerik */}
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        <h1 className="text-4xl  font-bold mb-7 ">TEBRİKLER!</h1>
        <h1 className="text-4xl  font-bold mb-7 ">SİPARİŞİNİZ ALINDI!</h1>

        <p className="text-lg md:text-xl text-white">
          En kısa sürede hazırlanıp yola çıkacak 🚀
        </p>
      </div>
    </div>
  );
};

export default Success;
