'use strict';

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

/*
// DESTRUCTURING ARRAYS
// 1.1
const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);
// 1.2
const [, , thirdBook] = books;
console.log(thirdBook);
// 1.3
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);
// 1.4
const ratingStars = [63405, 1808];
const [fiveStarRating = 0, oneStarRatings = 0, threeStarRatings = 0] =
  ratingStars;
console.log(fiveStarRating, oneStarRatings, threeStarRatings);
*/

/*
// DESTRUCTURING OBJECTS
// 2.1
const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);
// 2.2
const { keywords: tag } = books[0];
console.log(tag);
// 2.3
const { language, programmingLanguage = 'unknown' } = books[6];
console.log(language, programmingLanguage);
// 2.4
let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle, bookAuthor);
// 2.5
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
console.log(bookRating);
// 2.6
const printBookInfo = function ({
  title = 'title unknown',
  author = 'author unknown',
  year = 'year unknown',
}) {
  console.log(`${title} by ${author}, ${year}`);
};

printBookInfo({
  title: 'Algorithms',
  author: 'Robert Sedgewick',
  year: '2011',
});
*/

// THE SPREAD OPERATOR
// 3.1
const bookAuthors = [...books[0].author, ...books[1].author];
//console.log(bookAuthors);
// 3.2
const spellWord = function (word) {
  console.log(...word);
};
// spellWord('JavaScript');

// REST PATTERN AND PARAMETERS
//4.1
const [mainKeywords, ...rest] = books[0].keywords;
//console.log(mainKeywords, rest);
//4.2
const { publisher: bookPublisher, ...restOfTheBooks } = books[1];
// console.log(bookPublisher, restOfTheBooks);
// 4.3
const printBookAuthorsCount = function (title, ...authors) {
  console.log(`The book "£{title}" has ${authors.length} authors`);
};
// printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// SHORT CIRCUITING (&& AND ||)
// 5.1
const hasExamplesInJava = function (book) {
  console.log(book.programmingLanguage === 'Java' || 'no data available');
};
//hasExamplesInJava(books[0]);
//hasExamplesInJava(books[1]);
// 5.2
/*
for (let i = 0; i < books.length; i++) {
  console.log(
    books[i].onlineContent && `"${books[i].title}" provides online content`
  );
};
*/

// NULLISH COALESCING OPERATOR
// 6.1
/*
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ??
    console.log(
      `"${books[i].title}" provides no data about its online content.`
    );
}
*/

// LOGICAL ASSIGNMENTS OPERATORS
// 7.1
for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
}
// 7.2
for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
}

// LOOPING ARRAYS: THE FOR-OF LOOP
// 8.1
let pageSum = 0;
for (const book of books) {
  pageSum += book.pages;
}
// console.log(pageSum);
// 8.2
const allAuthors = [];
for (const book of books) {
  if (typeof book.author === 'string') {
    allAuthors.push(book.author);
  } else {
    allAuthors.push(...book.author);
  }
}
// could have also done, which is interesting, but I think mine was more simple :)
/*
for (const book of books) {
  if (typeof book.author === 'string') {
    allAuthors.push(book.author);
  } else {
    for (const author of book.author) {
      allAuthors.push(author);
    }
  }
}
  */
//console.log(allAuthors);

// ENHANCED OBJECT LITERALS
// 9.1
const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};
// console.log(newBook);
// 9.2
const pages = 880;
const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
};

// OPTIONAL CHAINING (?.)
function getFirstKeyword(item) {
  console.log(item.keywords?.[0]);
}
// getFirstKeyword(books[0]);
// getFirstKeyword(newBook2);

// LOOPING OBJECTS: OBJECT KEYS, VALUES, AND ENTRIES
// 11.1
const entries = [];
for (let key of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([key]);
}
// console.log(entries);
// 11.2
for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries[index].push(value);
}
// 11.3
const entries2 = Object.entries(books[0].thirdParty.goodreads);
// console.log(entries2);
// 11.4
// console.log(entries);
// console.log(entries2);

