import axios from "axios";

export default {
    getGoogleSearchBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

    //get all books
    getBooks: function() {
        return axios.get("/api/books");
    },

    //get the book by its id
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },

    //save a book to the database
    saveBook: function (savedBooks) {
        return axios.post("/api/books/", savedBooks)
    },

    //delete the book by its id
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
}