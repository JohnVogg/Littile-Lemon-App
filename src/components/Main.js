import { Routes, Route } from "react-router-dom";


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

function ReservationPage() {
  return (
    <h1>Reservations</h1>
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
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservations" element={<ReservationPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  );
}

export default Main;
