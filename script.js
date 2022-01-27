// Getting Quotes From API
// Asynchronous can work at any time without having to wait on the browser



// let apiQuotes = [];

// Show new quote function

function newQuote()
{
const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
console.log(quote)
}



// async function getQuotes() {
//   const apiURL = "https://type.fit/api/quotes";
//   // attempting to complete a fetch request
//   try {
//     //   this response const will not be populated until it has fetched some data
//     const response = await fetch(apiURL);
//     apiQuotes = await response.json();
//     newQuote();
//     // console.log(apiQuotes[12]);
//   } catch (error) {
//     //Catch Error goes here
//   }
// }

//On Load
// getQuotes();

newQuote()
