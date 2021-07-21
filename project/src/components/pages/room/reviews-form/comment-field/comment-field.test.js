import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import CommentField from './comment-field';


describe('Component: CommentField', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const fakeProps = {
      value: '',
      disabled: false,
      onChange: () => {},
    };

    render(
      <Router history={history}>
        <CommentField
          {...fakeProps}
        />
      </Router>,
    );

    expect(screen.getByTestId('comment field')).toHaveTextContent('');
    expect(screen.getByPlaceholderText(/Tell how was your stay, what you like and what can be improved/i)).toBeInTheDocument();
  });
});
