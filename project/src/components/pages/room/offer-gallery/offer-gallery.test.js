import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import OfferGallery from './offer-gallery';


describe('Component: OfferGallery', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const fakeImages = ['imgUrl1', 'imgUrl2'];

    render(
      <Router history={history}>
        <OfferGallery
          images={fakeImages}
        />
      </Router>,
    );

    expect(screen.getByTestId('offer image imgUrl1')).toBeInTheDocument();
    expect(screen.getByTestId('offer image imgUrl2')).toBeInTheDocument();
  });
});
