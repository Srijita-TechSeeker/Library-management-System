import axios from 'axios';

const API_URL = 'http://localhost:5009/api/auth';

// For signup
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    alert('You are successfully registered');
    return response;
  } catch (error) {
    console.error(error);
    alert('Error registering user');
    throw error;
  }
};

// For login
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    alert('Login successful');
    return response;
  } catch (error) {
    console.error(error);
    alert('Error logging in');
    throw error;
  }
};

// Add a book
export const addBook = async (bookData) => {
  try {
    const response = await axios.post(`http://localhost:5009/api/books`, bookData);
    return response.data;
  } catch (error) {
    console.error('Error adding book:', error);
    throw error; // Re-throw the error for handling in the component
  }
};

// Fetch all books
export const fetchBooks = async () => {
  try {
    const response = await axios.get(`http://localhost:5009/api/books`);
    return response;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

// Get a specific book by ID
export const getBookById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5009/api/books/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching book:', error);
    throw error;
  }
};

// Update book details
export const updateBook = async (id, bookData) => {
  try {
    const response = await axios.put(`http://localhost:5009/api/books/${id}`, bookData);
    return response.data;
  } catch (error) {
    console.error('Error updating book:', error);
    throw error;
  }
};

// Delete a book
export const deleteBook = async (bookId) => {
  try {
    await axios.delete(`http://localhost:5009/api/books/${bookId}`);
  } catch (error) {
    console.error('Error deleting book:', error);
    throw error; // Rethrow error for further handling if needed
  }
};

// Borrow a book (new function to decrement the quantity)
export const borrowBook = async (bookId) => {
  try {
    const response = await axios.put(`http://localhost:5009/api/books/borrow/${bookId}`);
    console.log('Book borrowed successfully:',response.data);
    return response.data; // This will return the updated book object after borrowing
  } catch (error) {
    console.error('Error borrowing book:', error);
    throw error; // Re-throw error for handling in the component
  }
};
