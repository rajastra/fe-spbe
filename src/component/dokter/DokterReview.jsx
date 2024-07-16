import { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function DokterReview() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleStarClick = (clickedRating) => {
    setRating(clickedRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    navigate('/review-success');
  };

  return (
    <div className='review'>
      <Container className='mt-3 mb-5 p-5 text-center rounded'>
        <img src='/assets/img/feedback.png' width='20%' />
        <h3>Berikan Review</h3>
        <p>
          Beri penilaian dan ulasan Anda untuk pengalaman konsultasi dengan
          dokter.
        </p>

        <div className='star-rating'>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= rating ? 'star-filled' : 'star-empty'}
              onClick={() => handleStarClick(star)}
              role='button'
            >
              ★
            </span>
          ))}
        </div>

        <Form className='mt-4' onSubmit={handleSubmit}>
          <Form.Group controlId='comment' className='mb-3'>
            <Form.Label>Ulasan:</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              value={comment}
              onChange={handleCommentChange}
            />
          </Form.Group>

          <Link to='/thanks'>
            <button className='btn btn-outline-primary text-center mt-2 '>
              Kirim Review
            </button>
          </Link>
        </Form>
      </Container>
    </div>
  );
}

export default DokterReview;
