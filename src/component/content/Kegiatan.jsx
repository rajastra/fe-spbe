import { Link } from "react-router-dom"
import './Kegiatan.css'

const Kegiatan = () => {
   return (
      <div>
         <div className="container">
            <div className="kegiatan-title-box">
               <div className="header-box">
                  {/* icon */}
                  <div className='kegiatan-icon'>
                     <i className='fas fa-camera'></i>
                  </div>
                  <h2>Galeri Kegiatan</h2>
               </div>
               <Link>Lihat Semua</Link>
               {/* icon */}

            </div>
         </div>
      </div>
   )
}

export default Kegiatan