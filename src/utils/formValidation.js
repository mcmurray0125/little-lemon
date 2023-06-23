export const validateForm = ({ date, time, guests, occasion }) => {
    const errors = {};
  
    if (!date) {
      errors.date = 'Please choose a date.';
    } else {
      const today = new Date();
      const selectedDate = new Date(date);
      if (selectedDate < today) {
        errors.date = 'Selected date cannot be in the past.';
      }
    }
  
    if (!time) {
      errors.time = 'Please choose a time.';
    }
  
    if (!guests) {
      errors.guests = 'Please enter the number of guests.';
    } else if (guests < 1 || guests > 10) {
      errors.guests = 'Number of guests must be between 1 and 10.';
    }
  
    if (!occasion) {
      errors.occasion = 'Please choose an occasion.';
    }
  
    return errors;
  };
  