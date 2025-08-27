import { Routes, Route, useNavigate } from "react-router-dom";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../api"; // Updated import path


function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

function updateTimes(state, date) {
  return fetchAPI(new Date(date));
}

function Homepage() {
  return (
    <>
      <h1>Welcome to the homepage</h1>
      <p>This is the homepage</p>
    </>
  );
}

function AboutPage() {
  return (
    <h1>About Little Lemon</h1>
  );
}

function MenuPage() {
  return (
    <h1>Our Menu</h1>
  );
}

function OrderPage() {
  return (
    <h1>Order Online</h1>
  );
}

function LoginPage() {
  return (
    <h1>Login</h1>
  );
}

function submitForm(formData, navigate) { // Added navigate as a parameter
  const response = submitAPI(formData);
  if (response === true) {
    navigate("/confirmed");
  }
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  );
}

export default Main;
