import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {AppRoute} from '../../../constant';
import Main from './main';


const fakeHeaderComponent = () => (<p>Correct render of Header component</p>);
jest.mock('../../ui/header/header', () => fakeHeaderComponent);

const fakeContentBoardComponent = () => (<p>Correct render of ContentBoard component</p>);
jest.mock('./content-board/content-board', () => fakeContentBoardComponent);


describe('Component: Main', () => {
  it('should render "Main page" when user navigate to "/" url', () => {
    const history = createMemoryHistory();
    history.push(AppRoute.ROOT);

    render(
      <Router history={history}>
        <Main />
      </Router>,
    );

    expect(screen.getByText(/Correct render of Header component/i)).toBeInTheDocument();
    expect(screen.getByText(/Correct render of ContentBoard component/i)).toBeInTheDocument();
  });
});
