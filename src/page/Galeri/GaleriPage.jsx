import './GaleriPage.css'

const GaleriPage = () => {
   return (
      <div className="galeri-box-container">
         <div className="galeri-box">
            <img src="/assets/img/kegiatan.png" alt="" />
            <p className="galeri-title">
               Judul kegiatan 1
            </p>
            <p className="galeri-date">
               Tanggal bulan tahun
            </p>
         </div>
         <div className="galeri-box">
            <img src="/assets/img/kegiatan.png" alt="" />
            <p className="galeri-title">
               Judul kegiatan 1
            </p>
            <p className="galeri-date">
               Tanggal bulan tahun
            </p>
         </div>
      </div>
   )
}

export default GaleriPage