import { Elysia } from 'elysia';

type Book = {
  id: number;
  title: string;
  price: number;
};

let bookList: Book[] = [
  { id: 1, title: 'Harry Potter', price: 100 },
  { id: 2, title: 'Lord of the Rings', price: 150 },
  { id: 3, title: 'Game of Thrones', price: 200 },
  { id: 4, title: 'The Witcher', price: 250 },
  { id: 5, title: 'Clean Code', price: 300 },
  { id: 6, title: 'Refactoring', price: 350 },
  { id: 7, title: 'Design Patterns', price: 400 },
  { id: 8, title: 'Code Complete', price: 450 },
  { id: 9, title: 'The Pragmatic Programmer', price: 500 },
];

const app = new Elysia()
  .get('/', () => 'Hello Elysia')
  .get('/books', () => bookList)
  .post('/books', ({ body }) => {
    const newBook = body as Book;
    newBook.id = bookList.length + 1;
    bookList.push(newBook);
    return newBook;
  })
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
