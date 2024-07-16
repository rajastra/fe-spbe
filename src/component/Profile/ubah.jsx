function ubah() {
  return (
    <div>
      <div className="container container-custom py-3">
        <div className="position-relative bg-white row row-custom">
          <div className="pb-1 col-md-5 col-custom">
            <p className="text-label">Nama Depan</p>
            <div className="input-container">
              <input type="text" className="form-control input-field" />
            </div>
          </div>
          <div className="pb-1 col-md-5 col-custom">
            <p className="text-label">Tanggal lahir</p>
            <div className="input-container">
              <input type="text" className="form-control input-field" />
            </div>
          </div>
          <div className="pb-1 col-md-5 col-custom">
            <p className="text-label">Tinggi Badan(cm)</p>
            <div className="input-container">
              <input type="text" className="form-control input-field" />
            </div>
          </div>
          <div className="pb-1 col-md-5 col-custom">
            <p className="text-label">Berat Badan(kg)</p>
            <div className="input-container">
              <input type="text" className="form-control input-field" />
            </div>
          </div>
          <div className="pb-1 col-md-5 col-custom">
            <p className="text-label">Nama Belakang</p>
            <div className="input-container">
              <input type="text" className="form-control input-field" />
            </div>
          </div>
          <div className="row d-flex justify-content-between flex-column p-2 gap-3">
            <div className="col-md-7 d-flex align-items-center justify-content-between">
              <div className="col-12 align-items-center">
                <div className="p-3"></div>
                <input
                  type="radio"
                  id="JK"
                  name="jenis_kelamin"
                  value="Laki-Laki"
                />
                <label htmlFor="JK">Laki-Laki</label>
                <br />
              </div>

              <div className="col-6 align-items-center">
                <div className="p-3"></div>
                <input
                  type="radio"
                  id="JK"
                  name="jenis_kelamin"
                  value="Perempuan"
                />
                <label htmlFor="JK">Perempuan</label>
                <br />
              </div>
            </div>
            <div className="mt-5 col-2 px-1 py-1 bg-primary justify-content-end align-items-end button-save">
              <p className="text-center text-white">Simpan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ubah;
