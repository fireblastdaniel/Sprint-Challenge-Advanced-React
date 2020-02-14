import React from 'react';
import { render, fireEvent } from '@testing-library/react'
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

// test('button changes color scheme', () => {
//   //test default color first
//   const { getByText } = render(<App />);
//   const colorG = getByText(/Goldenrod/i)
//   const colorD = getByText(/Deep Space/i)
//   expect(colorG).toBeVisible();
//   expect(colorD).not.toBeVisible();

//   //test color change
//   fireEvent.click(getByText(/Toggle Dark Mode/i))
//   expect(colorG).not.toBeVisible();
//   expect(colorD).toBeVisible();

//   //test color change back
//   fireEvent.click(getByText(/Toggle Dark Mode/i))
//   expect(colorG).toBeVisible();
//   expect(colorD).not.toBeVisible();
// })
