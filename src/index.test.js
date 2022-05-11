import render from '@testing-library/react';
import screen from '@testing-library/react';
import Shop from './index';

test('renders h1 tag', () => {
  render(<Shop />);
  const h1 = screen.getByText(/Plushie Shop/i);
  expect(h1).toBeInTheDocument();
});