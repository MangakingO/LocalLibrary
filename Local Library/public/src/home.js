function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowedBooks = 0;
  for (let book of books) {
    if (!book.borrows[0].returned) {
      borrowedBooks++;
    }
  }
  return borrowedBooks;
}

function getMostCommonGenres(books) {
  // Create an object to keep track of genre counts
  const genreCount = {};

  // Iterate through the books array and count the occurrence of each genre
  books.forEach(book => {
    const genre = book.genre;
    if (genreCount[genre]) {
      genreCount[genre]++;
    } else {
      genreCount[genre] = 1;
    }
  });

  // Convert the object into an array of [key, value] pairs, then sort in descending order of count
  const sortedGenres = Object.entries(genreCount).sort((a, b) => b[1] - a[1]);

  // Take the top 5 genres (or fewer if there is a tie)
  return sortedGenres.slice(0, 5).map(([name, count]) => ({ name, count }));
}




function getMostPopularBooks(books) {
  // Create an array of book objects with their borrow counts
  const bookBorrows = books.map(book => ({
    name: book.title,
    count: book.borrows.length
  }));

  // Sort the array in descending order of borrow count
  bookBorrows.sort((a, b) => b.count - a.count);

  // Take the top 5 books (or fewer if there is a tie)
  return bookBorrows.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  // Step 1: find all books written by each author
  const authorBooks = authors.map(author => {
    const booksByAuthor = books.filter(book => book.authorId === author.id);
    return { author, books: booksByAuthor };
  });

  // Step 2: count the number of times each author's books have been borrowed
  const authorBorrowCounts = authorBooks.map(authorBook => {
    const { author, books } = authorBook;
    const borrowCount = books.reduce((acc, book) => {
      return acc + book.borrows.length;
    }, 0);
    return { name: `${author.name.first} ${author.name.last}`, count: borrowCount };
  });

  // Step 3: sort the objects by borrow count in descending order
  authorBorrowCounts.sort((a, b) => b.count - a.count);

  // Step 4: return the top five or fewer objects
  return authorBorrowCounts.slice(0, 5);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
