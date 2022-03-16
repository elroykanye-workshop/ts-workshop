interface Book {
    author: string;
    title: string;
    pages?: number;
    isRead?: boolean;
}

function showBook(book: Book) : void {
    console.log(`Author: ${book.author} | Title: ${book.title}`);
    if(book.isRead !== undefined) {
        console.log(`I have ${book.isRead ? "read" : "not read"} this book.`)
    }
}

function setBookPages(book: Book, pages: number) {
    book.pages = pages;
}

function readBook(book: Book) {
    book.isRead = true;
}

const warAndPeace = {
    author: "Leo Tolstoy",
    title: "War and Peace",
    isRead: false,
}

const mobyDick: Book = {
    author: "Herman Melville",
    title: "Moby Dick",
}

setBookPages(warAndPeace, 1225);
showBook(warAndPeace);

showBook(mobyDick);
readBook(mobyDick);
showBook(mobyDick);
