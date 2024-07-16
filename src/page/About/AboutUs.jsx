import { Link } from "react-router-dom";
import HeartRiskCalculator from "../../component/cekkesehatan/cekJantung";

export default function AboutUs() {
  return (
    <>
      <div className="container">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-5 col-lg-2 col-xl-8 mx-auto mb-4">
              <div className="text-center mb-5 mt-5">
                <h1>About Us</h1>
              </div>
              <div>
                <p>
                  <b>Selamat datang di WeHealth!</b>
                  <br />
                  Kami adalah sumber informasi terpercaya untuk semua yang
                  berkaitan dengan kesehatan dan kesejahteraan. Dengan komitmen
                  untuk memberikan wawasan yang berharga, kami didedikasikan
                  untuk membantu Anda mencapai gaya hidup sehat dan bahagia.
                  <br />
                  <br />
                  Siapa Kami? WeHealth <br /> <br /> didirikan oleh sekelompok
                  profesional kesehatan yang berpengalaman yang memiliki hasrat
                  yang sama untuk membagikan pengetahuan dan saran terbaik
                  tentang bagaimana menjaga dan meningkatkan kesehatan Anda.
                  <br /> Tim kami terdiri dari dokter, perawat, ahli gizi,
                  terapis fisik, serta penulis medis yang berdedikasi untuk
                  memberikan informasi berkualitas tinggi kepada pembaca kami.
                  Misi Kami Misi kami adalah memberikan informasi yang akurat,
                  terbaru, dan mudah dipahami tentang berbagai aspek kesehatan,
                  mulai dari tips gaya hidup sehat hingga panduan perawatan
                  medis. <br /> Kami berusaha untuk menjadi sumber referensi
                  yang andal bagi individu yang mencari informasi untuk
                  mengambil keputusan yang tepat tentang kesehatan mereka. Kami
                  juga berkomitmen untuk memerangi penyebaran informasi palsu
                  atau tidak benar yang dapat mempengaruhi keputusan kesehatan.
                  Apa yang Kami Tawarkan di WeHealth, Anda akan menemukan
                  berbagai konten yang bermanfaat, termasuk artikel kesehatan
                  terbaru, panduan diet dan nutrisi, saran olahraga, tips
                  kesehatan mental, serta informasi medis yang akurat dan mudah
                  dipahami. <br /> Kami juga menyediakan forum komunitas tempat
                  Anda dapat berbagi pengalaman Anda, bertukar informasi, dan
                  mendapatkan dukungan dari sesama individu yang peduli tentang
                  kesehatan. Hubungi Kami, Kami sangat menghargai masukan,
                  pertanyaan, dan umpan balik dari pembaca kami. Jika Anda
                  memiliki pertanyaan atau ingin berkomunikasi dengan tim kami,
                  jangan ragu untuk menghubungi kami melalui halaman
                  <Link to="/"> Hubungi kami</Link>. Terima kasih telah memilih
                  WeHealth sebagai sumber informasi kesehatan Anda. Kami
                  berharap Anda menemukan situs web kami bermanfaat dalam
                  perjalanan Anda menuju hidup sehat yang lebih baik. <br />
                  <br /> Salam Sehat, Tim WeHealth.
                </p>
              </div>
            </div>
            <HeartRiskCalculator />
          </div>
        </div>
      </div>
    </>
  );
}
