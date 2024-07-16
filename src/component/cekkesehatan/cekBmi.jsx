import { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [measure, setMeasure] = useState('');
  const [error, setError] = useState('');

  const calculate = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (
      isNaN(weightValue) ||
      isNaN(heightValue) ||
      weightValue <= 0 ||
      heightValue <= 0
    ) {
      setError('Please enter valid values for weight and height.');
      return;
    }

    const heightInMeters = heightValue / 100;
    const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(1);

    if (bmi <= 18.5) {
      setMeasure(`BMI Anda adalah ${bmi}, kekurangan berat badan.☹️`);
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setMeasure(`BMI Anda adalah ${bmi}, berat badan normal.😊`);
    } else if (bmi >= 25 && bmi <= 29.9) {
      setMeasure(`BMI Anda adalah ${bmi},kelebihan berat badan.😲`);
    } else if (bmi >= 30) {
      setMeasure(`BMI Anda adalah ${bmi}, obesitas😥`);
    }

    setError('');
  };

  return (
    <div
      className='cekbmi mt-3 '
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
      }}
    >
      <div className='card col-6 mx-auto'>
        <div className='card-body shadow' style={{ height: '90vh' }}>
          <h1 className='card-title text-center p-3'>Check your BMI</h1>
          <p className='card-text text-center pt-3 pb-4'>
            Masukkan berat dan tinggi badan Anda di bawah ini untuk memeriksa
            hasil BMI Anda
          </p>
          <form>
            <div className='form-group text-center pb-3'>
              <label htmlFor='weight' className='mb-2'>
                Berat Badan (KG)
              </label>
              <input
                id='weight'
                type='number'
                pattern='[0-9]*'
                className='form-control'
                name='a'
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className='form-group text-center'>
              <label htmlFor='height' className='mb-2'>
                Tinggi badan (CM)
              </label>
              <input
                id='height'
                type='number'
                pattern='[0-9]*'
                className='form-control'
                name='b'
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className='text-center p-3'>
              <div className='text-center'>
                <button
                  type='button'
                  className='btn btn-primary mb-3'
                  onClick={calculate}
                >
                  Calculate BMI
                </button>
              </div>

              <div id='results' className='text-center mt-3'>
                {error ? (
                  <div className='alert alert-danger'>{error}</div>
                ) : (
                  measure
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
