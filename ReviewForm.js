 import React, { useState } from 'react';

function ReviewForm() {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() === '' || rating.trim() === '') {
      alert('Please fill out required fields: Title and Rating');
      return;
    }

    const newReview = {
      title,
      rating,
      description
    };

    setReviews([...reviews, newReview]);
    setTitle('');
    setRating('');
    setDescription('');
  };

  const handleReset = () => {
    setTitle('');
    setRating('');
    setDescription('');
  };

  const handleDelete = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);
    setReviews(updatedReviews);
  };

  return (
    <div>
      <h1>Review Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title*</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="rating">Rating*</label>
          <input type="number" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} min="1" max="5" required />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>
      <div>
        <h2>Reviews</h2>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <strong>Title:</strong> {review.title}<br />
              <strong>Rating:</strong> {review.rating}<br />
              <strong>Description:</strong> {review.description ? review.description : 'N/A'}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ReviewForm;