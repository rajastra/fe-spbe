import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ThankYou() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/');
  };

  return (
    <div className='thank-you'>
      <Container className='mt-5 mb-5 p-5 text-center rounded'>
        <img src='/assets/img/thank.png' alt='Check Mark' width='200px' />
        <h1>Terima Kasih!</h1>
        <p>
          Ulasan Anda sangat berharga bagi kami. Terima kasih atas kontribusi
          Anda untuk perkembangan kami.
        </p>

        <Button variant='primary' onClick={handleContinue}>
          Kembali Ke Home
        </Button>
      </Container>
    </div>
  );
}

export default ThankYou;
