//Managing a Collection of Books

const book1 = {
 title: "Pride and Prejudice",
 author: "Jane Austen",
 genre: "Classic",
 yearPublished: 1813,
 ISBN: "9780486284736",
};

const book2 = {
 title: "The Catcher in the Rye",
 author: "J.D. Salinger",
 genre: "Fiction",
 yearPublished: 1951,
 ISBN: "9780316769488",
};

const book3 = {
 title: "Harry Potter and the Sorcerer's Stone",
 author: "J.K. Rowling",
 genre: "Fantasy",
 yearPublished: 1997,
 ISBN: "9780590353427",
};

console.log("Book 1:", book1);
console.log("Book 2:", book2);
console.log("Book 3:", book3);

// Dot Notation
console.log(
 "Book 1:",
 book1.title,
 book1.author,
 book1.genre,
 book1.yearPublished
);
// Bracket Notation
console.log(
 "Book 2:",
 book2["title"],
 book2["author"],
 book2["genre"],
 book2["yearPublished"]
);

// construct a string that introduces one of the books by combining its objects.
const bookSummary = `${book1.title} by ${book1.author} is a ${book1.genre}book published in ${book1.yearPublished}.`;
console.log("Booksummary:", bookSummary);

// Modifying.
book2.genre = "Historical Fiction";
book3.Language = "English";

console.log("Updated Book 2:", book2.genre);
console.log("Updated Book 3:", book3.Language);
