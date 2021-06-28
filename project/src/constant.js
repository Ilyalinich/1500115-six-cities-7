const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer',
};

const ApiRoute = {
  OFFERS: '/hotels',
  // LOGIN: '/login',
  // LOGOUT: '/logout',
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


export {AppRoute, ApiRoute, PropertyTypesMap, SortType, CITIES, SINGULAR_NUMBER};
