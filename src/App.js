import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const SignInPage = lazy(() => import('./Pages/SignInPage'));
const SignUpPage = lazy(() => import('./Pages/SignUpPage'));
const Dashboard = lazy(() => import('./Pages/Dashboard'));
const Pets = lazy(() => import('./Pages/Pets'));
const Tasks = lazy(() => import('./Pages/Tasks'));
const Activities = lazy(() => import('./Pages/Activities'));
const Settings = lazy(() => import('./Pages/Settings'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Pets" element={<Pets />} />
          <Route path="/Tasks" element={<Tasks />} />
          <Route path="/Activities" element={<Activities />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;