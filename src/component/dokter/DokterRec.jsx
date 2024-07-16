import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DokterCard from './DokterCard';

function DokterRec({ articleCategory }) {
  const URL = import.meta.env.VITE_BASE_URL;

  const [dokters, setDokters] = useState([]);

  function mapArticleToDokterCategory(articleCategory) {
    const categoryMapping = {
      'Kesehatan Mental': 'Psikolog',
      Pencernaan: 'Kesehtan Umum',
      'Diet dan Nutrisi': 'Kesehatan Umum',
      'Sehat dan Bugar': 'Kesehatan Umum',
    };

    return categoryMapping[articleCategory] || articleCategory;
  }

  async function fetchDokters(articleCategory) {
    try {
      const dokterCategory = mapArticleToDokterCategory(articleCategory);

      const response = await axios.get(
        `${URL}/api/v1/dokter?page=1&limit=4&category=${dokterCategory}`
      );
      setDokters(response.data.data);
    } catch (error) {
      console.error('Error fetching dokters:', error.message);
    } finally {
      console.log('Request complete, whether successful or not.');
    }
  }

  console.log(dokters);

  useEffect(() => {
    fetchDokters(articleCategory);
  }, [articleCategory]);

  return (
    <div>
      <section id='dokter' className='dokter section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-header pb-5'>
                <h2>Dokter Terkait</h2>
              </div>
            </div>
          </div>
          <div className='row list-dokter'>
            {dokters.map((dokter) => (
              <DokterCard dokter={dokter} key={dokter.id} />
            ))}
          </div>
          <div className='text-center mt-5'>
            <Link to='/dokter'>
              <button className='btn btn-outline-primary text-center'>
                Lihat Lebih Banyak
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DokterRec;
