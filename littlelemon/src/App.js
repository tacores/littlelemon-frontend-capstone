import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import BookingPage from './BookingPage';
import React, {useState} from "react";

function App() {

  const [availableTimes, setAvailableTimes] = useState({
    '2024-06-06': ['17', '18', '19', '22'],
    '2024-06-07': ['17', '20', '21', '22'],
  });

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Main/>}></Route>
          <Route path="/booking" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
