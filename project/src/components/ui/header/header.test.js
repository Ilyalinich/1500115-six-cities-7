import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Header from './header';


const fakeUserNavComponent = () => (<p>Correct render of UserNav component</p>);
jest.mock('./user-nav/user-nav', () => fakeUserNavComponent);


describe('Component: Header', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Header />
      </Router>,
    );

    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
    expect(screen.getByText(/Correct render of UserNav component/i)).toBeInTheDocument();
  });
});
