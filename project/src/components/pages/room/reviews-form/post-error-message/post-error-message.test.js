import React from 'react';
import {render, screen} from '@testing-library/react';
import PostErrorMessage from './post-error-message';

describe('Component: PostErrorMessage', () => {
  it('should render correctly', () => {
    render(<PostErrorMessage />);

    expect(screen.getByText(/Error sending data to the server, please try again later.../i)).toBeInTheDocument();
  });
});
