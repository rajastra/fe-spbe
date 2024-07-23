import { Route, Routes } from 'react-router-dom';
import Homepages from './page/home/Homepages';
import Register from './page/register/Register';
import Login from './page/login/Login';
import LayoutDasboard from './layouts/dashboard/LayoutDasboard';
import Galeri from './page/GaleriDashboard/master/Galeri';
import LayoutHome from './layouts/home/LayoutHome';
import Dokter from './page/dokter/master/Dokter';
import DetailDokter from './page/dokter/detail/DetailDokter';
import DokterDetail from './component/dokter/DokterDetail';
import AboutUs from './page/About/AboutUs';
import Profile from './page/Profile/Profile';
import DetailLayanan from './page/detailLayanan/DetailLayanan';
import User from './page/user/master/User';
import DashboardHome from './page/dashboardHome/DashboardHome';
import RequireLogin from './component/auth/RequireLogin';
import GaleriPage from "./page/Galeri/GaleriPage";
import LayoutContent from "./layouts/home/LayoutContent";
import IndikatorPage from "./page/indikator/indikatorPage";
import RegulasiPage from "./page/regulasi/RegulasiPage";
import Indikator from "./page/IndikatorDashboardTest/master/Indikator";

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutHome content={<Homepages />} />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<LayoutHome content={<Login />} />} />
      <Route path='/about' element={<LayoutHome content={<AboutUs />} />} />
      <Route path='/profile' element={<LayoutHome content={<Profile />} />} />
      <Route path='/kegiatan' element={<LayoutHome content={<LayoutContent title="Galeri"><GaleriPage /></LayoutContent>} />} />
      <Route path='/indikator' element={<LayoutHome content={<LayoutContent title="Indikator"><IndikatorPage /></LayoutContent>} />} />
      <Route path='/regulasi' element={<LayoutHome content={<LayoutContent title="Regulasi"><RegulasiPage /></LayoutContent>} />} />
      <Route
        path='/dashboard'
        element={<LayoutDasboard content={<DashboardHome />} />}
      />
      <Route
        path='/dashboard/galeri'
        element={<LayoutDasboard content={<Galeri />} />}
      />
      <Route
        path='/dashboard/indikator'
        element={<LayoutDasboard content={<Indikator />} />}
      />
      <Route
        path='/detaillayanan'
        element={<LayoutHome content={<DetailLayanan />} />}
      />
      <Route
        path='/dashboard/dokter'
        element={<LayoutDasboard content={<Dokter />} />}
      />
      <Route
        path='/dashboard/dokter/:dokter_id'
        element={<LayoutDasboard content={<DetailDokter />} />}
      />
      <Route
        path='/dokter/:dokter_id'
        element={
          <LayoutHome
            content={
              <RequireLogin>
                <DokterDetail />
              </RequireLogin>
            }
          />
        }
      />
      <Route
        path='/dashboard/user'
        element={<LayoutDasboard content={<User />} />}
      />
    </Routes>
  );
};

export default Router;
