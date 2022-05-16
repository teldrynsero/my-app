import { render, screen, fireEvent } from '@testing-library/react';
import Kuro from './clickKUro';

test('Displays correct alt text for image', () =>
{
  render(<Kuro />);
  const linkElement = screen.getByAltText('Kuromi plushie');
  expect(linkElement).toBeInTheDocument();
});

test('Alert when image clicked', async () => {
  const alertMock = jest.spyOn(window,'alert').mockImplementation(); 
  render(<Kuro />)
  fireEvent.click(screen.getByAltText('Kuromi plushie')) // find the image and click it
  expect(alertMock).toHaveBeenCalledTimes(1) // alert should have been triggered
});