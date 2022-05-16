import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Purin from './clickPurin';

test('Displays correct alt text for image', () =>
{
  render(<Purin />);
  const linkElement = screen.getByAltText('Pompompurin plushie');
  expect(linkElement).toBeInTheDocument();
});

test('Alert when image clicked', async () => {
    const alertMock = jest.spyOn(window,'alert').mockImplementation(); 
    render(<Purin />)
    fireEvent.click(screen.getByAltText('Pompompurin plushie')) // find the image and click it
    expect(alertMock).toHaveBeenCalledTimes(1) // alert should have been triggered
});