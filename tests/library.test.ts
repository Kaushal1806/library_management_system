import { Library } from '../src/library';
import { Book } from '../src/book';

describe('Library Management System', () => {
  let library: Library;

  beforeEach(() => {
    library = new Library();
  });

  it('should add a book to the library', () => {
    const book = new Book('1234567890', 'Test Book', 'Test Author', 2022);
    library.addBook(book);
    expect(library.viewAvailableBooks()).toContain(book);
  });

  it('should borrow a book', () => {
    const book = new Book('1234567890', 'Test Book', 'Test Author', 2022);
    library.addBook(book);
    library.borrowBook('1234567890');
    expect(library.viewAvailableBooks()).not.toContain(book);
  });

  it('should return a borrowed book', () => {
    const book = new Book('1234567890', 'Test Book', 'Test Author', 2022);
    library.addBook(book);
    library.borrowBook('1234567890');
    library.returnBook('1234567890');
    expect(library.viewAvailableBooks()).toContain(book);
  });

  // New tests for additional scenarios

  it('should throw error when borrowing a non-existent book', () => {
    const book = new Book('1234567890', 'Test Book', 'Test Author', 2022);
    library.addBook(book);
    expect(() => library.borrowBook('9999999999')).toThrow('Book is not available');
  });

  it('should throw error when returning a book not in the library', () => {
    const book = new Book('1234567890', 'Test Book', 'Test Author', 2022);
    expect(() => library.returnBook('9999999999')).toThrow('This book does not belong to the library');
  });

  it('should not allow adding a book with a duplicate ISBN', () => {
    const book1 = new Book('1234567890', 'Test Book 1', 'Test Author', 2022);
    const book2 = new Book('1234567890', 'Test Book 2', 'Test Author', 2021);
    library.addBook(book1);
    expect(() => library.addBook(book2)).toThrow('Book with this ISBN already exists');
  });
});
