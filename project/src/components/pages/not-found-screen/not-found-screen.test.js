import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import NotFoundScreen from './not-found-screen';


const fakeHeaderComponent = () => (<p>Correct render of Header component</p>);
jest.mock('../../ui/header/header', () => fakeHeaderComponent);


describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <NotFoundScreen />
      </Router>,
    );


    expect(screen.getByText(/Correct render of Header component/i)).toBeInTheDocument();
    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('We could not find the page with the specified address')).toBeInTheDocument();
    expect(screen.getByText('Return to the main page')).toBeInTheDocument();
  });
});
