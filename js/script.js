/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/

var quotes = [

  {quote: "Anyone who has never made a mistake has never tried anything new.",
  source:"Albert Einstein"
},

  {quote: "You miss one hundred percent of the shots you dont take",
   source:"Lee Harvey Oswald"
},

  {quote: "With Great Power comes great responsibility.",
  source:"Ben Parker"
},

  {quote: "Sometimes life is to uncertain to have regrets.",
  source:"Goku"
},

  {quote: "Its not over when you lose its over when you quit",
source:"Vegeta"
},


]

 




/**
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/

function getRandomQuote(array) {
  var randomNumber = 0;''
  randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber]; 
}



/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote() {
  var randomQuote = getRandomQuote(quotes);
  HTML = '';
  HTML += '<p class="quote">' + randomQuote.quote + '</p>';
  HTML += '<p class="author">' + randomQuote.author;



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// comments 
// Remember to delete the comments that came with this file, and replace them with your own code comments.