/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/* quotes is an array of objects that store and organize data for every quote */
const quotes = [
  {
    quote: 'It does not do to dwell on dreams and forget to live.', 
    source: 'J.K. Rowling', 
    citation: 'Harry Potter and the Sorcerer\'s Stone', 
    year: '1997',
    category : '[Motivational]'
  },
  {
    quote: 'The fool doth think he is wise, but the wise man knows himself to be a fool.',
    source: 'William Shakespeare',
    citation: 'As You Like It',
    year: 1599
  },
  {
    quote: 'That which does not kill us makes us stronger.',
    source: 'Friedrich Nietzsche',
    category: '[Inspirational, Motivational]'
  },
  {
    quote: 'Folks are usually about as happy as they make their minds up to be.',
    source: 'Abraham Lincoln'
  },
  {
    quote: 'Do one thing every day that scares you.',
    source: 'Eleanor Roosevelt',
    category: '[Inspirational]'
  },
  {
    quote: 'You may say I\'m a dreamer, but I\'m not the only one. I hope someday you\'ll join us. And the world will live as one.',
    source: 'John Lennon'
  },
  {
    quote: 'It takes courage to grow up and become who you really are.',
    source: ' E.E. Cummings'
  }
];


/* `getRandomQuote` selects a random index value and based on it returns a random object from the quotes array */

function getRandomQuote() {
  const randIndex =  Math.floor(Math.random() * quotes.length);
  return quotes[randIndex];
}



/* `printQuote` selects a random object from the quotes array, builds a string of HTML and quote properties 
then uses the string to display its contents in the browser, 
it also  changes the background color of the html body by using a random rgb color created 
using the return value of the `selectRandColor` function*/

function printQuote() {
  document.body.style.backgroundColor = `rgb(${selectRandColor()})`;
  const randQuote = getRandomQuote();
  let html = `<p class="quote">${randQuote.quote}</p>
  <p class="source">${randQuote.source}`;
  if (randQuote.citation !== undefined) {
    html += `<span class="citation">${randQuote.citation}</span>`;
  }
  if (randQuote.year !== undefined) {
    html += `<span class="year">${randQuote.year}</span>`;
  }
  if (randQuote.category !== undefined) {
    html += `<span><small><i> ${randQuote.category}</i></small></span>`
  }
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html; 
}

/* `selectRandColor` randomly picks 3 values from 0 t0 255 adds them to an array
then returns them in an rgb format such as 0,255,255 */

function selectRandColor() {
  let color = [];
  for (let i = 0; i < 3; i += 1) {
    color.push(Math.floor(Math.random() * 256));
  }
  return color.join();
}

/* Use the setInterval method to automatically refresh quotes at 10 seconds intervals */

setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);