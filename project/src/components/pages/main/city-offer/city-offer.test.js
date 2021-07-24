import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import CityOffer from './city-offer';


const fakeOffer = () => (<p>Correct render of Offer component</p>);
jest.mock('../../../ui/offer/offer', () => fakeOffer);


describe('Component: CityOffer', () => {
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
      onMouseEnter: () => {},
      onMouseLeave: () => {},
    };


    render(
      <Router history={history}>
        <CityOffer
          {...fakeProps}
        />
      </Router>,
    );


    expect(screen.getByText(/Correct render of Offer component/i)).toBeInTheDocument();
  });
});
