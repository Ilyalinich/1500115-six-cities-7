import React from 'react';


function ReviewsLoadingErrorMessage() {
  return (
    <p
      style={
        {
          color: 'red',
          marginBottom: '50px',
          textAlign: 'center',
        }
      }
    >
      Reviews loading error, please try again later...
    </p>
  );
}

export default ReviewsLoadingErrorMessage;
