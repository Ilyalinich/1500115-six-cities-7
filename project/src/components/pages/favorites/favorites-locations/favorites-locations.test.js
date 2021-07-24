import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FavoritesLocations from './favorites-locations';
import {CITIES} from '../../../../constant';


const fakeFavOfferComponent = () => (<p>Correct render of FavoriteOffer component</p>);
jest.mock('../favorite-offer/favorite-offer', () => fakeFavOfferComponent);


describe('Component: FavoritesLocations', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const fakeCityName = CITIES[0];

    const fakeProps ={
      city: fakeCityName,
      offers: [
        {
          id: 1,
          price: 222,
          rating: 5,
          title: '',
          type: '',
          previewImage: '',
          isFavorite: true,
          isPremium: false,
        },
      ],
      updateOffers: () => {},
    };

    render(
      <Router history={history}>
        <FavoritesLocations
          {...fakeProps}
        />
      </Router>,
    );


    expect(screen.getByText(new RegExp(`${fakeCityName}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(/Correct render of FavoriteOffer component/i)).toBeInTheDocument();
  });
});
