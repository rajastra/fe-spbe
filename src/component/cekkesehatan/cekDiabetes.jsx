import { useState } from 'react';

const DiabetesChecker = () => {
  const [beratBadan, setBeratBadan] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [umur, setUmur] = useState('');
  const [hasilPemeriksaan, setHasilPemeriksaan] = useState('');

  const cekDiabetes = () => {
    const beratBadanNumerik = parseFloat(beratBadan);
    const tinggiNumerik = parseFloat(tinggi);
    const umurNumerik = parseInt(umur, 10);

    // Mengonversi tinggi dari centimeter ke meter
    const tinggiCentiMeter = tinggiNumerik * 100;

    const risikoDiabetes =
      beratBadanNumerik / (tinggiCentiMeter * tinggiCentiMeter);

    const batasRisiko = 25;

    if (risikoDiabetes > batasRisiko && umurNumerik > 30) {
      setHasilPemeriksaan('Anda memiliki risiko tinggi untuk diabetes.');
    } else {
      setHasilPemeriksaan('Risiko diabetes Anda rendah.');
    }
  };

  return (
    <div className=' container'>
      <div
        className='card text-center col-6 mx-auto'
        style={{
          marginTop: '120px',
          marginBottom: '50px',
        }}
      >
        <div className='card-body'>
          <div className=' row col-12 my-3'>
            <h1>Cek Diabetes</h1>
            <div className=' col-12 d-flex flex-column py-3'>
              <label htmlFor='beratBadan'>Berat Badan (kg): </label>
              <input
                type='text'
                id='beratBadan'
                value={beratBadan}
                onChange={(e) => setBeratBadan(e.target.value)}
                className='form-control text-center col-12 mb-3 mt-2'
              />

              <label htmlFor='tinggi'>Tinggi (cm): </label>
              <input
                type='text'
                id='tinggi'
                value={tinggi}
                onChange={(e) => setTinggi(e.target.value)}
                className='form-control text-center col-12 mb-3 mt-2'
              />

              <label htmlFor='umur'>Umur (thn): </label>
              <input
                type='text'
                id='umur'
                value={umur}
                onChange={(e) => setUmur(e.target.value)}
                className='form-control text-center col-12 mb-3 mt-2'
              />
            </div>
          </div>

          <button
            className='text-center btn btn-outline-primary '
            onClick={cekDiabetes}
          >
            Cek Diabetes
          </button>

          <p className='py-5 text-center col-12'>{hasilPemeriksaan}</p>
        </div>
      </div>
    </div>
  );
};

export default DiabetesChecker;
