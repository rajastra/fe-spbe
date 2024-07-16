import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useDokterDetail } from '../../../hooks/useDokterDetail';
import { Divider, Skeleton } from 'antd';
import './DetailDokter.css';

function DetailDokter() {
  const { dokter_id: id } = useParams();

  // get dokter detail
  const { data: dataDetail, isLoading: skeleton } = useDokterDetail(id, true);

  const data = dataDetail?.data?.dokter;

  return (
    <>
      {skeleton && <Skeleton active />}
      {!skeleton && data && (
        <Fragment key={data.id}>
          <Divider orientation='left'>Data Dokter</Divider>
          <div className='dokter-image-container'>
            <img src={data.image} alt={data.title} />
          </div>
          <table className='detail-dokter__table'>
            <tbody>
              <tr>
                <th>Nama</th>
                <td>: {data?.nama}</td>
              </tr>
              <tr>
                <th>Category</th>
                <td>: {data?.category}</td>
              </tr>
            </tbody>
          </table>
        </Fragment>
      )}
    </>
  );
}

export default DetailDokter;
