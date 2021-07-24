import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FavoriteOffer from './favorite-offer';


const fakeOffer = () => (<p>Correct render of Offer component</p>);
jest.mock('../../../ui/offer/offer', () => fakeOffer);


describe('Component: FavoriteOffer', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const fakeProps = {
      id: 1,
      price: 222,
      rating: 5,
      title: '',
      type: '',
      previewImage: '',
      isFavorite: true,
      isPremium: false,
      favButtonClickHandler: () => {},
    };


    render(
      <Router history={history}>
        <FavoriteOffer
          {...fakeProps}
        />
      </Router>,
    );


    expect(screen.getByText(/Correct render of Offer component/i)).toBeInTheDocument();
  });
});
