import Card from "./Card"

const BooksList = ({ books, wishList, setWishList}) => {
    const results = books.slice(0, 10).map(card => <Card key={card.id} card={card} wishList={wishList} setWishList={setWishList}/>)

    const content = results?.length ? results : <article><p>No Matching Books</p></article>

    return (
        <main>{content}</main>
    )
}
export default BooksList