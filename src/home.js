function getTotalBooksCount(books) {
  let accumulator = 0;
  return books.reduce((acc) => acc + 1, accumulator);
}

function getTotalAccountsCount(accounts) {
  let accumulator = 0;
  return accounts.reduce((acc) => acc + 1, accumulator);
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => book.borrows.some((booksBorrowed) => booksBorrowed.returned === false)).length;
}

function getMostCommonGenres(books) {
    const genres = [];
    books.forEach((book) => {
      const match = genres.find((genre) => genre.name === book.genre);
      if (match)
      {
        match.count++;
      } else
      {
        const name = book.genre;
        genres.push({ name, count: 1 });
      }
    });
    let result = genres.sort((genreA, genreB) => genreA.count < genreB.count ? 1 : -1);
    result = result.slice(0, 5);
    return result
  }

function getMostPopularBooks(books) {
  const titleAndCount = [];
  books.forEach((book) => {
    const popularBooksArray = { name: book.title, count: book.borrows.length }
    titleAndCount.push(popularBooksArray)
  })
  titleAndCount.sort((titleAndCountA, titleAndCountB) => titleAndCountB.count - titleAndCountA.count);
  return titleAndCount.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  return books.map((book) => {
    const author = authors.find((author) => author.id === book.authorId)
    return {
      name: `${author.name.first} ${author.name.last}`,
      count: book.borrows.length
    }
  }).sort((a, b) => b.count - a.count).slice(0,5)
 }

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
