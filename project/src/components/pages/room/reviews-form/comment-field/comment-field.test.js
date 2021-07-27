import React from 'react';
import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';
import CommentField from './comment-field';


describe('Component: CommentField', () => {
  it('should render correctly', () => {
    const fakeProps = {
      value: '',
      disabled: false,
      onChange: jest.fn(),
    };

    render(
      <CommentField
        {...fakeProps}
      />,
    );

    expect(screen.getByTestId('comment field')).toHaveTextContent('');
    expect(screen.getByPlaceholderText(/Tell how was your stay, what you like and what can be improved/i)).toBeInTheDocument();
  });

  it('should make a correct onChange call', () => {
    const fakeChangeHandler = jest.fn();
    const fakeSymbol = '1';
    const fakeProps = {
      value: '',
      disabled: false,
      onChange: fakeChangeHandler,
    };

    render(
      <CommentField
        {...fakeProps}
      />,
    );

    userEvent.type(screen.getByTestId('comment field'), fakeSymbol);

    expect(fakeChangeHandler).toBeCalledTimes(fakeSymbol.length);
  });
});
