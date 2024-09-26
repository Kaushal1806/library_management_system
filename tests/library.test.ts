// tests/library.test.ts
import { Library } from '../src/library';
import { Book } from '../src/book';

describe('Library Management System', () => {
    let library: Library;

    beforeEach(() => {
        library = new Library();
    });

    test('should add a book to the library', () => {
        const book = new Book('1234567890', 'Test Book', 'Test Author', 2022);
        library.addBook(book);
        const books = library.getBooks();
        expect(books).toHaveLength(1);
        expect(books[0]).toEqual(book);
    });

    test('should borrow a book', () => {
        const book = new Book('1234567890', 'Test Book', 'Test Author', 2022);
        library.addBook(book);
        library.borrowBook(book.isbn);
        expect(() => library.borrowBook(book.isbn)).toThrow('Book is not available');
    });

    test('should return a borrowed book', () => {
        const book = new Book('1234567890', 'Test Book', 'Test Author', 2022);
        library.addBook(book);
        library.borrowBook(book.isbn);
        library.returnBook(book.isbn);
        expect(library.getBooks()).toHaveLength(1); // The book should be available again
    });
});
