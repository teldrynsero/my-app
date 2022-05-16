import { render, screen, fireEvent } from '@testing-library/react';
import Kerop from './clickKerop';

test('Displays correct alt text for image', () =>
{
  render(<Kerop />);
  const linkElement = screen.getByAltText('Keroppi plushie');
  expect(linkElement).toBeInTheDocument();
});

test('Alert when image clicked', async () => {
  const alertMock = jest.spyOn(window,'alert').mockImplementation(); 
  render(<Kerop />)
  fireEvent.click(screen.getByAltText('Keroppi plushie')) // find the image and click it
  expect(alertMock).toHaveBeenCalledTimes(1) // alert should have been triggered
});