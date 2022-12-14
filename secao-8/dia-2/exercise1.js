const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
function authorBornIn1947(array) {
  return array.find((element) => element.author.birthYear === 1947).author.name;
}
console.log(authorBornIn1947(books));

function smallerName(array) {
  let nameBook = books[1].name;
  array.forEach((book) => {
    if (book.name.length <= nameBook.length) nameBook = book.name;
  });
  return nameBook;
}
console.log(smallerName(books));

function booksOrderedByReleaseYearDesc(array) {
  return array.sort( (a, b) => b.releaseYear - a.releaseYear)
}
console.log(booksOrderedByReleaseYearDesc(books));

function everyoneWasBornOnSecXX(array) {
  return array.every( (book) => book.author.birthYear > 1901 && book.author.birthYear < 2000)
}
console.log(everyoneWasBornOnSecXX(books));

function someBookWasReleaseOnThe80s(array) {
  return array.some( (book) => book.releaseYear > 1980 && book.releaseYear < 1990)
}
console.log(someBookWasReleaseOnThe80s(books));