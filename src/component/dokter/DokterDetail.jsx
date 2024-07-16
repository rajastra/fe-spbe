import { useNavigate, useParams } from 'react-router-dom';
import { useDokterDetail } from '../../hooks/useDokterDetail';
import { Skeleton, Button, Rate } from 'antd';

function DokterDetail() {
  const { dokter_id: id } = useParams();
  const { data: dataDetail, isLoading } = useDokterDetail(id, true);

  const data = dataDetail?.data?.dokter;

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const movePayment = () => {
    navigate(`/dokter/${data._id}/payment`);
  };

  return (
    <div className='container-xl margin-top-100 mb-5'>
      <button
        className='btn btn-outline-secondary back-button mb-5'
        onClick={handleBack}
      >
        <i className='fas fa-arrow-left'></i> Kembali
      </button>
      <div className='main-content row'>
        {isLoading && <Skeleton active />}
        {!isLoading && (
          <>
            {/* Kolom Kiri (Gambar Dokter) */}
            <div className='col-md-6'>
              <img
                src={data?.image}
                alt={data?.name}
                className='img-fluid mb-2'
              />
            </div>

            {/* Kolom Kanan (Informasi Dokter) */}
            <div className='col-md-6'>
              <h1>{data?.name}</h1>
              <p className='fs-6 text-body-secondary'>{data?.category}</p>
              <p>{data?.year} Tahun Pengalaman</p>

              {/* Rating/Bintang */}
              <div className='mb-2'>
                <Rate disabled defaultValue={data?.rating || 0} />
              </div>

              <p>{data?.content}</p>

              {/* Button Chat Sekarang */}
              <Button
                type='primary'
                className='mt-3 mb-5'
                onClick={movePayment}
              >
                Chat Sekarang
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DokterDetail;
