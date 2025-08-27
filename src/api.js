// Mock implementation of fetchAPI and submitAPI

export function fetchAPI(date) {
  // Simulate fetching available times based on the date
  return ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"];
}

export function submitAPI(formData) {
  // Simulate form submission
  console.log("Form submitted with data:", formData);
  return true; // Simulate a successful submission
}
