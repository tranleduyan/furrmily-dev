import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import Dashboard from './Pages/Dashboard';
import Pets from './Pages/Pets';
import Tasks from './Pages/Tasks';
import Activities from './Pages/Activities';
import Settings from './Pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Pets" element={<Pets />} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="/Activities" element={<Activities />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;