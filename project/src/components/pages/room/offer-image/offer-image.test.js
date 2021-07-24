import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import OfferImage from './offer-image';


describe('Component: OfferImage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const fakeImageSrc = 'imgUrl1';

    render(
      <Router history={history}>
        <OfferImage
          imageSrc={fakeImageSrc}
        />
      </Router>,
    );

    expect(screen.getByTestId('offer image')).toBeInTheDocument();
  });
});
