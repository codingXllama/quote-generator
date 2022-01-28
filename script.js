// Getting Quotes From API
// Asynchronous can work at any time without having to wait on the browser

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];
function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // Checking if the Author field in the quotes.js file is empty, if so we replace it with Unknown
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    // populating the quote's author and quote string
    authorText.textContent = quote.author;
  }
  // checking the quote length to determine styling

  if (quote.text.length > 130) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
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
