import { useState } from "react";
import ReviewForm from "./ReviewForm";

function Review({ review, handleDelete,handleSubmit  }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  return (
    <div className="Review">
      {viewEditForm ? (
        <ReviewForm
        reviewDetails={review}
        toggleView={toggleView}
        handleSubmit={handleSubmit}
      />
      ) : (
        <>
          {" "}
          <h4>
            {review.title} <span>{review.rating}</span>
          </h4>
          <h5>{review.reviewer}</h5>
          <p>{review.content}</p>
          <button onClick={() => handleDelete(review.id)}>delete</button>
        </>
      )}
      <button onClick={toggleView}>edit this review</button>
    </div>
  );
}

export default Review;