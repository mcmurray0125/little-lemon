import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Booking from './pages/Booking';
import Confirmation from './pages/Confirmation';


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking-confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  )
}

export default App
