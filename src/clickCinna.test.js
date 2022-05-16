import { render, screen, fireEvent } from '@testing-library/react';
import Cinna from './clickCinna';

test('Displays correct alt text for image', () =>
{
  render(<Cinna />);
  const linkElement = screen.getByAltText('Cinnamoroll plushie');
  expect(linkElement).toBeInTheDocument();
});

test('Alert when image clicked', async () => {
  const alertMock = jest.spyOn(window,'alert').mockImplementation(); 
  render(<Cinna />)
  fireEvent.click(screen.getByAltText('Cinnamoroll plushie')) // find the image and click it
  expect(alertMock).toHaveBeenCalledTimes(1) // alert should have been triggered
});
