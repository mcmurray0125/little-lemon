import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export default function BookingForm({ availableTimes }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section id='booking'>
        <Container className='booking-container p-5'>
            <h1>Reserve Your Seat</h1>
            <Form style={{ display: 'grid', width: '300px', gap: '10px' }} onSubmit={handleSubmit}>
                <Form.Label htmlFor="res-date">Choose date</Form.Label>
                <Form.Control
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                <Form.Label htmlFor="res-time">Choose time</Form.Label>
                <Form.Select
                    id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    data-testid="select-time"
                >
                    {availableTimes.map((availableTime) => (
                    <option key={availableTime}>{availableTime}</option>
                    ))}
                </Form.Select>

                <Form.Label htmlFor="guests">Number of guests</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                />

                <Form.Label htmlFor="occasion">Occasion</Form.Label>
                <Form.Select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option>Dinner</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </Form.Select>

                <Button type="submit" className='mt-3'>Make Your Reservation</Button>
            </Form>

        </Container>
    </section>
  );
}