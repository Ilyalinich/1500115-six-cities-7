import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import ContentBoard from './content-board';
import {ReducerType} from '../../../../store/root-reducer';


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
