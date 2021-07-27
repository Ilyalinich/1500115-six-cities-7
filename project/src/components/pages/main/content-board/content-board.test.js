import React from 'react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {ReducerType} from '../../../../store/root-reducer';
import ContentBoard from './content-board';


const fakeCitiesNavMenuComponent = () => (<p>Correct render of citiesNavMenu component</p>);
jest.mock('../cities-nav-menu/cities-nav-menu', () => fakeCitiesNavMenuComponent);

const fakeContentContainerComponent = () => (<p>Correct render of ContentContainer component</p>);
jest.mock('../content-container/content-container', () => fakeContentContainerComponent);


describe('Component: ContentBoard', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const createFakeStore = configureStore({});
    const store = createFakeStore({
      [ReducerType.OPERATION]: {
        currentCity: '',
      },
      [ReducerType.DATA]: {
        offers: [],
      },
    });


    render(
      <Provider store={store}>
        <Router history={history}>
          <ContentBoard />
        </Router>
      </Provider>,
    );


    expect(screen.getByText(/Correct render of citiesNavMenu component/i)).toBeInTheDocument();
    expect(screen.getByText(/Correct render of ContentContainer component/i)).toBeInTheDocument();
  });
});
