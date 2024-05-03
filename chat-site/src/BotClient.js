
// A simple function to simulate a more dynamic response based on user input
const getBotResponse = (message, selectedCounty) => {
    // Convert the user input to lowercase for easier keyword matching
const baseURL = 'http://localhost:3001';
// The message you want to send

// Construct the full URL with query parameters
const url = new URL('/get-response', baseURL);
url.searchParams.append('message', message);
url.searchParams.append('county', selectedCounty);

// Use the fetch API to send a GET request
return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the JSON response body
    })
    .then(data => {
      console.log('data: ', data);
      return data; // Make sure to return the data here so it can be used by the caller
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      throw error; // Rethrow the error so it can be caught by the caller
    });
  };
  
export {getBotResponse};


const postEmail = (message, name,email) => {
    // Convert the user input to lowercase for easier keyword matching
const baseURL = 'http://localhost:3001';
// The message you want to send

// Construct the full URL with query parameters
const url = new URL('/send-email', baseURL);
url.searchParams.append('message', message);
url.searchParams.append('name', name);
url.searchParams.append('email', email);

// Use the fetch API to send a GET request
return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the JSON response body
    })
    .then(data => {
      console.log('data: ', data);
      return data; // Make sure to return the data here so it can be used by the caller
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      throw error; // Rethrow the error so it can be caught by the caller
    });
  };
  
export {postEmail};