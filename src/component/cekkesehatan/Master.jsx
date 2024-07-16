import { Link } from 'react-router-dom';
import {
  HeartOutlined,
  CalculatorOutlined,
  MedicineBoxOutlined,
} from '@ant-design/icons';

const CardList = () => {
  return (
    <div
      className='container'
      style={{
        marginTop: '100px',
      }}
    >
      <h1 className='mb-5'>Cek kesehatan</h1>
      <div className='card-deck list-cekkesehatan'>
        <div className='card' style={{ height: '300px' }}>
          <HeartOutlined
            style={{
              fontSize: '48px',
              color: '#1890ff',
              justifyContent: 'center',
              padding: '14px',
            }}
          />
          <div className='card-body'>
            <h5 className='card-title'>Cek kesehatan jantung</h5>
            <p className='card-text'>
              ini adalah fitur cek kesehatan jantung yang dapat digunakan untuk
              mengecek kesehatan jantung anda
            </p>
            <Link to='/cekkesehatan/jantung' className='btn btn-primary'>
              View Details
            </Link>
          </div>
        </div>
        <div className='card' style={{ height: '300px' }}>
          <CalculatorOutlined
            style={{
              fontSize: '48px',
              color: '#1890ff',
              justifyContent: 'center',
              padding: '14px',
            }}
          />
          <div className='card-body'>
            <h5 className='card-title'>Kalkulator BMI</h5>
            <p className='card-text'>
              ini adalah fitur kalkulator BMI yang dapat digunakan untuk
              menghitung BMI anda
            </p>
            <Link to='/cekkesehatan/bmi' className='btn btn-primary'>
              View Details
            </Link>
          </div>
        </div>
        <div className='card' style={{ height: '300px' }}>
          <MedicineBoxOutlined
            style={{
              fontSize: '48px',
              color: '#1890ff',
              justifyContent: 'center',
              padding: '14px',
            }}
          />
          <div className='card-body'>
            <h5 className='card-title'>Cek diabetes</h5>
            <p className='card-text'>
              ini adalah fitur cek diabtes yang dapat digunakan untuk mengecek
              apakah anda terkena diabtes atau tidak
            </p>
            <Link to='/cekkesehatan/diabetes' className='btn btn-primary'>
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
