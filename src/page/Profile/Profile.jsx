import './Profile.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [phone, setPhone] = useState('+628421421300');
  const [email, setEmail] = useState('john.doe@example.com');
  const [location, setLocation] = useState('City, Country');
  const [age, setAge] = useState('20');
  const [weight, setWeight] = useState('50');
  const [height, setHeight] = useState('70');

  const handleHeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className='div container py-3 px-3'>
        <div className='div-2 row col-12 mx-auto'>
          <div className='div-3 d-flex w-25 mx-lg-1'>
            <button
              className='btn btn-outline-secondary back-button mb-5'
              onClick={handleBack}
            >
              <i className='fas fa-arrow-left'></i> Kembali
            </button>
          </div>
          <div className='div-5 col-12 d-flex mt-5 px-5 flex-column'>
            <div className='div-6 py-5'>Profil Saya</div>
            <div className='div-7 col-12 d-flex align-items-center justify-content-between gap-3 my-3'>
              <div className='div-8 col-6 d-flex justify-content-between gap-3 position-relative'>
                <div className='div-9 col-12 d-flex flex-column align-items-end overflow-hidden position-relative aspect-ratio-1'>
                  <img
                    loading='lazy'
                    src='assets/img/photoprofile.jpg'
                    className='img-2 position-relative h-100 w-100 object-fit-cover img-fluid rounded-circle'
                  />
                  <img
                    loading='lazy'
                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/86a68215-34cd-436b-8cd8-ee35d195dc6d?'
                    className='img-3 position-absolute bottom-0 end-0 z-index-1'
                  />
                </div>
                <div className='div-10 col-6 d-flex flex-column align-items-start justify-content-center'>
                  <span className='mb-2'>Angel Lala</span>
                </div>
              </div>

              <div className='div-11 justify-content-center align-self-center'>
                Ubah Profile
              </div>
            </div>
            <div className='div-12'>
              <div className='div-14 position-relative text-start'>
                Informasi pribadi
              </div>
              <div className='div-13 col-6 d-flex flex-column flex-grow-1 flex-basis-0'>
                <div className='col-6  mb-2'>Email address</div>
                <div className='d-flex flex-row justify-content-between align-items-center mb-3'>
                  <div className='div-17 text-center me-2'>
                    <input
                      type='text'
                      value={email}
                      onChange={handleEmailChange}
                    />
                    <i className='fa-regular fa-pen-to-square'></i>
                  </div>
                </div>

                <div className='div-18 mb-2'>Address</div>
                <div className='d-flex flex-row justify-content-between align-items-center mb-3'>
                  <div className='div-20 me-2'>
                    <input
                      type='text'
                      value={location}
                      onChange={handleLocationChange}
                    />
                    <i className='fa-regular fa-pen-to-square'></i>
                  </div>
                </div>

                <div className='div-24 mb-2'>Phone</div>
                <div className='d-flex flex-row justify-content-between align-items-center'>
                  <div className='div-24 me-2'>
                    <input
                      type='text'
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                    <i className='fa-regular fa-pen-to-square'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='div-25'></div>
          <div className='div-26 col-12  d-flex gap-5 text-center'>
            <div className='div-27 col-2'>
              <div className='div-28 col-3'>Umur</div>
              <input type='number' value={age} onChange={handleAgeChange} />
            </div>
            <div className='div-29 col-2'>
              <div className='div-30 col-3'>Berat Badan</div>
              <input
                type='number'
                value={weight}
                onChange={handleWeightChange}
              />
            </div>
            <div className='div-31 col-2'>
              <div className='div-32 col-3'>Tinggi Badan</div>
              <input
                type='number'
                value={height}
                onChange={handleHeightChange}
              />
            </div>
            <div className='div-33 col-4 '>
              <div className='div-34 col-2'>BMI</div>
              <span className='border1 border-3'></span>
            </div>
          </div>
          <div className='div-35'></div>
          <div className='row div-36'>
            <div className=' div-37 col-12'>
              <div className='mb-3'>
                <div className='border-bottom'>Jenis Kelamin</div>
                <select id='selectOptions' name='selectOptions'>
                  <option value='select1'>Laki-Laki</option>
                  <option value='select2'>Perempuan</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
