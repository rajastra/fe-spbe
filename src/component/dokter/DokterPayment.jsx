import { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDokterDetail } from '../../hooks/useDokterDetail';
import { Skeleton } from 'antd';

function DokterPayment() {
  const { dokter_id: id } = useParams();

  const navigate = useNavigate();
  const { data: dokterData, isLoading } = useDokterDetail(id, true);

  const [showPromoModal, setShowPromoModal] = useState(false);
  const [selectedPromo, setSelectedPromo] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showPaymentOptionsModal, setShowPaymentOptionsModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handleBack = () => {
    navigate(-1);
  };

  const moveKonfirmasi = () => {
    navigate(`/dokter/${id}/konfirmasi`);
  };

  const handleShowPromoModal = () => {
    setShowPromoModal(true);
  };

  const handleClosePromoModal = () => {
    setShowPromoModal(false);
  };

  const handleSelectPromo = (promo) => {
    setSelectedPromo(promo);
    handleClosePromoModal();
  };

  const handleShowPaymentModal = () => {
    setShowPaymentModal(true);
  };

  const handleClosePaymentModal = () => {
    setShowPaymentModal(false);
  };

  const handleShowPaymentOptionsModal = () => {
    setShowPaymentModal(false);
    setShowPaymentOptionsModal(true);
  };

  const handleClosePaymentOptionsModal = () => {
    setShowPaymentOptionsModal(false);
  };

  const handlePayWithWallet = (method) => {
    setSelectedPayment(method); // Simpan informasi pembayaran yang dipilih
    handleClosePaymentOptionsModal();
    handleShowPaymentModal();
  };

  const handlePayWithVirtualAccount = (bank) => {
    setSelectedPayment(bank); // Simpan informasi pembayaran yang dipilih
    handleClosePaymentOptionsModal();
  };

  const calculateTotalPayment = () => {
    const basePrice = 25000; // Harga konsultasi tanpa promo
    const promoDiscount = selectedPromo ? selectedPromo.discount : 0;
    return basePrice - promoDiscount;
  };

  if (isLoading) {
    return <Skeleton active />;
  }

  return (
    <Container className='mb-5 mt-5'>
      <button
        className='btn btn-outline-secondary back-button mb-5 mt-5'
        onClick={handleBack}
      >
        <i className='fas fa-arrow-left'></i> Kembali
      </button>
      <Row className='col-xs-12 d-flex align-items-stretch'>
        <h1 className='mb-5'>Rincian Pembayaran</h1>
        {/* Informasi Dokter */}
        <Col lg='6' className=''>
          <img
            src={dokterData?.data?.dokter?.image}
            alt={dokterData?.data?.dokter?.name}
            className='img-fluid mb-2 rounded'
            width='50%'
          />
          <h3>{dokterData?.data?.dokter?.name}</h3>
          <p>{dokterData?.data?.dokter?.category}</p>
          <p>{dokterData?.data?.dokter?.year} Tahun Pengalaman</p>
        </Col>

        {/* Detail Tagihan */}
        <Col lg='6' className='border rounded p-4'>
          <h3 className=''>Kode Voucher</h3>
          <input
            id='kodeVoucherInput'
            type='text'
            className='form-control mb-2'
            placeholder='Masukkan Kode Promo'
          />
          <Button
            variant='outline-success'
            className='mb-2'
            onClick={handleShowPromoModal}
          >
            Pilih Promo
          </Button>

          <h3>Ringkasan Tagihan</h3>
          <Row className='mb-3'>
            <Col xs={8}>Biaya Konsultasi</Col>
            <Col xs={4} className='text-end'>
              Rp. 25.000
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col xs={8}>Promo</Col>
            <Col xs={4} className='text-end'>
              {selectedPromo ? selectedPromo.name : 'Rp. 0'}
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col xs={8}>Total Pembayaran</Col>
            <Col xs={4} className='text-end'>
              {calculateTotalPayment()}
            </Col>
          </Row>

          {/* Metode Pembayaran */}
          <Button variant='primary' onClick={handleShowPaymentModal}>
            Metode Pembayaran
          </Button>
        </Col>
      </Row>

      {/* Modal Popup untuk Promo */}
      <Modal show={showPromoModal} onHide={handleClosePromoModal}>
        <Modal.Header closeButton>
          <Modal.Title>Pilih Promo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h3>WEHEALTH1</h3>
            <p>Dapatkan diskon sebesar Rp. 10.000 untuk layanan konsultasi.</p>
            <Button
              variant='link'
              onClick={() =>
                handleSelectPromo({ name: 'WEHEALTH1', discount: 10000 })
              }
            >
              WEHEALTH1
            </Button>
          </div>
          <div>
            <h3>WEHEALTH5</h3>
            <p>
              Nikmati layanan konsultasi tanpa biaya dengan promo WEHEALTHFREE.
            </p>
            <Button
              variant='link'
              onClick={() =>
                handleSelectPromo({
                  name: 'WEHEALTHFREE',
                  discount: 5000, // Sesuaikan dengan aturan promo
                })
              }
            >
              WEHEALTH5
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClosePromoModal}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Popup untuk Pembayaran */}
      <Modal show={showPaymentModal} onHide={handleClosePaymentModal}>
        <Modal.Header closeButton>
          <Modal.Title>Pembayaran</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Row className='mb-3'>
              <h3 className='mb-3'>Metode Pembayaran</h3>
              <Col xs={6}>Pilih Metode Pembayaran</Col>
              <Col xs={6} className='text-end'>
                <Link
                  variant='primary'
                  onClick={handleShowPaymentOptionsModal}
                  className='text-decoration-none'
                >
                  {selectedPayment ? ` ${selectedPayment}` : 'Pilih Pembayaran'}
                </Link>
              </Col>
            </Row>
          </div>
          <div>
            <h3 className='mb-3'>Ringkasan Pembayaran</h3>
            <Row className='mb-3'>
              <Col xs={8}>Total pesanan</Col>
              <Col xs={4} className='text-end'>
                {calculateTotalPayment()}
              </Col>
            </Row>
            <Row className='mb-3'>
              <Col xs={8}>Promo</Col>
              <Col xs={4} className='text-end'>
                {selectedPromo ? selectedPromo.discount : 0}
              </Col>
            </Row>
          </div>
          <div className='mt-5'>
            <Row className='mb-2'>
              <Col xs={5}>
                Total Pembayaran{' '}
                <span className='text-warning'>
                  Rp.{calculateTotalPayment()}
                </span>
              </Col>
              <Col xs={7} className='text-end'>
                <Button
                  variant='primary'
                  onClick={moveKonfirmasi}
                  className='w-10'
                >
                  Bayar
                </Button>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>

      {/* Modal Popup untuk Pilihan Metode Pembayaran */}
      <Modal
        show={showPaymentOptionsModal}
        onHide={handleClosePaymentOptionsModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Pilih Metode Pembayaran</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Wallet</h3>
          <Row className='mb-4'>
            <Col xs={6}>
              <img src='/assets/img/gopay.jpg' width='30%' className='me-4 ' />
              Gopay
            </Col>
            <Col xs={6} className='text-end'>
              <Button
                variant='primary'
                onClick={() => handlePayWithWallet('Gopay')}
              >
                Pilih
              </Button>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col xs={6}>
              <img src='/assets/img/ovo.jpg' width='30%' className='me-4 ' />
              OVO
            </Col>
            <Col xs={6} className='text-end'>
              <Button
                variant='primary'
                onClick={() => handlePayWithWallet('OVO')}
              >
                Pilih
              </Button>
            </Col>
          </Row>
          <h3>Virtual Account</h3>
          <Row className=''>
            <Col xs={6}>
              <img src='/assets/img/bri.png' width='30%' className='me-4 ' />
              BRI
            </Col>
            <Col xs={6} className='text-end'>
              <Button
                variant='primary'
                onClick={() => handlePayWithVirtualAccount('BRI')}
              >
                Pilih
              </Button>
            </Col>
          </Row>
          <Row className=''>
            <Col xs={6}>
              <img src='/assets/img/bni.png' width='30%' className='me-4 ' />
              BNI
            </Col>
            <Col xs={6} className='text-end'>
              <Button
                variant='primary'
                onClick={() => handlePayWithVirtualAccount('BNI')}
              >
                Pilih
              </Button>
            </Col>
          </Row>
          <Row className=''>
            <Col xs={6}>
              <img src='/assets/img/bca.png' width='30%' className='me-4 ' />
              BCA
            </Col>
            <Col xs={6} className='text-end'>
              <Button
                variant='primary'
                onClick={() => handlePayWithVirtualAccount('BCA')}
              >
                Pilih
              </Button>
            </Col>
          </Row>
          <Row className=''>
            <Col xs={6}>
              <img
                src='/assets/img/permata.png'
                width='30%'
                className='me-4 '
              />
              PERMATA
            </Col>
            <Col xs={6} className='text-end'>
              <Button
                variant='primary'
                onClick={() => handlePayWithVirtualAccount('PERMATA')}
              >
                Pilih
              </Button>
            </Col>
          </Row>
          <Row className=''>
            <Col xs={6}>
              <img
                src='/assets/img/mandiri.png'
                width='30%'
                className='me-4 '
              />
              MANDIRI
            </Col>
            <Col xs={6} className='text-end'>
              <Button
                variant='primary'
                onClick={() => handlePayWithVirtualAccount('MANDIRI')}
              >
                Pilih
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default DokterPayment;
