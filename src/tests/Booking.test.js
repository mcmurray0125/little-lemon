const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));
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
    test('initializeTimes returns a non-empty array', () => {
      render(<Booking />);
      const selectElement = screen.getByTestId("select-time"); // Retrieve the select element by the test ID
      const availableTimes = Array.from(selectElement.options).map((option) => option.textContent);
    
      expect(availableTimes.length).toBeGreaterThan(0);
    });