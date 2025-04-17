import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom';
import Survey from './components/SurveyForm.jsx';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import Team from './components/Team.jsx';
import Events from './components/Events.jsx';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
  );
}

export default App;
