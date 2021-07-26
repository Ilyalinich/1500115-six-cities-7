import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router, Switch, Route} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history';
import NotFoundScreen from './not-found-screen';
import {AppRoute} from '../../../constant';


const fakeHeaderComponent = () => (<p>Correct render of Header component</p>);
jest.mock('../../ui/header/header', () => fakeHeaderComponent);

let history = null;


describe('Component: NotFoundScreen', () => {
  beforeEach(() => {
    history = createMemoryHistory();
    history.push(AppRoute.NOT_FOUND);
  });

  it('should render correctly', () => {
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

  it('when user click "Return to the main page link" should redirect', () => {
    render(
      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.NOT_FOUND}>
            <NotFoundScreen />
          </Route>
          <Route exact path={AppRoute.ROOT}><h1>Mock Main page screen</h1></Route>
        </Switch>
      </Router>,
    );

    userEvent.click(screen.getByText(/Return to the main page/i));
    expect(screen.getByText(/Mock Main page screen/i)).toBeInTheDocument();
  });
});