// SETS
// 12.1
const allKeywords = [];
for (const book of books) {
  allKeywords.push(...book.keywords);
}
//console.log(allKeywords);
//  12.2
const uniqueKeywords = new Set(allKeywords);
//console.log(uniqueKeywords);
// 12.3
uniqueKeywords.add('coding');
uniqueKeywords.add('science');
//console.log(uniqueKeywords);
// 12.4
uniqueKeywords.delete('business');
// 12.5
const uniqueKeywordsArr = [...uniqueKeywords];
//console.log(uniqueKeywordsArr);
// 12.6
uniqueKeywords.clear();

// MAPS: FUNDAMENTALS
// 13.1
const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);
// 13.2
bookMap.set('pages', 464);
// 13.3
// console.log(`"${bookMap.get('title')}" by ${bookMap.get('author')}`);
// 13.4
// console.log(bookMap.size);
// 13.5
// if (bookMap.has('author')) console.log('The author of the book is known');

// MAPS: ITERATION
// 14.1
const firstBookMap = new Map(Object.entries(books[0]));
//console.log(firstBookMap);
// 14.2
// for (const [key, value] of firstBookMap) {
//   if (typeof value === 'number') console.log(key);
// }

// WORKING WITH STRINGS - PART 1
// 15.1
// console.log(
//   books[0].ISBN[6],
//   books[0].ISBN[4],
//   books[0].ISBN[9],
//   books[0].ISBN[8]
// );
// 15.2
const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';
//console.log(quote.indexOf('chess'));
// 15.3
const chessWord = 'chess';
// console.log(
//   quote.slice(
//     [quote.indexOf(chessWord)],
//     [quote.indexOf(chessWord) + chessWord.length]
//   )
// );
function isContributor(author) {
  return author.lastIndexOf('(Contributor)') !== -1;
}
// isContributor('Julie Sussman (Contributor)');

// WORKING WITH STRINGS - PART 1
// 16.1
const normalizeAuthorName = function (author) {
  // making 'author' lowercase and removing '(Contributor)' if present.
  const lowerName = author.trim().toLowerCase();
  let justName;
  if (lowerName.lastIndexOf('(Contributor)') === -1) {
    justName = lowerName.slice(0, 13);
  } else {
    justName = lowerName;
  }
  // but this is only suitable for if it is the exact word, but to have it so it's any single word would be:
  /* // this compares that there is only one space in the sentence so that there is not three if there is a bracket.
  if (lowerName.IndexOf(' ') === author.lastIndexOf(' ')) {
    justName = lowerName.slice(0, 13);
  } else {
    justName = lowerName;
  }
  */
  // seperating the names
  const lastName = justName.slice([justName.indexOf(' ') + 1]);
  const firstName = justName.slice(0, justName.length - lastName.length);
  // could've done: justName.slice(0, justName.IndexOf(' '))
  // capitalizing each name's first letter
  const capitalLastName = lastName[0].toUpperCase() + lastName.slice(1);
  const capitalFirstName = firstName[0].toUpperCase() + lastName.slice(1);
  // adding back together into one string
  const fullName = capitalLastName + ' ' + capitalFirstName;
  console.log(fullName);
};
// normalizeAuthorName('  JuliE sussMan (Contributor)');
// ---
// 16.2
// console.log(books[1].title);
const newBookTitle = books[1].title.replace('Programs', 'Software');
// console.log(newBookTitle);
// 16.3
const logBookTheme = function (title) {
  title = title.toLowerCase();
  if (title.startsWith('computer')) {
    console.log('This book is about computers');
  } else if (title.includes('algorithms') && title.includes('structures')) {
    console.log('This book is about algorithms and data structures');
  } else if (
    (title.endsWith('system') || title.endsWith('systems')) &&
    !title.includes('operating')
  ) {
    console.log(
      'This book is about some systems, but definitely not about operating systems'
    );
  }
};
// for (const book of books) {
//   logBookTheme(book.title);
// }
