import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Tux from './clickTux';

test('Displays correct alt text for image', () =>
{
  render(<Tux />);
  const linkElement = screen.getByAltText('Tuxedo Sam plushie');
  expect(linkElement).toBeInTheDocument();
});

test('Alert when image clicked', async () => {
    const alertMock = jest.spyOn(window,'alert').mockImplementation(); 
    render(<Tux />)
    fireEvent.click(screen.getByAltText('Tuxedo Sam plushie')) // find the image and click it
    expect(alertMock).toHaveBeenCalledTimes(1) // alert should have been triggered
});