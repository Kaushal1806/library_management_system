// src/book.ts
export class Book {
    constructor(
        public isbn: string,
        public title: string,
        public author: string,
        public year: number
    ) {}
}
