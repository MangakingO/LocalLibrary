function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const checkedOut = [];
  const returned = [];
  books.forEach((book) => {
    const [recent] = book.borrows;
    if (recent.returned === false) {
      checkedOut.push(book);
    } else {
      returned.push(book);
    }
  });
  return [checkedOut, returned];
}

function getBorrowersForBook(book, accounts) {
  const { borrows } = book;
  const result = borrows.map((borrow) => {
    const account = accounts.find((acc) => acc.id === borrow.id);
    return { ...borrow, ...account };
  });
  return result.slice(0, 10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
