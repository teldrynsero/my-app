import { render, screen, fireEvent } from '@testing-library/react';
import CheckOut from './checkout';

test('Clicking button reloads page', () =>
{
    const jsdomAlert = window.alert;  // remember jsdom alert
    window.alert = () => {};  

    // mocking window.location.reload for jest
    delete window.location;
    window.location = { reload: jest.fn() };

    render(<CheckOut />);
    const linkElement = screen.getByText('CHECK OUT'); // find the button

    fireEvent.click(screen.getByText('CHECK OUT')); // click the button

    expect(window.location.reload).toHaveBeenCalled(); // did page reload?

    window.alert = jsdomAlert; // restore alert
});

test('Alert when image clicked', async () => {
    const alertMock = jest.spyOn(window,'alert').mockImplementation();
    render(<CheckOut />)
    fireEvent.click(screen.getByText('CHECK OUT')) // find the button and click it
    expect(alertMock).toHaveBeenCalledTimes(1) // alert should have been triggered
});