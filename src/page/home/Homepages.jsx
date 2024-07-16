import About from '../../component/content/About';
import Hero from '../../component/content/Hero';

import '../../assets/css/style.css';
import Feature from "../../component/content/Feature";
import Kegiatan from "../../component/content/Kegiatan";

function Homepages() {
  return (
    <>
      <Hero />
      <About />
      <Feature />
      <Kegiatan />
    </>
  );
}

export default Homepages;
