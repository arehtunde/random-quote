//import {quotesArray} from './quoteArray';

let start = document.querySelector('.start-button');
let next =  document.querySelector('.next-button');
let home = document.querySelector('.home-button');
let showQuote = document.querySelector('.show-quote');
let quoteAuthor = document.querySelector('.author');
let display = document.querySelector('.display');
let container = document.querySelector('.container');

let quotesArray = [
  {
    quote: `We think we are creating the system for our own purposes. We believe we are making it in our own image... But the computer is not really like us. It is a projection of a very slim part of ourselves: that portion devoted to logic, order, rule, and clarity.`,
    author: `Ellen Ullman, Close to the Machine: Technophilia and its Discontents`
  },
  {
    quote: `Below the surface of the machine, the program moves. Without effort, it expands and contracts. In great harmony, electrons scatter and regroup. The forms on the monitor are but ripples on the water. The essence stays invisibly below.`,
    author: `Master Yuan-Ma, The Book of Programming`
  },
  {
    quote: `And my heart glows bright red under my filmy, translucent skin and they have to administer 10cc of JavaScript to get me to come back. (I respond well to toxins in the blood.) Man, that stuff will kick the peaches right out your gills!`,
    author: `_why, Why's (Poignant) Guide to Ruby`
  },
  {
    quote: `People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.`,
    author: `Donald Knuth`
  },
  {
    quote: `On two occasions I have been asked, ‘Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?’ [...] I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question.`,
    author: `Charles Babbage, Passages from the Life of a Philosopher (1864)`
  },
  {
    quote: `Tzu-li and Tzu-ssu were boasting about the size of their latest programs. ‘Two-hundred thousand lines,’ said Tzu-li, ‘not counting comments!’ Tzu-ssu responded, ‘Pssh, mine is almost a million lines already.’ Master Yuan-Ma said, ‘My best program has five hundred lines.’ Hearing this, Tzu-li and Tzu-ssu were enlightened.`,
    author: `Master Yuan-Ma, The Book of Programming`
  },
  {
    quote: `There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies.`,
    author: `C.A.R. Hoare, 1980 ACM Turing Award Lecture`
  },
  {
    quote: `An abstract data type is realized by writing a special kind of program […] which defines the type in terms of the operations which can be performed on it.`,
    author: `Barbara Liskov, Programming with Abstract Data Types`
  },
  {
    quote: `[...] the question of whether Machines Can Think [...] is about as relevant as the question of whether Submarines Can Swim.`,
    author: `Edsger Dijkstra, The Threats to Computing Science`
  },
  {
    quote: `Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.`,
    author: `Brian Kernighan and P.J. Plauger, The Elements of Programming Style`
  },
  {
    quote: `Some people, when confronted with a problem, think ‘I know, I’ll use regular expressions.’ Now they have two problems.`,
    author: `Jamie Zawinski`
  },
  {
    quote: `Yuan-Ma said, ‘When you cut against the grain of the wood, much strength is needed. When you program against the grain of the problem, much code is needed.`,
    author: `Master Yuan-Ma, The Book of Programming`
  },
  {
    quote: `Write code that is easy to delete, not easy to extend.`,
    author: `Tef, Programming is Terrible`
  },
  {
    quote: `Who can wait quietly while the mud settles?
    Who can remain still until the moment of action?`,
    author: `Laozi, Tao Te Ching`
  },
  {
    quote: `The evaluator, which determines the meaning of expressions in a programming language, is just another program.`,
    author: `Hal Abelson and Gerald Sussman, Structure and Interpretation of Computer Programs`
  },
  {
    quote: `The dream behind the Web is of a common information space in which we communicate by sharing information. Its universality is essential: the fact that a hypertext link can point to anything, be it personal, local or global, be it draft or highly polished.`,
    author: `Tim Berners-Lee, The World Wide Web: A very short personal history`
  },
  {
    quote: `Too bad! Same old story! Once you’ve finished building your house you notice you’ve accidentally learned something that you really should have known—before you started.`,
    author: `Friedrich Nietzsche, Beyond Good and Evil`
  },
  {
    quote: `You have power over your mind—not outside events. Realize this, and you will find strength.`,
    author: `Marcus Aurelius, Meditations`
  },
  {
    quote: `All reality is a game.`,
    author: `Iain Banks, The Player of Games`
  },
  {
    quote: `Drawing is deception.`,
    author: `M.C. Escher, cited by Bruno Ernst in The Magic Mirror of M.C. Escher`
  },
  {
    quote: `Communication must be stateless in nature [...] such that each request from client to server must contain all of the information necessary to understand the request, and cannot take advantage of any stored context on the server.`,
    author: `Roy Fielding, Architectural Styles and the Design of Network-based Software Architectures`
  },
  {
    quote: `I look at the many colors before me. I look at my blank canvas. Then, I try to apply colors like words that shape poems, like notes that shape music.`,
    author: `Joan Miro`
  },
  {
    quote: `A student asked, ‘The programmers of old used only simple machines and no programming languages, yet they made beautiful programs. Why do we use complicated machines and programming languages?’. Fu-Tzu replied, ‘The builders of old used only sticks and clay, yet they made beautiful huts.`,
    author: `Master Yuan-Ma, The Book of Programming`
  },
  {
    quote: `If you have knowledge, let others light their candles at it.`,
    author: `Margaret Fuller`
  }
];

const getRandomQuote = () => {
  let random = Math.floor(Math.random() * quotesArray.length);
  return quotesArray[random];
};

const displayQuote = () => {
  let newQuote = getRandomQuote();
  showQuote.textContent = newQuote.quote;
  quoteAuthor.textContent = newQuote.author;
}
displayQuote();

next.addEventListener('click', displayQuote);

home.addEventListener('click', () => {
  container.hidden = false;
  display.hidden = true;
});

start.addEventListener('click', () => {
  container.hidden = true;
  display.hidden = false;
});