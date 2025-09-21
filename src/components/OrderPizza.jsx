import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/images/iteration-1-images/logo.svg";
import axios from "axios";

const OrderPizza = ({ onSuccess }) => {
  const ingredientsList = [
    "Pepperoni",
    "Domates",
    "Biber",
    "Sosis",
    "Misir",
    "Sucuk",
    "Kanada Jambonu",
    "Ananas",
    "Tavuk Izgara",
    "Jalepeno",
    "Kabak",
    "Sogan",
    "Sarimsak",
  ];

  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(85.5);

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    defaultValues: {
      size: "Küçük",
      dough: "Hamur Kalınlığı",
      extras: [],
      note: "",
      name: "",
    },
  });

  const watchSize = watch("size", "Küçük");
  const watchDough = watch("dough", "Hamur Kalınlığı");
  const watchExtras = watch("extras", []);
  const watchNote = watch("note", "");
  const watchName = watch("name", "");

  const calculateTotal = () => {
    let newTotal = 85.5;
    newTotal += watchExtras.length * 5;
    newTotal *= quantity;
    setTotal(newTotal);
  };

  // form submit edildiginde yapilacaklar
  const onSubmit = async (data) => {
    const orderData = {
      ...data,
      quantity,
      total,
    };

    try {
      const response = await axios.post(
        "https://reqres.in/api/users",
        orderData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "reqres-free-v1",
          },
        }
      );

      console.log("Sipariş Özeti:", response.data);
      toast.success("Bizi Tercih Ettiginiz Icin Tesekkur Ederiz!");
      onSuccess(orderData);
    } catch (error) {
      console.error("Sipariş oluşturulamadı:", error);
      toast.error("Sipariş sırasında bir hata oluştu.");
    }
  };

  useEffect(() => {
    calculateTotal();
  }, [watchSize, watchDough, watchExtras, quantity]);

  return (
    <>
      {/* Header */}
      <header className="w-screen bg-red-600 shadow-md">
        <div className="py-6">
          <img src={logo} alt="Teknolojik Yemekler" className="h-12 mx-auto" />
        </div>
        <div className="pb-4">
          <nav className="flex justify-center">
            <ol className="flex flex-wrap space-x-2 text-sm text-white">
              <li>
                <a href="#" className="text-white">
                  Anasayfa
                </a>
              </li>
              <li>-</li>
              <li>
                <a href="#" className="text-white">
                  Seçenekler
                </a>
              </li>
              <li>-</li>
              <li className="font-semibold">Sipariş Oluştur</li>
            </ol>
          </nav>
        </div>
      </header>

      {/* İçerik */}
      <div className="max-w-2xl mx-auto px-4 py-8 flex flex-wrap items-center text-center">
        {/* Başlık */}
        <div className="justify-center text-center mt-4">
          <h5 className="label-left text-xl font-semibold mt-7 ">
            Position Absolute Acı Pizza
          </h5>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <p className="label-left text-xl font-bold mt-9">85.50₺</p>
            <p className="text-gray-500 place-self-end">4.9</p>
            <p className="text-gray-500 place-self-end">200</p>
          </div>

          <p className="label-left mt-4 text-gray-600 text-sm">
            FrontEnd Dev olarak hala position:absolute kullaniyorsan bu cok aci
            pizza tam sana gore. Pizza, domates, peynir ve genellikle cesitli
            diger malzemelerle kaplanmis, daha sonra geleneksel olarak odun
            atesinde bir firinda yuksek sicaklikta pisirilen, genellikle
            yuvarlak, duzlestirilmis mayali bugday bazli hamurdan olusan Italyan
            kokenli lezzetli bir yemektir. Kucuk bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-12 mt-20 w-full"
        >
          {/* Boyut ve Hamur */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Boyut */}
            <div className="text-left">
              <label className="block font-semibold mb-2 pb-3">
                Boyut Seç *
              </label>
              <Controller
                control={control}
                name="size"
                rules={{ required: "Lütfen bir boyut seçin" }}
                render={({ field, fieldState }) => (
                  <div className="flex flex-col space-y-2">
                    {["Küçük", "Orta", "Büyük"].map((size) => (
                      <label
                        key={size}
                        className="inline-flex items-center space-x-2"
                      >
                        <input
                          id={size}
                          type="radio"
                          value={size}
                          checked={field.value === size}
                          onChange={(e) => field.onChange(e.target.value)}
                          className="w-4 h-4 text-red-600"
                          data-cy={size}
                        />
                        <span>{size}</span>
                      </label>
                    ))}
                    {fieldState.error && (
                      <p className="text-red-500 text-sm mt-1">
                        {fieldState.error.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            {/* Hamur */}
            <div className="text-left">
              <label className="block font-semibold mb-2 pb-3">
                Hamur Seç *
              </label>
              <Controller
                control={control}
                name="dough"
                rules={{
                  validate: (value) =>
                    value !== "Hamur Kalınlığı" || "Lütfen bir hamur seçin",
                }}
                render={({ field, fieldState }) => (
                  <>
                    <select
                      {...field}
                      className="w-full border border-gray-300 rounded-lg p-2"
                    >
                      <option value="Hamur Kalınlığı">Hamur Kalınlığı</option>
                      <option value="İnce" data-cy="ince">
                        İnce
                      </option>
                      <option value="Kalın">Kalın</option>
                    </select>
                    {fieldState.error && (
                      <p className="error-text">{fieldState.error.message}</p>
                    )}
                  </>
                )}
              />
            </div>
          </div>

          {/* Ek Malzemeler */}
          <div className="text-left">
            <p className="text-lg font-semibold">Ek Malzemeler</p>
            <p className="text-sm text-gray-600 mb-2 py-5">
              En fazla 10 malzeme seçebilirsiniz. 5₺
            </p>
            <Controller
              control={control}
              name="extras"
              rules={{
                validate: (value) => {
                  if (!value || value.length < 4)
                    return "En az 4 malzeme seçmelisiniz";
                  if (value.length > 10)
                    return "En fazla 10 malzeme seçebilirsiniz";
                  return true;
                },
              }}
              render={({ field, fieldState }) => (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {ingredientsList.map((item, index) => {
                      const checked = field.value?.includes(item);
                      return (
                        <label
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <input
                            id={item}
                            type="checkbox"
                            value={item}
                            checked={checked}
                            onChange={(e) => {
                              let updated = checked
                                ? field.value.filter((v) => v !== item)
                                : [...(field.value || []), item];
                              field.onChange(updated);
                              setValue("extras", updated, {
                                shouldValidate: true,
                              });
                            }}
                            className="w-4 h-4 text-red-600"
                            data-cy={"extras-" + index}
                          />
                          <span className="text-gray-800">{item}</span>
                        </label>
                      );
                    })}
                  </div>
                  {fieldState.error && (
                    <p className="text-red-500 text-sm mt-2">
                      {fieldState.error.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>

          {/* Ad Soyad */}
          <div className="text-left">
            <label className="block font-semibold mb-2">Ad Soyad *</label>
            <Controller
              control={control}
              name="name"
              rules={{
                required: "Ad Soyad zorunludur",
                minLength: {
                  value: 3,
                  message: "Ad Soyad en az 3 karakter olmalıdır",
                },
              }}
              render={({ field, fieldState }) => (
                <>
                  <input
                    {...field}
                    type="text"
                    placeholder="Adınızı ve Soyadınızı girin"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    data-cy="name-input"
                  />
                  {fieldState.error && (
                    <p className="text-red-500 text-sm mt-1">
                      {fieldState.error.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>

          {/* Sipariş Notu */}
          <div className="text-left">
            <label className="block font-semibold mb-2">Sipariş Notu</label>
            <Controller
              control={control}
              name="note"
              render={({ field }) => (
                <textarea
                  {...field}
                  placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              )}
            />
          </div>

          {/* Çizgi */}
          <div className="border-t border-gray-300 pt-3"></div>

          {/* Sayaç + Toplam */}
          <div className="mt-6 flex flex-col md:flex-row justify-between items-start w-full">
            {/* Sayaç */}
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                className="btn-quantity"
              >
                −
              </button>
              <span className="text-xl w-6 text-center">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="btn-quantity"
              >
                +
              </button>
            </div>

            {/* Toplam */}
            <div className="w-full md:w-2/3 lg:w-1/2 bg-white border border-gray-200 shadow-md rounded-lg  text-center mt-6 md:mt-0">
              <h6 className="text-lg font-bold mb-4 text-gray-800 px-6 pt-6">
                Sipariş Toplamı
              </h6>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 px-6">Seçimler:</span>
                <span className="text-gray-800 px-6 ">
                  {(watchExtras.length * 5 * quantity).toFixed(2)}₺
                </span>
              </div>
              <div className="flex justify-between items-center text-red-600 px-6">
                <span>Toplam:</span>
                <span>{total.toFixed(2)}₺</span>
              </div>
              <button
                type="submit"
                disabled={!isValid}
                className="btn-primary"
                data-cy="order-button"
              >
                Sipariş Ver
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default OrderPizza;
