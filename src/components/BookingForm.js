import { useState } from "react";

function BookingForm() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const handleSumbit = (e) => {
        e.preventDefault();
        console.log({
            date,
            time,
            guests,
            occasion,
        });
        alert(`Booking confirmed for ${guests} guest(s) at ${time} on ${date}!`);
    };


    return (
        <form
            onSumbit={handleSumbit}
            style={{ display:"grid", maxWidth:"200px", gap:"20px" }}
        >
            {/*Date*/}
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={
                    (e) => {
                        setDate(e.target.value);
                        props.updateTimes(e.target.value); //dispatch new data to Main
                }}
                required
            />

            {/*Time*/}
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            >
                <option value="">Select a time</option>
                {availableTimes.map((t) => (
                    <option key={t} value={t}>
                        {t}
                    </option>
                ))}
            </select>

            {/*Guests*/}
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
            />

            {/*Occasion*/}
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            {/*Submit*/}
            <input type="submit" value="Make Your Reservation" />
        </form>
    );
}

export default BookingForm;
