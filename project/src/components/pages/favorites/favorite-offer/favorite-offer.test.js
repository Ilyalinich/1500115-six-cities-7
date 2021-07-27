import React from 'react';
import {render, screen} from '@testing-library/react';
import FavoriteOffer from './favorite-offer';


const fakeOffer = () => (<p>Correct render of Offer component</p>);
jest.mock('../../../ui/offer/offer', () => fakeOffer);


describe('Component: FavoriteOffer', () => {
  it('should render correctly', () => {
    const fakeProps = {
      id: 1,
      price: 222,
      rating: 5,
      title: '',
      type: '',
      previewImage: '',
      isFavorite: true,
      isPremium: false,
      onFavoriteStatusChange: jest.fn(),
    };

    render(
      <FavoriteOffer
        {...fakeProps}
      />,
    );

    expect(screen.getByText(/Correct render of Offer component/i)).toBeInTheDocument();
  });
});
