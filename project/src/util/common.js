const MAX_RATING_VALUE = 5;
const FULL_PERCENTS_VALUE = 100;

const getRatingInPercents = (rating) => Math.round(rating)/MAX_RATING_VALUE*FULL_PERCENTS_VALUE;


export {getRatingInPercents};
