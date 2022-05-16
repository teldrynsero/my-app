import { render, screen } from '@testing-library/react';
import App from './App';

test('renders shop name', () =>
{
  render(<App />);
  const linkElement = screen.getByText(/❀ Plushie Shop ❀/i); // did title render?
  expect(linkElement).toBeInTheDocument();
});
