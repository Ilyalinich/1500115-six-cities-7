import React from 'react';
import {render, screen} from '@testing-library/react';
import Map from './map';


describe('Component: Map', () => {
  it('should render correctly', () => {
    const fakeProps = {
      offers: [],
      activeOfferId: 0,
      initialPosition: {
        latitude: 52,
        longitude: 4,
        zoom: 16,
      },
    };

    render(
      <Map
        {...fakeProps}
      />,
    );

    expect(screen.getByTestId('map container')).toBeInTheDocument();
  });
});
