const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer',
  NOT_FOUND: '/not found',
};

const ApiRoute = {
  OFFERS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
  REVIEWS: '/comments',
  NEARBY: '/nearby',
};

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

const PropertyTypesMap = {
  apartment: 'Apartment',
  room: 'Private Room',
  house: 'House',
  hotel: 'Hotel',
};

const SortType = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
};

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam','Hamburg', 'Dusseldorf'];

const SINGULAR_NUMBER = 1;


export {AppRoute, ApiRoute, AuthorizationStatus, PropertyTypesMap, SortType, CITIES, SINGULAR_NUMBER};
