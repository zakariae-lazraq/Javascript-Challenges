const api_URL = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuoteBtn = document.getElementById("newBtnQuote");
async function getQuotes(url) {
  const response = await fetch(url);
  var data = await response.json();
  var rightQuote = document.createElement("i");

  //   rightQuote.className = "fa-solid fa-quote-right";

  quote.innerHTML = data.content;
  author.innerHTML = data.author;
  //   quote.appendChild(rightQuote);
}
function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      " ---- by" +
      author.innerHTML,
    "Tweet window",
    "width=600,height=300"
  );
}
