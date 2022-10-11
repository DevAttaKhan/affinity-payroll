import Intro from './pages/SplashScreen/Intro';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="dashboard/*" element={<AppRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
