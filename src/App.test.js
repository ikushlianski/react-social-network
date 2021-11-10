import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import store from './redux/state';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

test('adds new post', () => {
  render(
    <React.Fragment>
      <App store={store}/>
    </React.Fragment>
  );

  const profileMenuButton = screen.getByText(/profile/i);

  userEvent.click(profileMenuButton);

  const newPostInput = screen.getByText(/it-kamasutra.com/i);
  const addPostButton = screen.getByText(/add post/i);

  expect(store.getState().profilePage.posts).toHaveLength(2)

  userEvent.clear(newPostInput)
  userEvent.type(newPostInput, 'Hey world');
  userEvent.click(addPostButton);

  expect(store.getState().profilePage.posts).toHaveLength(3)
});

