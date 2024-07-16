import { useState } from 'react';
import './DokterHomes.css';
import { useDokterPagination } from '../../hooks/useDokterPagination';
import { Skeleton } from 'antd';
import DokterCard from '../../component/dokter/DokterCard';

function DokterHomes() {
  const [keyword, setKeyword] = useState('');
  const [dataTable, setDataTable] = useState({
    current_page: 1,
    per_page: 15,
    total: 0,
  });

  const { data, isLoading } = useDokterPagination(dataTable, keyword);

  return (
    <div className='container-xl pt-5 margin-top-50'>
      <h1 className='text-center'>List Dokter</h1>
      <div className='row'>
        <div className='col'>
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control'
              id='keyword'
              placeholder='Cari dokter berdasarkan kategori'
              aria-label='Cari Dokter'
              aria-describedby='button-addon2'
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button
              className='btn btn-outline-secondary btn-search-dokter'
              type='submit'
              id='button-addon2'
            >
              <i className='fas fa-search'></i>
            </button>
          </div>
        </div>
      </div>
      <div className='row g-3 list-dokter'>
        {isLoading && <Skeleton active />}
        {data?.data?.map((dokter, index) => (
          <DokterCard key={index} dokter={dokter} />
        ))}
      </div>
    </div>
  );
}

export default DokterHomes;
