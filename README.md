<h1>Library Management System</h1>

<p>This is a simple Library Management System project implemented in JavaScript. It provides various functions to manage books and library accounts.</p>

<h2>Function Descriptions</h2>

<h3>getTotalBooksCount(books)</h3>

<p><strong>Parameters:</strong></p>
<ul>
  <li><code>books</code> (Array): An array of book objects.</li>
</ul>

<p><strong>Returns:</strong></p>
<ul>
  <li>A number representing the total count of book objects in the array.</li>
</ul>

<h3>getTotalAccountsCount(accounts)</h3>

<p><strong>Parameters:</strong></p>
<ul>
  <li><code>accounts</code> (Array): An array of account objects.</li>
</ul>

<p><strong>Returns:</strong></p>
<ul>
  <li>A number representing the total count of account objects in the array.</li>
</ul>

<h3>getBooksBorrowedCount(books)</h3>

<p><strong>Parameters:</strong></p>
<ul>
  <li><code>books</code> (Array): An array of book objects.</li>
</ul>

<p><strong>Returns:</strong></p>
<ul>
  <li>A number representing the count of books that are currently checked out of the library.</li>
</ul>

<h3>getMostCommonGenres(books)</h3>

<p><strong>Parameters:</strong></p>
<ul>
  <li><code>books</code> (Array): An array of book objects.</li>
</ul>

<p><strong>Returns:</strong></p>
<ul>
  <li>An array containing the most common occurring genres, ordered from most common to least. Each object in the array has two keys: <code>name</code> (name of the genre) and <code>count</code> (number of occurrences).</li>
</ul>

<h3>getMostPopularBooks(books)</h3>

<p><strong>Parameters:</strong></p>
<ul>
  <li><code>books</code> (Array): An array of book objects.</li>
</ul>

<p><strong>Returns:</strong></p>
<ul>
  <li>An array containing the most popular books in the library, based on the number of times they have been borrowed. Each object in the array has two keys: <code>name</code> (title of the book) and <code>count</code> (number of times borrowed).</li>
</ul>

<h3>getMostPopularAuthors(books, authors)</h3>

<p><strong>Parameters:</strong></p>
<ul>
  <li><code>books</code> (Array): An array of book objects.</li>
  <li><code>authors</code> (Array): An array of author objects.</li>
</ul>

<p><strong>Returns:</strong></p>
<ul>
  <li>An array containing the most popular authors whose books have been borrowed the most. Each object in the array has two keys: <code>name</code> (first and last name of the author) and <code>count</code> (number of times their books have been borrowed).</li>
</ul>

<h2>Getting Started</h2>

<ol>
  <li>Clone the repository:</li>
</ol>

<pre><code>git clone &lt;repository-url&gt;</code></pre>

<ol start="2">
  <li>Install dependencies:</li>
</ol>

