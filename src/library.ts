import { Book } from './book';

export class Library {
  private books: Map<string, Book> = new Map();
  private borrowedBooks: Set<string> = new Set();

  addBook(book: Book): void {
    if (this.books.has(book.isbn)) {
      throw new Error('Book with this ISBN already exists');
    }
    this.books.set(book.isbn, book);
  }

  borrowBook(isbn: string): void {
    if (!this.books.has(isbn) || this.borrowedBooks.has(isbn)) {
      throw new Error('Book is not available');
    }
    this.borrowedBooks.add(isbn);
  }

  returnBook(isbn: string): void {
    if (!this.borrowedBooks.has(isbn)) {
      throw new Error('This book does not belong to the library');
    }
    this.borrowedBooks.delete(isbn);
  }

  viewAvailableBooks(): Book[] {
    const availableBooks: Book[] = [];
    for (const [isbn, book] of this.books) {
      if (!this.borrowedBooks.has(isbn)) {
        availableBooks.push(book);
      }
    }
    return availableBooks;
  }
}
