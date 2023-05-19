function findAccountById(accounts, id) {
  const matchingAccount = accounts.find((account) => account.id === id); // using find to look inside the array of object, then looking through the ID's, if an object ID matches the given ID, that will store it //
  return matchingAccount; // this will return the matchingAccoun function, which had the account that has a matching ID
}




function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > //compares two paramenters, A and B, which are accounts, by using .toLowerCase, we make the case-insensitive.
                       
accountB.name.last.toLowerCase() ? 1 : -1) /*if last property of A comes after the last property of B then a true value evaluate, which gives a 1, whichwill give A a greater value and sort A after B */
}

function getTotalNumberOfBorrows(account, books) {
  const accountId = account.id;
  let total = 0;
  for (let book of books) {
    const borrows = book.borrows;
    for (let borrow of borrows) {
      if (borrow.id === accountId) {
        total++;
      }
    }
  }
  return total;
} 




function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;
  const checkedOutBooks = books.filter(book => {
    const latestTransaction = book.borrows[0];
    return !latestTransaction.returned && latestTransaction.id === accountId;
  });
  return checkedOutBooks.map(book => {
    const author = authors.find(author => author.id === book.authorId);
    return {...book, author};
  });
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
