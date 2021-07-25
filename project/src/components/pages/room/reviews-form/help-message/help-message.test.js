import React from 'react';
import {render, screen} from '@testing-library/react';
import HelpMessage from './help-message';

describe('Component: HelpMessage', () => {
  it('should render correctly', () => {
    render(<HelpMessage />);

    expect(screen.getByText(/To submit review please make sure to set/i)).toBeInTheDocument();
    expect(screen.getByText(/and describe your stay with at least/i)).toBeInTheDocument();
  });
});
