import React from 'react';
import {render, screen} from '@testing-library/react';
import OfferGallery from './offer-gallery';


describe('Component: OfferGallery', () => {
  it('should render correctly', () => {
    const fakeImages = ['imgUrl1', 'imgUrl2'];

    render(
      <OfferGallery
        images={fakeImages}
      />,
    );

    expect(screen.queryAllByTestId('offer image')).toHaveLength(fakeImages.length);
  });
});
