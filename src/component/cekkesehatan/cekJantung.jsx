import { useState } from 'react';

const HeartRiskCalculator = () => {
  // State untuk menyimpan data pengguna
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState(30);
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [heartRisk, setHeartRisk] = useState(null);

  // Fungsi untuk menghitung resiko jantung
  const calculateHeartRisk = () => {
    let risk = 0;

    // Menentukan pengaruh usia
    if (age > 40) {
      risk += 1;
    }

    // Menghitung BMI dan menentukan pengaruh berat badan dan tinggi
    const bmi = weight / ((height / 100) * (height / 100));
    if (bmi >= 25) {
      risk += 1;
    }

    // Menentukan pengaruh gender
    if (gender === 'male') {
      risk += 1;
    }

    // Menyimpan hasil perhitungan resiko jantung
    setHeartRisk(risk);
  };

  return (
    <div className=' container mt-5'>
      <div
        className='card mx-auto text-center'
        style={{ maxWidth: '600px', marginTop: '100px', marginBottom: '50px' }}
      >
        <div className='card-body'>
          <h1 className='card-title text-center mb-4'>
            Kalkulator Resiko Jantung
          </h1>
          {/* Form untuk memasukkan data pengguna */}
          <div className='mb-3'>
            <label className='form-label'>
              Jenis Kelamin:
              <select
                className='form-select mt-2'
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value='male'>Laki-laki</option>
                <option value='female'>Perempuan</option>
              </select>
            </label>
          </div>
          <div className='mb-3'>
            <label className='form-label'>
              Usia:
              <input
                type='number'
                className='form-control mt-2'
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
          </div>
          <div className='mb-3'>
            <label className='form-label'>
              Tinggi (cm):
              <input
                type='number'
                className='form-control mt-2'
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </label>
          </div>
          <div className='mb-3'>
            <label className='form-label'>
              Berat Badan (kg):
              <input
                type='number'
                className='form-control mt-2'
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </label>
          </div>
          {/* Tombol untuk menghitung resiko jantung */}
          <div className='text-center mb-3'>
            <button className='btn btn-primary' onClick={calculateHeartRisk}>
              Hitung
            </button>
          </div>
          {/* Menampilkan hasil resiko jantung setelah dihitung */}
          {heartRisk !== null && (
            <div>
              <h2 className='text-center'>Tingkat Resiko Jantung:</h2>
              <p className='text-center'>
                {heartRisk === 0
                  ? 'Rendah'
                  : heartRisk === 1
                  ? 'Sedang'
                  : 'Tinggi'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeartRiskCalculator;
