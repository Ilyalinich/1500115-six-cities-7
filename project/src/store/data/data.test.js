import {setOffers, updateOffers, deauthorize} from '../action';
import {data} from './data';


const initialState = {
  offers: [],
  isOffersLoading: true,
};

const loadedOffers = [
  {
    id: 1,
    isFavorite: false,
  },
  {
    id: 2,
    isFavorite: true,
  },
];


describe('Reducer: data', () => {
  it('without additional parameters should return initial state', () => {
    expect(data(undefined, {}))
      .toEqual(initialState);
  });

  it('should set loaded offers and reset loading status', () => {
    expect(data(initialState, setOffers(loadedOffers)))
      .toEqual({
        offers: loadedOffers,
        isOffersLoading: false,
      });
  });

  it('should update offers by loaded updated offer', () => {
    const state = {
      offers: loadedOffers,
      isOffersLoading: false,
    };

    const updatedOffer = {
      id: 1,
      isFavorite: true,
    };

    expect(data(state, updateOffers(updatedOffer)))
      .toEqual({
        offers: [
          {
            id: 1,
            isFavorite: true,
          },
          {
            id: 2,
            isFavorite: true,
          },
        ],
        isOffersLoading: false,
      });
  });

  it('should reset offers favorite status to "false" value when user deauthorized', () => {
    const state = {
      offers: loadedOffers,
      isOffersLoading: false,
    };

    expect(data(state, deauthorize()))
      .toEqual({
        offers: [
          {
            id: 1,
            isFavorite: false,
          },
          {
            id: 2,
            isFavorite: false,
          },
        ],
        isOffersLoading: false,
      });
  });
});
