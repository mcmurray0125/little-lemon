const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { waitFor } from '@testing-library/react';
import "@testing-library/jest-dom"
import Booking from '../pages/Booking';

afterEach(cleanup);

test('Renders the BookingForm heading', () => {
    render(<Booking />);
    const headingElement = screen.getByText("Reserve Your Seat");
    expect(headingElement).toBeInTheDocument();
})

    // Test initializeTimes
test('initializeTimes returns a non-empty array', () => {
  render(<Booking />);
  const selectElement = screen.getByTestId("select-time"); // Retrieve the select element by the test ID
  const availableTimes = Array.from(selectElement.options).map((option) => option.textContent);

  expect(availableTimes.length).toBeGreaterThan(0);
});

describe('BookingForm', () => {
  test('should apply HTML5 validation attributes to form input fields', () => {
    render(<Booking/>);

    const dateInput = screen.getByLabelText('Choose date');
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toBeRequired();

    const timeSelect = screen.getByLabelText('Choose time');
    expect(timeSelect).toHaveAttribute('id', 'res-time');
    expect(timeSelect).toBeRequired();

    const guestsInput = screen.getByLabelText('Number of guests');
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('placeholder', '1');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toBeRequired();

    const occasionSelect = screen.getByLabelText('Occasion');
    expect(occasionSelect).toHaveAttribute('id', 'occasion');
    expect(occasionSelect).toBeRequired();
  });

  test('should display error messages for invalid form submission', () => {
    render(<Booking />);
    const form = screen.getByTestId('booking-form');

    // Trigger form validation
    fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: 0 } });
    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: '' } });

    form.submit()
    
    waitFor(() => {
      expect(screen.getByTestId('date-error')).toHaveTextContent('Selected date cannot be in the past.');
      expect(screen.getByTestId('time-error')).toHaveTextContent('Please select a time');
      expect(screen.getByTestId('guests-error')).toHaveTextContent('Please enter the number of guests');
      expect(screen.getByTestId('occasion-error')).toHaveTextContent('Please select the occasion');
    });
  });

});