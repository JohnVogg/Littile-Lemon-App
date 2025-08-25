import { initializeTimes, updateTimes } from "../components/Main";

test("initialize returns the the correct initial available times", () => {
    const times = initializeTimes();
    expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

test("updateTimes returns the same state provided", () => {
    const initalState = ["17:00", "18;00"];
    const newState = updateTimes(initalState, { type: "update", payload: "2023-08-20"});
    expect(newState).toEqual(initialState);
});