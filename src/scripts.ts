const library: Book[] = [];
const container: Element | null = document.querySelector(".container");

class Book {
  id: string;
  title: string;
  author: string;
  pages: number;
  read: boolean;

  constructor(title: string, author: string, pages: number, read: boolean) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    return [this.title, this.author, this.pages, this.read].join(", ");
  }

}

function addBookToLibrary(book: Book): void {
  library.push(book);
}

function displayLibrary(library: Book[]): void {
  let list: string[] = library.map(book =>
  `
    <h2>
      <div>ID: ${book.id}</div>
      <div>Title: ${book.title}</div>
      <div>Author: ${book.author}</div>
      <div>Pages: ${book.pages}</div>
      <div>Read: ${book.read}</div>
    </h2>
  `);

  for (let i = 0; i < list.length; i++) {
    if (container != null)
      container.innerHTML += list[i];
    else
      return;
  }
}



const book1 = new Book('The Great Adventure', 'John Smith', 275, false);
const book2 = new Book('Horizons of Infinity', 'Jane Doe', 312, true);
const book3 = new Book('Mysteries of the Unknown', 'Bob Wilson', 456, false);
const book4 = new Book('Beyond the Visible', 'Alice Brown', 290, true);
const book5 = new Book('Journey Through Time', 'Charlie Davis', 384, false);
const book6 = new Book('Legends of the past', 'David Miller', 190, true);
const book7 = new Book('Frontiers of Knowledge', 'Emily White', 528, false);
const book8 = new Book('Secrets of the Universe', 'Michael Clark', 410, true);
const book9 = new Book('Chronicles of the Heart', 'Sophia Bennett', 256, false);
const book10 = new Book('Myths and Mysteries', 'Kevin Thompson', 342, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
addBookToLibrary(book6);
addBookToLibrary(book7);
addBookToLibrary(book8);
addBookToLibrary(book9);
addBookToLibrary(book10);

displayLibrary(library);