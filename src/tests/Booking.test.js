import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom"
import Booking from '../pages/Booking';

afterEach(cleanup);

test('Renders the BookingForm heading', () => {
    render(<Booking />);
    const headingElement = screen.getByText("Reserve Your Seat");
    expect(headingElement).toBeInTheDocument();
})

    // Test initializeTimes
test('initializeTimes returns the correct expected value', () => {
  render(<Booking />);
  const selectElement = screen.getByTestId("select-time"); // Retrieve the select element by the test ID
  const availableTimes = Array.from(selectElement.options).map((option) => option.textContent);
  const expectedTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];

  expect(availableTimes).toEqual(expectedTimes);
});

  // Test updateTimes 
test('updateTimes returns the same value as provided in the state', () => {
    render(<Booking />);
    const selectElement = screen.getByTestId("select-time"); // Retrieve the select element by the test ID
    const availableTimes = Array.from(selectElement.options).map((option) => option.textContent);
    const state = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    ];

    expect(availableTimes).toEqual(state);
});