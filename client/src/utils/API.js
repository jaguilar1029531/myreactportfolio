import axios from "axios";

export default {
  // Gets all bookings
  getBookings: function() {
    return axios.get("/api/bookings");
  },
  // Gets the booking with the given id
  getBooking: function(id) {
    return axios.get("/api/bookings/" + id);
  },
  // Deletes the booking with the given id
  deleteBooking: function(id) {
    return axios.delete("/api/bookings/" + id);
  },
  // Saves a booking to the database
  saveBooking: function(bookingData) {
    return axios.post("/api/bookings", bookingData);
  },
  getReviews: function() {
    return axios.get("/api/reviews");
  },
  // Gets the book with the given id
  getReview: function(id) {
    return axios.get("/api/reviews/" + id);
  },
  // Deletes the book with the given id
  deleteReview: function(id) {
    return axios.delete("/api/reviews/" + id);
  },
  // Saves a book to the database
  saveReview: function(reviewData) {
    return axios.post("/api/reviews", reviewData);
  },
  getClassbookings: function() {
    return axios.get("/api/classbookings");
  },
  // Gets the book with the given id
  getClassbooking: function(id) {
    return axios.get("/api/classbookings/" + id);
  },
  // Deletes the book with the given id
  deleteClassbooking: function(id) {
    return axios.delete("/api/classbookings/" + id);
  },
  // Saves a book to the database
  saveClassbooking: function(classbookingData) {
    return axios.post("/api/classbookings", classbookingData);
  },
  getIssuereports: function() {
    return axios.get("/api/issuereports");
  },
  // Gets the book with the given id
  getIssuereport: function(id) {
    return axios.get("/api/issuereports/" + id);
  },
  // Deletes the book with the given id
  deleteIssuereport: function(id) {
    return axios.delete("/api/issuereports/" + id);
  },
  // Saves a book to the database
  saveIssuereport: function(issuereportData) {
    return axios.post("/api/issuereports", issuereportData);
  }
};
