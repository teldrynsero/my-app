import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Twi from './clickTwi';

test('Displays correct alt text for image', () =>
{
  render(<Twi />);
  const linkElement = screen.getByAltText('Twin Stars plushie');
  expect(linkElement).toBeInTheDocument();
});

test('Alert when image clicked', async () => {
    const alertMock = jest.spyOn(window,'alert').mockImplementation(); 
    render(<Twi />)
    fireEvent.click(screen.getByAltText('Twin Stars plushie')) // find the image and click it
    expect(alertMock).toHaveBeenCalledTimes(1) // alert should have been triggered
});