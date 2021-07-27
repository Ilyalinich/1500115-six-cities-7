import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {CITIES} from '../../../constant';
import City from './city';


describe('Component: City', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const fakeCityName = CITIES[0];

    const fakeProps = {
      cityName: fakeCityName,
      isActive: false,
      onClick: jest.fn(),
    };

    render(
      <Router history={history}>
        <City
          {...fakeProps}
        />
      </Router>,
    );

    expect(screen.getByText(new RegExp(`${fakeCityName}`, 'i'))).toBeInTheDocument();
  });
});
