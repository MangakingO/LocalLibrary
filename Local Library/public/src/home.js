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

// Helper function to get the count of occurrences of an item in an array
function getCountOfItem(array, item) {
  return array.reduce((count, currentItem) => {
    if (currentItem === item) {
      return count + 1;
    }
    return count;
  }, 0);
}

// Function to get the most common genres
function getMostCommonGenres(books) {
  const genres = books.map((book) => book.genre);

  // Get unique genres
  const uniqueGenres = [...new Set(genres)];

  // Count occurrences of each genre
  const genreCounts = uniqueGenres.map((genre) => {
    return {
      name: genre,
      count: getCountOfItem(genres, genre),
    };
  });

  // Sort genres by count in descending order
  genreCounts.sort((a, b) => b.count - a.count);

  // Return the top five genres or less
  return genreCounts.slice(0, 5);
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
