import {data} from './data';
import {setOffers, updateOffers} from '../action';


const initialState = {
  offers: [],
  isOffersLoading: true,
};

const offers = [
  {
    id: 1,
    isFavorite: false,
    price: 291,
    type: 'hotel',
  },
  {
    id: 2,
    isFavorite: false,
    price: 500,
    type: 'house',
  },
];


describe('Reducer: data', () => {
  it('without additional parameters should return initial state', () => {
    expect(data(undefined, {}))
      .toEqual(initialState);
  });

  it('should set loaded offers and rest loading status', () => {
    expect(data(initialState, setOffers(offers)))
      .toEqual({
        offers,
        isOffersLoading: false,
      });
  });

  it('should update offers by loaded updated offer', () => {
    const state = {offers, isOffersLoading: false};
    const offer = {
      id: 1,
      isFavorite: true,
      price: 291,
      type: 'hotel',
    };

    expect(data(state, updateOffers(offer)))
      .toEqual({
        offers: [
          {
            id: 1,
            isFavorite: true,
            price: 291,
            type: 'hotel',
          },
          {
            id: 2,
            isFavorite: false,
            price: 500,
            type: 'house',
          },
        ],
        isOffersLoading: false,
      });
  });
});
