import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import PostErrorMessage from './post-error-message';

describe('Component: PostErrorMessage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <PostErrorMessage />
      </Router>,
    );

    expect(screen.getByText(/Error sending data to the server, please try again later.../i)).toBeInTheDocument();
  });
});
