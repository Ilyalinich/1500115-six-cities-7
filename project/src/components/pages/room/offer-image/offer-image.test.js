import React from 'react';
import {render, screen} from '@testing-library/react';
import OfferImage from './offer-image';


describe('Component: OfferImage', () => {
  it('should render correctly', () => {
    const fakeImageSrc = 'imgUrl1';

    render(
      <OfferImage
        imageSrc={fakeImageSrc}
      />,
    );

    expect(screen.getByTestId('offer image')).toBeInTheDocument();
  });
});
