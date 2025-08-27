import { useState } from "react";

function BookingForm({availableTimes, dispatch, submitForm }) {
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: 1,
        occasion: "Birthday"
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        if (e.target.name === "date") {
            dispatch({ type: "update_times", payload: e.target.value });
        }
    };

    const handleSumbit = (e) => {
        e.preventDefault();
        submitForm(formData);  //call function from Main
    }

    const isFormValid = (formData.date && formData.time && formData.guests >= 1 && formData.guests <= 10);


    return (
        <form onSubmit={handleSumbit}>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            name="date"
            value={formData.date}
            min={new Date().toISOString().split("T")[0]} //Doen not allow the user to choose the past
            onChange={handleChange}
            required
          />
    
        <label htmlFor="res-time">Choose time</label>
        <select
            id="res-time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
        >
        {Array.isArray(availableTimes) && availableTimes.map((time) => (
            <option key={time}>{time}</option>
            ))}
        </select>
    
        <label htmlFor="guests">Number of guests</label>
        <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleChange}
            required
        />
    
        <label htmlFor="occasion">Occasion</label>
        <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
        >
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
    
        <button type="submit" disabled={!isFormValid}>
            Make Your reservation
        </button>
    </form>
    );
}

export default BookingForm;
