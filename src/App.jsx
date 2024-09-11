import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import BottomTabs from './components/tabs/BottomTabs';  // Import komponen BottomTabs
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import './index.scss'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <BottomTabs />
              </ProtectedRoute>
            }
          />
          {/* Redirect ke home jika sudah login dan mencoba akses /login */}
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <BottomTabs />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
