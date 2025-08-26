import { initializeTimes, updateTimes } from "../components/Main";
import { fetchAPI } from "../../public/index.html";

jest.mock("../../public/index.html");

test("initialize returns the the correct initial available times", () => {
    const mockTimes = ["17:00", "18:00", "19:00"];
    fetchAPI.mockReturnValue(mockTimes);

    const result = initializeTimes();
    expect(fetchAPI).toEqual(mockTimes);
    expect(fetchAPI).toHaveBeenCalled();
});

test("updateTimes returns available times for a given date", () => {
    const mockTimes = ["20:00", "21:00"];
    const selectedDate = new Date("2025-08-20");
    
    fetchAPI.mockReturnValue(mockTimes);
  
    const result = updateTimes([], { type: "update_times", payload: selectedDate });
    
    expect(result).toEqual(mockTimes);
    expect(fetchAPI).toHaveBeenCalledWith(selectedDate);
});