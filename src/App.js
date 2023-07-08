import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;