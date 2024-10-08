# KATA Library Management System:

This project is a basic Library Management System made for Incubyte Company built in TypeScript. It allows users to perform simple operations such as adding books to the library, borrowing books, returning books, and viewing available books. This was built following Test-Driven Development (TDD) principles to ensure code quality and reliability.

-------------------------------------------------------------------------------------------------------------------------------

## FEATURES:

1.Add Books: Users can add new books, and each book is uniquely identified by an ISBN, with additional details like title,     author, and publication year.
2.Borrow Books: A user can borrow a book if it's available. If the book is already borrowed, the system raises an error.
3.Return Books: Users can return a borrowed book, which updates the book's availability.
4.View Available Books: Users can view a list of all currently available books in the library.

-------------------------------------------------------------------------------------------------------------------------------
## TECHNOLOGY USED

1.TypeScript: Ensures type safety and cleaner code.
2.Jest: Used for writing and running unit tests.
3.Node.js: The runtime environment for TypeScript and Jest.

-------------------------------------------------------------------------------------------------------------------------------
## PREREQUISITES
1.Node.js (version 14 or above)
2.npm (comes with Node.js)
3.Getting Started

-------------------------------------------------------------------------------------------------------------------------------

## Run the tests to ensure everything is working:

  >npx jest
-------------------------------------------------------------------------------------------------------------------------------
## This is directory structure of my file

library_management_system/
│
├── node_modules/       # Dependencies
├── src/
│   ├── book.ts         # Defines the Book class
│   ├── library.ts      # Defines the Library class
├── tests/
│   └── library.test.ts # Contains all the test cases for the Library
├── jest.config.js      # Jest configuration file
├── package.json        # Project metadata and npm scripts
├── tsconfig.json       # TypeScript configuration
└── README.md           # You’re reading this file!

-------------------------------------------------------------------------------------------------------------------------------

## he core functionality is implemented through two main classes: Book and Library.

#### 1.Adding a Book
  To add a book to the library:

const book = new Book('9781234567890', 'The Pragmatic Programmer', 'Andrew Hunt', 1999);
library.addBook(book);

#### 2.Borrowing a Book
  Borrowing a book is done via the ISBN:

library.borrowBook('9781234567890');

#### 3.Returning a Book
  Returning a borrowed book is also done by ISBN:

library.returnBook('9781234567890');

#### 4.Viewing Available Books
To see all the books currently available in the library:

library.viewAvailableBooks();

-------------------------------------------------------------------------------------------------------------------------------

## Running Tests

This project was built using Test-Driven Development (TDD). The test cases can be found in the tests/library.test.ts file.
To run the tests, use the following command:

>npx jest
This will execute all the tests and confirm whether the system behaves as expected.

-------------------------------------------------------------------------------------------------------------------------------

## Development Workflow:
The development process was broken down into frequent steps with tests written first (TDD). Each feature was added incrementally:

a.Write a failing test.
b.Implement the functionality.
c.Refactor the code if necessary.
d.Ensure all tests pass.
e.The Git commits reflect this approach, with each commit representing a small, manageable change. Commit messages are   structured clearly to track the TDD process.

-------------------------------------------------------------------------------------------------------------------------------

## Here’s how the Git workflow was followed(Sequence of Commits):

Test for adding a book:
git add .
git commit -m "Add test for adding a book to the library"

Implement the add book functionality:
git add .
git commit -m "Implement add book functionality"

Test for borrowing a book:
git add .
git commit -m "Add test for borrowing a book"

Implement borrow book functionality:
git add .
git commit -m "Implement borrow book functionality"

-------------------------------------------------------------------------------------------------------------------------------

## Conclusion:
This "Incubyte" developement task was a great exercise in practicing TDD and implementing its core principles 