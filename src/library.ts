// src/library.ts
import { Book } from './book';

export class Library {
    private books: { book: Book; available: boolean }[] = [];

    addBook(book: Book): void {
        this.books.push({ book, available: true });
    }

    borrowBook(isbn: string): void {
        const bookEntry = this.books.find(b => b.book.isbn === isbn && b.available);
        if (bookEntry) {
            bookEntry.available = false; // Mark the book as borrowed
        } else {
            throw new Error('Book is not available');
        }
    }

    returnBook(isbn: string): void {
        const bookEntry = this.books.find(b => b.book.isbn === isbn);
        if (bookEntry) {
            bookEntry.available = true; // Mark the book as available
        } else {
            throw new Error('This book does not belong to the library');
        }
    }

    getBooks(): Book[] {
        return this.books.filter(b => b.available).map(b => b.book);
    }
}
