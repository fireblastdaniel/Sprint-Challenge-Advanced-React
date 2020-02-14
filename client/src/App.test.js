import React from 'react';
import { render } from '@testing-library/react'
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders header', () => {
  const { getByText } = render(<App />);
  const header = getByText(/Women's World Cup Players/i)
  expect(header).toBeInTheDocument();
})
