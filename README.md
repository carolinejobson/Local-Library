# Thinkful Assessment: Local Library

Local-Library is a web page that uses Javascript algorithms to render various statistics on a dashboard.

# Project Description

Your neighborhood has decided to put together a local library where people can lend and borrow books. One of the most important features needed to organize this is a dashboard that will show which books are available, which are currently out, and other general statistics about the program.

Other people are taking care of the logistics and design, but they need you to build the algorithms.

![LocalLibrary](https://user-images.githubusercontent.com/123777132/224523564-1a0da4dd-7f9c-4155-8591-c69e504a7a08.png)

# Learning Objectives

This project is designed to test your ability to work with large datasets and build algorithms based on those datasets. Before taking on this project, you should be comfortable with the learning objectives listed below:

1. Using Visual Studio Code as a text editor
2. Differentiating between the three most common JavaScript error types
3. Solving bugs by using error messages
4. Differentiating between let, const, and var, and using each appropriately
5. Creating an array from a string based on particular criteria and joining arrays into strings
6. Writing strings that embed expressions using template literals
7. Accessing all the values and keys of an object
8. Using find(), filter(), map(), some(), and every() to solve different problems
9. Using reduce() to solve different problems
10. Using sort() to sort arrays in various ways

# Project Steps to Complete

To complete this project, you must do the following:

1. Write code that passes all the tests in the Qualified assessment in this lesson.
2. Write code that passes all of the requirements outlined below, and submit your GitHub repo link to the Thinkful team in the next lesson.

# Requirements to Pass

For your project to pass, all of the following statements must be true. These criteria are reflected in the rubric in the following lesson.

1. All tests are passing in Qualified.
2. The project doesn't include any single-letter variables.
3. The project makes at least one use of an arrow function.
4. The project makes at least one use of each of the following native array methods: find(), filter(), map(), and reduce().
5. The project employs at least one helper function, which helps support the tested functions.
6. The project uses at least two of the following JavaScript features: the ternary operator, the spread operator, object shorthand, array or object destructuring, and for/in loops.

# Account Functions

#### findAccountById()

The `findAccountById()` function in `public/src/accounts.js` has two parameters, in the following order:

- An array of accounts.
- An ID of a single account.

It returns the account object that has the matching ID.

**Example:**

```javascript
findAccountById(accounts, "5f446f2ecfaf0310387c9603");
/*
  {
    "id": "5f446f2ecfaf0310387c9603",
    "name": {
      "first": "Esther",
      "last": "Tucker"
    },
    ...
  }
*/
```

#### sortAccountsByLastName()

The `sortAccountsByLastName()` function in `public/src/accounts.js` has a single parameter:

- An array of accounts.

It returns a sorted array of objects. The objects are sorted alphabetically by last name.

**Example:**

```javascript
sortAccountsByLastName(accounts);
/*
  [
    {
      "name": {
        "first": "Kirby",
        "last": "Alston"
      },
      ...
    },
    {
      "name": {
        "first": "Toni",
        "last": "Ball"
      },
      ...
    },
  ]  
*/
```

#### getTotalNumberOfBorrows()

The `getTotalNumberOfBorrows()` function in `public/src/accounts.js` has two parameters, in the following order:

- An account object.
- An array of all books objects.

It returns a _number_ that represents the number of times the account's ID appears in any book's `borrow` array.

**Example:**

```javascript
getTotalNumberOfBorrows(account, books); // 22
```

#### getBooksPossessedByAccount()

The `getBooksPossessedByAccount` function in `public/src/accounts.js` has three parameters, in the following order:

- An account object.
- An array of all books objects.
- An array of all author objects.

It returns an array of books and authors that represents all books _currently checked out_ by the given account. _Look carefully at the object below,_ as it's not just the book object; the author object is embedded inside of it.

**Example:**

```javascript
getBooksPossessedByAccount(account, books, authors);
/*
  [
    {
      id: "5f447132320b4bc16f950076",
      title: "est voluptate nisi",
      genre: "Classics",
      authorId: 12,
      author: {
        id: 12,
        name: {
          first: "Chrystal",
          last: "Lester",
        },
      },
      borrows: [
        {
          id: "5f446f2e6059326d9feb9a68",
          returned: false,
        },
        ...
      ],
    },
  ]
*/
```

---

# Book Functions

#### findAuthorById()

The `findAuthorById()` function in `public/src/books.js` has two parameters, in the following order:

- An array of authors.
- An ID of a single author.

It returns the author object that has the matching ID.

**Example:**

```javascript
findAuthorById(authors, 11);
/*
  {
    id: 11,
    name: {
      first: "Luz",
      last: "Beach",
    },
  }
*/
```

#### findBookById()

The `findBookById()` function in `public/src/books.js` has two parameters, in the following order:

- An array of books.
- An ID of a single book.

It returns the book object that has the matching ID.

**Example:**

```javascript
findBookById(books, "5f447132320b4bc16f950076");
/*
  {
    id: "5f447132320b4bc16f950076",
    title: "est voluptate nisi",
    ...
  }
*/
```

#### partitionBooksByBorrowedStatus()

The `partitionBooksByBorrowedStatus()` function in `public/src/books.js` has a single parameter:

- An array of books.

It returns an array with two arrays inside of it. All of the inputted books are present in either the first or second array.

The first array contains books _that have been loaned out, and are not yet returned_ while the second array contains books _that have been returned._ You can check for the return status by looking at the first transaction in the `borrows` array.

**Example:**

```javascript
partitionBooksByBorrowedStatus(books);
/*
  [
    [
      {
        id: "5f447132d487bd81da01e25e",
        title: "sit eiusmod occaecat eu magna",
        genre: "Science",
        authorId: 8,
        borrows: [
          {
            id: "5f446f2e2cfa3e1d234679b9",
            returned: false,
          },
          ...
        ]
      },
      ...
    ],
    [
      {
        id: "5f44713265e5d8d17789beb0",
        title: "tempor occaecat fugiat",
        genre: "Travel",
        authorId: 16,
        borrows: [
          {
            id: "5f446f2e4eff1030e7316861",
            returned: true,
          },
          ...
        ]
      },
      ...
    ]
  ]
*/
```

#### getBorrowersForBook()

The `getBorrowersForBook()` function in `public/src/books.js` has two parameters, in the following order:

- A book object.
- An array of all accounts.

It should return an array of all the transactions from the book's `borrows` key. However, each transaction should include the related account information and the `returned` key.

**Example:**

```javascript
getBorrowersForBook(book, accounts);
/*
  [
    {
      id: "5f446f2e4eff1030e7316861",
      returned: true,
      picture: "https://api.adorable.io/avatars/75/barber.waters@kegular.biz",
      age: 37,
      name: {
        first: "Barber",
        last: "Waters",
      },
      company: "KEGULAR",
      email: "barber.waters@kegular.biz",
      registered: "Tuesday, April 14, 2020 9:15 PM",
    },
    {
      id: "5f446f2ecc5c4787c403f844",
      returned: true,
      picture: "https://api.adorable.io/avatars/75/dyer.trevino@slax.io",
      age: 34,
      name: {
        first: "Dyer",
        last: "Trevino",
      },
      company: "SLAX",
      email: "dyer.trevino@slax.io",
      registered: "Saturday, August 1, 2015 8:13 PM",
    },
  ]
*/
```

---

# Home Functions

### getTotalBooksCount()

The `getTotalBooksCount()` function in `public/src/home.js` has a single parameter:

- An array of books.

It returns a number that represents the number of book objects inside of the array.

**Example:**

```javascript
getTotalBooksCount(books); // 100
```

### getTotalAccountsCount()

The `getTotalAccountsCount()` function in `public/src/home.js` has a single parameter:

- An array of accounts.

It returns a number that represents the number of account objects inside of the array.

**Example:**

```javascript
getTotalAccountsCount(accounts); // 75
```

### getBooksBorrowedCount()

The `getBooksBorrowedCount()` function in `public/src/home.js` has a single parameter:

- An array of books.

It returns a number that represents the number of books _that are currently checked out of the library._ This number can be found by looking at the first transaction in the `borrows` key of each book. If the transaction says the book has not been returned (i.e. `returned: false`), the book has been borrowed.

**Example:**

```javascript
getBooksBorrowedCount(accounts); // 65
```

### getMostCommonGenres()

The `getMostCommonGenres()` function in `public/src/home.js` has a single parameter:

- An array of books.

It returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least.

Each object in the returned array has two keys:

- The `name` key which represents the name of the genre.
- The `count` key which represents the number of times the genre occurs.

If more than five genres are present, only the top five should be returned.

**Example:**

```javascript
getMostCommonGenres(books);
/*
  [
    { name: "Nonfiction", count: 9 },
    { name: "Historical Fiction", count: 7 },
    { name: "Thriller", count: 7 },
    ...
  ]
*/
```

### getMostPopularBooks()

The `getMostPopularBooks()` function in `public/src/home.js` has a single parameter:

- An array of books.

It returns an array containing five objects or fewer that represents the most popular books in the library. Popularity is represented by the number of times a book has been borrowed.

Each object in the returned array has two keys:

- The `name` key which represents the title of the book.
- The `count` key which represents the number of times the book has been borrowed.

If more than five books are present, only the top five should be returned.

**Example:**

```javascript
getMostPopularBooks(books);
/*
  [
    { name: "incididunt nostrud minim", count: 30 },
    { name: "culpa do sint", count: 30 },
    { name: "ullamco est minim", count: 29 },
    ...
  ]
*/
```

### getMostPopularAuthors()

The `getMostPopularAuthors()` function in `public/src/home.js` has two parameters, in the following order:

- An array of books.
- An array of authors.

It returns an array containing five objects or fewer that represents the most popular authors whose books have been checked out the most. Popularity is represented by finding all of the books written by the author and then adding up the number of times those books have been borrowed.

Each object in the returned array has two keys:

- The `name` key which represents the first and last name of the author.
- The `count` key which represents the number of times the author's books have been borrowed.

If more than five authors are present, only the top five should be returned.

**Example:**

```javascript
getMostPopularAuthors(books, authors);
/*
  [
    { name: "Cristina Buchanan", count: 112 },
    { name: "Tami Hurst", count: 83 },
    { name: "Chrystal Lester", count: 80 },
    ...
  ]
*/
```

## User Interface

### Overall Stats

![overall-stats](https://user-images.githubusercontent.com/68755319/131877820-d206c64d-0424-4aa6-92ab-d55a85cc985c.png)

### Stats by Book

![stats-by-book](https://user-images.githubusercontent.com/68755319/131877090-1e18ea3b-0ac1-4e47-8b68-2a3c31287096.png)

### Stats by Account

![stats-by-account](https://user-images.githubusercontent.com/68755319/131877112-d2527089-8225-4ef4-bb9c-f36612f0b8de.png)
