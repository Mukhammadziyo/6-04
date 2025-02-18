import NavLikns from "../components/NavLinks";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <NavLikns />
      <h2 className="text-center text-3xl">Jahon Yangiliklari</h2>
      <div className="mb-10 mt-10 flex gap-4 mx-auto max-w-[1319px] w-full px-[50px]">
        <div className="card bg-gray-600 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title bg-blue-600 text-white rounded-md p-1">
              Dunyo
            </h2>
            <p>Ar-Riyodda Rossiya va AQSH qanday kelishuvlarga erishdi?</p>
          </div>
          <figure>
            <img
              src="https://daryo.uz/static/2025/02/18/photo_2025-02-18_18-09-33-2V4WFCnl.jpg"
              alt="Shoes"
            />
          </figure>
        </div>
        <div className="card bg-gray-600 bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://daryo.uz/static/2025/02/18/photo_2025-02-18_16-52-27-WtbREiNd.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title bg-blue-600 text-white rounded-md p-1">
              Dunyo
            </h2>
            <p>Putin Zelenskiy bilan bir shartga ko‘ra uchrashishga rozi</p>
          </div>
        </div>
        <div className="card bg-gray-600 bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title bg-blue-600 text-white rounded-md p-1">
              Dunyo
            </h2>
            <p>
              Bolalarning so‘nggi tilagini amalga oshirgan, uysizlarga yordam
              bergan va boshqa insoniylik fazilatlari bilan tanilgan Gollivud
              aktyorlari
            </p>
          </div>
          <figure>
            <img
              src="https://daryo.uz/static/2025/02/17/2-sSi5dchc.jpg"
              alt="Shoes"
            />
          </figure>
        </div>
      </div>
      <h2 className="text-center text-3xl mb-3">Uzbekiston</h2>
      <div className="w-full h-80 flex gap-5 carousel rounded-box">
        <div className="flex flex-col gap-2 w-80 h-40 carousel-item">
          <img
            src="https://daryo.uz/static/2025/02/little-67ac5a39cb44c.jpg"
            alt="Burger"
          />
          <h4>
            Komil Allamjonovga suiqasd bo‘yicha 10 kishiga sud hukmi e’lon
            qilindi
          </h4>
        </div>
        <div className="flex flex-col gap-2 w-80 h-40 carousel-item">
          <img
            src="https://daryo.uz/static/2025/01/little-6784c7819b498.jpg"
            alt="Burger"
          />
          <h4>
            “Haydovchisi va qo‘riqchilari mayda bezorilikda ayblanib, 15 sutkaga
            qamalgan”. Allamjonovga suiqasd ishiga aloqador yana bir sud
            tafsiloti
          </h4>
        </div>
        <div className="flex flex-col gap-2 w-80 h-40 carousel-item">
          <img
            src="https://daryo.uz/static/2025/02/little-67b3fb6b525f6.jpg"
            alt="Burger"
          />
          <h4>Kanadada yo‘lovchi samolyoti ag‘darilib ketdi (video) </h4>
        </div>
        <div className="flex flex-col gap-2 w-80 h-40 carousel-item">
          <img
            src="https://daryo.uz/static/2025/01/little-6780f582bbcd6.jpg"
            alt="Burger"
          />
          <h4>
            Komil Allamjonovga suiqasd bo‘yicha 10 kishiga sud hukmi e’lon
            qilindi
          </h4>
        </div>
        <div className="flex flex-col gap-2 w-80 h-40 carousel-item">
          <img
            src="https://daryo.uz/static/2024/12/little-676eca1559b57.jpg"
            alt="Burger"
          />
          <h4>
            Bosh prokuratura Komil Allamjonovni o‘ldirish uchun yollangan
            shaxslar bo‘yicha ma’lumot berdi
          </h4>
        </div>
        <div className="flex flex-col gap-2 w-80 h-40 carousel-item">
          <img
            src="https://daryo.uz/static/2024/12/little-67652f303b596.jpg"
            alt="Burger"
          />
          <h4>
            Bosh prokuratura Komil Allamjonovni o‘ldirish uchun yollangan
            shaxslar bo‘yicha ma’lumot berdi
          </h4>
        </div>
        <div className="flex flex-col gap-2 w-80 h-40 carousel-item">
          <img
            src="https://daryo.uz/static/2025/02/little-67b30fe140a17.jpg"
            alt="Burger"
          />
          <h4 className="">
            “Ozarbayjon endi kichik uka emas” — sovuqlashgan ozar-rus
            munosabatlari qanday oqibatga olib keladi?
          </h4>
        </div>
      </div>
      <div className="mt-6 mb-6 flex gap-4 mr-auto max-w-[1319px]  px-[50px]">
        <div className=" card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://avatars.mds.yandex.net/get-direct/363782/nIvzPwKOhN1YJtoj6HIjjg/y450"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2>gettransfer.com Реклама</h2>
            <p className="card-title">Закажите трансфер в Грузии</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Узнать больше</button>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center text-3xl">Lifestyle</h2>
      <div className="mt-6 mb-6 flex gap-4 mx-auto max-w-[1319px]  px-[50px]">
        <div className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img
              src="https://daryo.uz/static/2025/02/18/photo_6_2025-02-18_17-36-49-dkdk0rZ1.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Madaniyat</h2>
            <p className="">
              “Davlat rahbarlari ham inson, ularning ham hissiyoti bor” — Mahmud
              Namozov tadbirlarda prezident san’atkorlarga nimalar deyishi
              haqida gapirdi
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Bugun, 20:11</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img
              src="https://daryo.uz/static/2025/02/18/hom-_3E6xjw5.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Pul</h2>
            <p className="">
              O‘zbekistonda xususiy sektordagi qancha ayolga homiladorlik va
              tug‘ish nafaqasi berilgani ma’lum bo‘ldi
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Bugun, 20:11</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img
              src="https://daryo.uz/static/2025/02/17/803853542dcf5e65eee737933b5bd9d5_cropped_666x444--5rzwyiE.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shou-Biznes</h2>
            <p className="">
              Insayderlar oilaviy sirlarni oshkor qilmoqda: Melaniya va Donald
              Tramp nikohi nimaga asoslangan?
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Bugun, 20:11</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
