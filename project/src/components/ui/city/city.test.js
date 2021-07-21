import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import City from './city';


describe('Component: City', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const fakeProps = {
      cityName: 'cityName',
      isActive: false,
      onClick: () => {},
    };

    render(
      <Router history={history}>
        <City
          {...fakeProps}
        />
      </Router>,
    );

    expect(screen.getByText(/cityName/i)).toBeInTheDocument();
  });
});
