import React from 'react';
import {render, screen} from '@testing-library/react';
import FavoritesList from './favorites-list';


const fakeFavoritesLocations = () => (<p>Correct render of FavoritesLocations component</p>);
jest.mock('../favorites-locations/favorites-locations', () => fakeFavoritesLocations);


describe('Component: FavoritesList', () => {
  it('should render correctly', () => {
    const fakeProps = {
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
          city: {name: ''},
        },
      ],
      updateOffers: jest.fn(),
    };

    render(
      <FavoritesList
        {...fakeProps}
      />,
    );

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
    expect(screen.queryAllByText(/Correct render of FavoritesLocations component/i)).toHaveLength(fakeProps.offers.length);
  });
});
