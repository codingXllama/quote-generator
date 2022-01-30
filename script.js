// Getting Quotes From API
// Asynchronous can work at any time without having to wait on the browser

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

// Show loading animation

function showLoader() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide loading animation

function hideLoader() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

function newQuote() {
  showLoader();
  // loader.classList.remove("hider");
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

  // We will set the quote and hide the Loader
  quoteText.textContent = quote.text;
  hideLoader();
}

async function getQuotes() {
  showLoader();
  const apiURL = "https://type.fit/api/quotes";
  // attempting to complete a fetch request
  try {
    //   this response const will not be populated until it has fetched some data
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
    // showLoader();
    newQuote();
  } catch (error) {
    //Catch Error goes here
  }
}

// Tweeting Quote functionality

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  // opening a new window
  window.open(twitterUrl, "_blank");
}

// EventListeners supposed to be placed at the bottom where we add the fns before calling the btn
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

//On Load

// showLoader();
getQuotes();
