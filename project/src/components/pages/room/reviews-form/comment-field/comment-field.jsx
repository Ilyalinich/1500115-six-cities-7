import React from 'react';
import PropTypes from 'prop-types';


function CommentField(props) {
  return (
    <textarea
      className="reviews__textarea form__textarea"
      id="review"
      name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      required
      {...props}
    />
  );
}


CommentField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};


export default React.memo(CommentField);
