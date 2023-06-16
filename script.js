const API_URL = 'https://example.com/api/books';

const bookList = document.getElementById('book-list');
const suggestionList = document.getElementById('suggestion-list');
const filterSelect = document.getElementById('filter-select');
const sortButton = document.getElementById('sort-button');
const cartItems = document.getElementById('cart-items');
const checkoutButton = document.getElementById('checkout-button');
const searchBar = document.getElementById('search-bar');


async function fetchBooks() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching book data:', error);
    return [];
  }
}


function displayBooks(books) {
  bookList.innerHTML = '';

  books.forEach((book) => {
    
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');
    bookElement.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Genre: ${book.genre}</p>
      <p>Year of Publishing: ${book.year}</p>
      <p>Available: ${book.available}</p>
      <p>Copies: ${book.copies}</p>
      <button class="add-to-cart" data-id="${book.id}">Add to Cart</button>
    `;

    
    const addToCartButton = bookElement.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', () => {
      addToCart(book.id);
    });

    
    bookList.appendChild(bookElement);
  });
}


function addToCart(bookId) {
}


searchBar.addEventListener('input', (e) => {
  const searchTerm = e.target.value;
  
});


filterSelect.addEventListener('change', (e) => {
  const selectedFilter = e.target.value;
  
});


sortButton.addEventListener('click', () => {
  
});


checkoutButton.addEventListener('click', () => {
});


fetchBooks()
  .then((books) => {
    displayBooks(books);
  })
  .catch((error) => {
    console.log('Error:', error);
  });

