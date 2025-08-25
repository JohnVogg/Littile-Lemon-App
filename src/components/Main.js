import { Routes, Route } from "react-router-dom";
import BookingPage from "./BookingPage";
import { useReducer } from "react";


function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
}

function updateTimes(state, action) {
  switch (action.type) {
    case "update_date":
      //For now, always return the same times
      return initializeTimes();
      default:
        return state;
  }
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

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  );
}

export default Main;
