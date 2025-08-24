import BookingForm from "./BookingForm";

function BookingPage() {
    return (
        <section style={{ padding: "2rem" }}>
            <h1>Book a table</h1>
            <p>Please fill in the details below to reserve a table.</p>
            <BookingForm />
        </section>
    );
}

export default BookingPage;