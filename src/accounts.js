function findAccountById(accounts, id) {
    return accounts.filter((account) => account.id === id)
  .find((account) => account);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  const accountId = account.id;
  let total = 0;
  books.forEach((book) => (book.borrows.forEach((borrow) => {
    if (accountId === borrow.id)
    {
      total++;
    }
  })));
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksPossessed=[];
  books.forEach(book => {
    let borrowArray = book.borrows;
    if (borrowArray.find((borrow) => borrow.id === account.id && borrow.returned === false)) {
      booksPossessed.push(book);
    }
  })
  
  booksPossessed.forEach((book) => {
    let author = authors.find((author) => author.id === book.authorId);
    book.author = author;
  })
  console.log(booksPossessed);
  return booksPossessed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};