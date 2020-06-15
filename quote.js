let btn = document.querySelector('.button');
let showQuote = document.querySelector('.show-quote');
let quoteAuthor = document.querySelector('.author');
let display = document.querySelector('.display');

let quotesArray = [
  [
    "We think we are creating the system for our own purposes. We believe we are making it in our own image... But the computer is not really like us. It is a projection of a very slim part of ourselves: that portion devoted to logic, order, rule, and clarity.",
    "Ellen Ullman, Close to the Machine: Technophilia and its Discontents"
  ],
  [
    "Below the surface of the machine, the program moves. Without effort, it expands and contracts. In great harmony, electrons scatter and regroup. The forms on the monitor are but ripples on the water. The essence stays invisibly below.",
    "Master Yuan-Ma, The Book of Programming"
  ],
  [
    "And my heart glows bright red under my filmy, translucent skin and they have to administer 10cc of JavaScript to get me to come back. (I respond well to toxins in the blood.) Man, that stuff will kick the peaches right out your gills!",
    "_why, Why's (Poignant) Guide to Ruby"
  ],
  [
    "People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.",
    "Donald Knuth"
  ],
  [
    "On two occasions I have been asked, ‘Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?’ [...] I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question.",
    "Charles Babbage, Passages from the Life of a Philosopher (1864)"
  ]
];

const getRandomQuote = () => {
  let random = Math.floor(Math.random() * quotesArray.length)
  showQuote.textContent = quotesArray[random][0];
  quoteAuthor.textContent = quotesArray[random][1];
  display.style.border = '2px solid #0339A6';
};

btn.addEventListener('click', getRandomQuote);