import { Route, Routes } from 'react-router-dom';
import Homepages from './page/home/Homepages';
import Register from './page/register/Register';
import Login from './page/login/Login';
import LayoutDasboard from './layouts/dashboard/LayoutDasboard';
import Article from './page/article/master/Article';
import DetailArticle from './page/article/detail/DetailArticle';
import ArticleHomes from './page/home/ArticleHomes';
import ArticleDetail from './component/article/ArticleDetail';
import LayoutHome from './layouts/home/LayoutHome';
import Dokter from './page/dokter/master/Dokter';
import DetailDokter from './page/dokter/detail/DetailDokter';
import DokterHomes from './page/home/DokterHomes';
import DokterDetail from './component/dokter/DokterDetail';
import AboutUs from './page/About/AboutUs';
import Profile from './page/Profile/Profile';
import DetailLayanan from './page/detailLayanan/DetailLayanan';
import User from './page/user/master/User';
import DokterPayment from './component/dokter/DokterPayment';
import ChatListPage from './page/Chat/ChatListPage';

import DokterKonfirmasi from './component/dokter/DokterKonfirmasi';
import BMICalculator from './component/cekkesehatan/cekBmi';
import Master from './component/cekkesehatan/Master';
import DiabetesChecker from './component/cekkesehatan/cekDiabetes';
import HeartRiskCalculator from './component/cekkesehatan/cekJantung';
import DashboardHome from './page/dashboardHome/DashboardHome';
import RequireLogin from './component/auth/RequireLogin';
import DokterReview from './component/dokter/DokterReview';
import ThankYou from './component/dokter/ThankYou';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutHome content={<Homepages />} />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route
        path='/dashboard'
        element={<LayoutDasboard content={<DashboardHome />} />}
      />
      <Route
        path='/dashboard/article'
        element={<LayoutDasboard content={<Article />} />}
      />
      <Route
        path='/dashboard/article/:article_id'
        element={<LayoutDasboard content={<DetailArticle />} />}
      />
      <Route
        path='/article'
        element={<LayoutHome content={<ArticleHomes />} />}
      />
      <Route
        path='/article/:article_id'
        element={<LayoutHome content={<ArticleDetail />} />}
      />
      <Route path='/about' element={<LayoutHome content={<AboutUs />} />} />
      <Route path='/profile' element={<Profile />} />
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
        path='/dokter'
        element={<LayoutHome content={<DokterHomes />} />}
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
      <Route
        path='/dokter/:dokter_id/payment'
        element={<LayoutHome content={<DokterPayment />} />}
      />
      <Route path='/chat' element={<LayoutHome content={<ChatListPage />} />} />
      <Route
        path='/dokter/:dokter_id/konfirmasi'
        element={<LayoutHome content={<DokterKonfirmasi />} />}
      />
      <Route
        path='/cekkesehatan'
        element={<LayoutHome content={<Master />} />}
      />
      <Route
        path='/cekkesehatan/bmi'
        element={<LayoutHome content={<BMICalculator />} />}
      />
      <Route
        path='/cekkesehatan/jantung'
        element={<LayoutHome content={<HeartRiskCalculator />} />}
      />
      <Route
        path='/cekkesehatan/diabetes'
        element={<LayoutHome content={<DiabetesChecker />} />}
      />

      <Route
        path='/review'
        element={<LayoutHome content={<DokterReview />} />}
      />
      <Route path='/thanks' element={<LayoutHome content={<ThankYou />} />} />
    </Routes>
  );
};

export default Router;
