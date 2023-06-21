import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Booking from './pages/Booking';


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  )
}

export default App
