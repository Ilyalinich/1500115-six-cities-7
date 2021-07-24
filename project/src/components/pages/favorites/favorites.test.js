import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
// import {Provider} from 'react-redux';
// import configureStore from 'redux-mock-store';
// import userEvent from '@testing-library/user-event';
import * as Redux from 'react-redux';
import Favorites from './favorites';
// import {AppRoute} from '../../../constant';
// import {ActionType} from '../../../store/action';
// import {loadFavoriteOffers} from '../../../store/api-action';


let history = null;


describe('Component: Favorites', () => {
  beforeAll(() => {
    history = createMemoryHistory();
  });

  it('should render correctly', () => {
    const dispatch = jest.fn(() => Promise.resolve([]));
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);


    // jest.mock('../../../store/api-action', () => ({
    //   __esModule: true,
    //   loadFavoriteOffers: () => [],
    // }));

    render(
      <Router history={history}>
        <Favorites />
      </Router>,
    );

    expect(useDispatch).toBeCalledTimes(1);
  });
});
