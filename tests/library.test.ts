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

    test('should get available books', () => {
        const book1 = new Book('1234567890', 'Test Book 1', 'Test Author', 2022);
        const book2 = new Book('0987654321', 'Test Book 2', 'Test Author', 2021);
        library.addBook(book1);
        library.addBook(book2);
        library.borrowBook(book1.isbn);
        
        const availableBooks = library.getBooks();
        expect(availableBooks).toHaveLength(1);
        expect(availableBooks[0]).toEqual(book2);
    });
});
