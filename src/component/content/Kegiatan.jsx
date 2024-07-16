import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom"
import './Kegiatan.css'

const Kegiatan = () => {
   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 3,
         slidesToSlide: 3 // optional, default to 1.
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 2,
         slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1,
         slidesToSlide: 1 // optional, default to 1.
      }
   };

   return (
      <div>
         <div className="container">
            <div className="kegiatan-title-box">
               <div className="header-box">
                  <div className='kegiatan-icon'>
                     <i className='fas fa-camera'></i>
                  </div>
                  <h2>Galeri Kegiatan</h2>
               </div>
               <Link>Lihat Semua</Link>
            </div>
            <Carousel
               swipeable={false}
               draggable={false}
               // showDots={true}
               responsive={responsive}
               ssr={false} // means to render carousel on server-side.
               infinite={true}
               autoPlaySpeed={1000}
               keyBoardControl={true}
               customTransition="all .5"
               transitionDuration={500}
               containerClass="carousel-container"
               removeArrowOnDeviceType={["tablet", "mobile"]}
               // deviceType={this.props.deviceType}
               dotListClass="custom-dot-list-style"
               itemClass="carousel-item-padding-40-px"
            >
               <div className="kegiatan-box">
                  <img src="/assets/img/kegiatan.png" alt="" />
                  <button className="button-kegiatan">Lihat Kegiatan</button>
               </div>
               <div className="kegiatan-box">
                  <img src="/assets/img/kegiatan.png" alt="" />
                  <button className="button-kegiatan">Lihat Kegiatan</button>
               </div>
               <div className="kegiatan-box">
                  <img src="/assets/img/kegiatan.png" alt="" />
                  <button className="button-kegiatan">Lihat Kegiatan</button>
               </div>
               <div className="kegiatan-box">
                  <img src="/assets/img/kegiatan.png" alt="" />
                  <button className="button-kegiatan">Lihat Kegiatan</button>
               </div>
            </Carousel>
         </div>
      </div>
   )
}

export default Kegiatan