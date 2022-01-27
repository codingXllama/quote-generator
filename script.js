// Getting Quotes From API

// Asynchronous can work at any time without having to wait on the browser

let apiQuotes = [];

function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

async function getQuotes() {
  const apiURL = "https://type.fit/api/quotes";
  // attempting to complete a fetch request
  try {
    //   this response const will not be populated until it has fetched some data
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //Catch Error goes here
  }
}

//On Load

getQuotes();
