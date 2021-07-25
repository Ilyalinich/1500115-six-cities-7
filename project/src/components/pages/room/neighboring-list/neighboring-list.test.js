import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import NeighboringList from './neighboring-list';


const fakeNeighboringOfferComponent = () => (<p>Correct render of NeighboringOffer component</p>);
jest.mock('../neighboring-offer/neighboring-offer', () => fakeNeighboringOfferComponent);


describe('Component: NeighboringList', () => {
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
      updateNeighboringOffers: jest.fn(),
    };


    render(
      <Router history={history}>
        <NeighboringList {...fakeProps} />
      </Router>,
    );


    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
    expect(screen.queryAllByText(/Correct render of NeighboringOffer component/i)).toHaveLength(fakeProps.offers.length);
  });
});
