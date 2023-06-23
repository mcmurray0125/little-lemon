import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { validateForm } from '../utils/formValidation';


export default function BookingForm({ availableTimes, submitData, dispatchOnDateChange }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(0);
  const [occasion, setOccasion] = useState('');
  const [errors, setErrors] = useState({});

  const handleDateChange = e => {
    setDate(e.target.value);
    dispatchOnDateChange(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      submitData(formData);
    }
  };

  return (
    <section id='booking'>
        <Container className='booking-container p-5'>
            <h1>Reserve Your Seat</h1>
            <Form style={{ display: 'grid', width: '300px', gap: '10px' }} onSubmit={handleFormSubmit} data-testid="booking-form">
                <Form.Label htmlFor="res-date">Choose date</Form.Label>
                <Form.Control
                    required
                    type="date"
                    id="res-date"
                    aria-label="Choose date"
                    value={date}
                    onChange={handleDateChange}
                />
                {errors.date && <div className="res-error" data-testid="date-error">{errors.date}</div>}

                <Form.Label htmlFor="res-time">Choose time</Form.Label>
                <Form.Select
                    required
                    id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    data-testid="select-time"
                    aria-label="Choose time"
                >
                    {availableTimes.map((availableTime) => (
                    <option key={availableTime}>{availableTime}</option>
                    ))}
                </Form.Select>
                {errors.time && <div className="res-error" data-testid="time-error">{errors.time}</div>}

                <Form.Label htmlFor="guests">Number of guests</Form.Label>
                <Form.Control
                    required
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    aria-label="Number of guests"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                />
                {errors.guests && <div className="res-error" data-testid="guests-error">{errors.guests}</div>} 

                <Form.Label htmlFor="occasion">Occasion</Form.Label>
                <Form.Select
                    required
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    aria-label="Occasion"
                >
                    <option disabled value="">What's the Occasion?</option>
                    <option>Dinner</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </Form.Select>
                {errors.occasion && <div className="res-error" data-testid="occasion-error">{errors.occasion}</div>}

                <Button type="submit" className='mt-3'>Make Your Reservation</Button>
            </Form>

        </Container>
    </section>
  );
}