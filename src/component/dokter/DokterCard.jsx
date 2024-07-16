import { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Tag, Rate } from 'antd';

function DokterCard({ dokter }) {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    if (dokter.status === 'online') {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
  }, [dokter]);

  // Menangani nilai rating yang mungkin kosong atau undefined
  const ratingValue = dokter.rating || 0;

  return (
    <div
      className='col-sm-6 col-md-4 col-lg-3'
      data-aos='zoom-in'
      data-aos-duration='1000'
    >
      <div
        className='card'
        style={{
          height: '100%',
          position: 'relative',
        }}
      >
        <div
          className='online-status'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            padding: '5px',
            zIndex: 1,
          }}
        >
          {isOnline ? (
            <Tag color='green'>Online</Tag>
          ) : (
            <Tag color='red'>Offline</Tag>
          )}
        </div>

        <img
          src={dokter.image}
          className='card-img-top card-img-dokter'
          alt={dokter.name}
          loading='lazy'
        />

        <div className='card-body'>
          <h3 className='card-title text-clamp'>{dokter.name}</h3>
          <p className='card-text text-clamp'>{dokter.category}</p>

          {/* Tambahkan Tahun */}
          <p className='card-text text-clamp'>{dokter.year} Tahun Pengalaman</p>

          {/* Tambahkan Rating/Bintang */}
          <div className='rating'>
            <Rate
              disabled
              defaultValue={ratingValue}
              style={{ color: 'gold' }}
            />
          </div>

          {/* Link untuk Chat */}
          <Link
            to={`/dokter/${dokter._id}`}
            className='mt-auto text-decoration-none fw-medium'
          >
            Chat Dokter
          </Link>
        </div>
      </div>
    </div>
  );
}

DokterCard.propTypes = {
  dokter: propTypes.object.isRequired,
};

export default DokterCard;
