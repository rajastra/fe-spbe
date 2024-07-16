function Footer() {
  return (
    <div>
      <footer className='text-center text-lg-start bg-light text-dark pt-1'>
        <div className='container'>
          <section>
            <div className='container text-center text-md-start mt-5'>
              <div className='row mt-3'>
                <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                  <div>
                    <img src='/assets/img/logo.png' alt='WeHealth Logo' />
                  </div>
                  <div className='logocaption'>
                    <p className='mt-4'>
                      Kami berkomitmen untuk membuat pengalaman akses kesehatan
                      menjadi lebih mudah, lebih personal, dan lebih efisien
                    </p>
                  </div>
                  <div className='row1'>
                    <p className='fw-semibold'>Tetap Terhubung dengan Kami</p>
                    <div className='d-flex justify-content-between'>
                      <a href='#'>
                        <i className='fa-brands fa-instagram fa-lg'></i>
                      </a>
                      <a href='#'>
                        <i className='fa-brands fa-facebook fa-lg'></i>
                      </a>
                      <a href='#'>
                        <i className='fa-brands fa-twitter fa-lg'></i>
                      </a>
                      <a href='#'>
                        <i className='fa-brands fa-youtube fa-lg'></i>
                      </a>
                      <a href='#'>
                        <i className='fa-brands fa-tiktok fa-lg'></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col=md-3 col-lg-2 col-xl-2 mx-auto mb-4 pt-3'>
                  <h6 className='text-uppercase fw-bold mb-4'>Lebih dekat</h6>
                  <p>
                    <a href='#!' className='text-decoration-none text-muted'>
                      Tentang Wehealth
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-decoration-none text-muted'>
                      Kebijakan Privasi
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-decoration-none text-muted'>
                      Syarat dan Ketentuan
                    </a>
                  </p>
                </div>

                <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 pt-3'>
                  <h6 className='text-uppercase fw-bold mb-4'>Layanan Info</h6>
                  <p>
                    <a href='#!' className='text-decoration-none text-muted'>
                      Layanan Medis
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-decoration-none text-muted'>
                      Info Penyakit
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-decoration-none text-muted'>
                      Info Obat
                    </a>
                  </p>
                </div>

                <div className='col-md-3 col-lg-2 col-xl-3 mx-auto mb-4 pt-3'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    Kolaborasi Dengan Kami
                  </h6>
                  <p>
                    <a href='#!' className='text-decoration-none text-muted'>
                      Tenaga Kesehatan
                    </a>
                    <p className='collab'>
                      Dokter, Apoteker, Psikolog, Psikiater, Bidan, Perawat
                    </p>
                  </p>
                  <p>
                    <a href='#!' className='text-decoration-none text-muted'>
                      Fasilitas Kesehatan
                    </a>
                    <p className='collab'>
                      Rumah Sakit, Klinik, Apotek, Laboratorium
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </footer>

      <div
        className='text-center container-fluid p-3'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        &copy; 2023.<b>WeHealth</b> All Right Reserved.
      </div>
    </div>
  );
}

export default Footer;
