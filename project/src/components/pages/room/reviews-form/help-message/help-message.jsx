import React from 'react';


function HelpMessage() {
  return (
    <>
    To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
    </>
  );
}

export default React.memo(HelpMessage);
