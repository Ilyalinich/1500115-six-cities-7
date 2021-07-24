import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FavoritesList from './favorites-list';


const fakeFavoritesLocations = () => (<p>Correct render of FavoritesLocations component</p>);
jest.mock('../favorites-locations/favorites-locations', () => fakeFavoritesLocations);


describe('Component: FavoritesList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

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
      updateOffers: () => {},
    };

    render(
      <Router history={history}>
        <FavoritesList
          {...fakeProps}
        />
      </Router>,
    );


    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
    // expect(screen.getByText(/Correct render of FavoritesLocations component/i)).toBeInTheDocument();
    expect(screen.queryAllByText(/Correct render of FavoritesLocations component/i)).toHaveLength(1);
  });
});
