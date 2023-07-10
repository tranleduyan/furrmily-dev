import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;