import { useEffect, useState } from "react"
import SignUpForm from "./components/SignUpForm"
import Authenticate from "./components/Authentication";

function App() {
    const [books, setBooks] = useState([]);
    const [token, setToken] = useState(null);
    useEffect(() => {
      const getBooks = async () => {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');
      const json = await response.json();
      const allBooks = json.results;
      setBooks(allBooks);
      }

    getBooks()  
    }, []);

  return (
    <>
      <h1>Book buddy App</h1>
      <SignUpForm/>
      {books && books.map(book => {
        return <li key={book.title} >{ book.title }</li>
      })
    } 

    </>
  )
}

export default App
