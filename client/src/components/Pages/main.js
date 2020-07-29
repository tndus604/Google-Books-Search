import React, {Component} from 'react';
import Navbar from '../Navbar/navbar';
import Jumbotron from '../Jumbotron/jumbotron';
import Card from '../Card/card';
import SearchForm from '../SearchForm/searchform';
import API from '../../utils/api';

class Main extends Component {
    state = {
        books: [],
        results: [],
        title: ""
    }

    componentDidMount() {
        API.getBooks()
            .then (res => {
                this.setState({ books: res.data });
                console.log('books:', this.state.books)
            })
            .catch(err => {
                throw err
            })
    }

    handleInputChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.getGoogleSearchBooks(this.state.title)
            .then (res => {
                this.setState({
                    results: res.data.items
                })
            })
            .catch(err => {
                throw err;
            })
    }

    handleSaveBook = event => {
        event.preventDefault();

        const bookID = event.target.getAttribute('data-id');
        console.log("Book ID: ", bookID)

        const newState = {...this.state}
        console.log(this.state.results);

        let targetBook = this.state.results.filter(book => book.id === bookID);

        const newBook = {
            title: targetBook[0].volumeInfo.title,
            authors: targetBook[0].volumeInfo.authors,
            description: targetBook[0].volumeInfo.description,
            image: targetBook[0].volumeInfo.imageLinks.thumbnail,
            link: targetBook[0].volumeInfo.infoLink
        }

        if (this.state.books[bookID]) {
            console.log(`You've already saved that book.`);
            return
        } else {
            newState.books[bookID] = newBook

            this.setState(newState)
            console.log('updated this.state: ', this.state.books);

            API.saveBook({
                title: targetBook[0].volumeInfo.title,
                authors: targetBook[0].volumeInfo.authors,
                description: targetBook[0].volumeInfo.description,
                image: targetBook[0].volumeInfo.imageLinks.thumbnail,
                link: targetBook[0].volumeInfo.infoLink
            })
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron />
                <div className="container">
                    <SearchForm
                    handleFormSubmit = {this.handleFormSubmit}
                    handleInputChange = {this.handleInputChange} />
                    <div className="container" id="main-content">
                        {this.state.results.map((book) => {
                            return (
                                <Card
                                key={book.id}
                                title={book.volumeInfo.title}
                                id={book.id}
                                link={book.volumeInfo.infoLink}
                                author={book.volumeInfo.authors}
                                image={book.volumeInfo.imageLinks.thumbnail}
                                description={book.volumeInfo.description}
                                saveBook={this.handleSaveBook} />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;