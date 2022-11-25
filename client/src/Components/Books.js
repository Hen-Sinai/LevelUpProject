import { getBooks } from '../api/axios'
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import BooksList from './BooksList'

const Books=()=>{
    const [books, setBooks] = useState([])
    const [searchResults, setSearchResults] = useState()
    const [wishList, setWishList] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(() => {
      getBooks(searchResults).then(json => {
        setBooks(json)
      })
    }, [searchResults])

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
      document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <SearchBar books={books} setSearchResults={setSearchResults} />
            <button onClick={toggleModal}>{modal ? 'Close wish list' : 'open wish list'}</button>
            {modal ? <BooksList books={wishList} wishList={wishList} setWishList={setWishList}/> : null}
            <BooksList books={books} wishList={wishList} setWishList={setWishList}/>
        </>
    )
}
export default Books;