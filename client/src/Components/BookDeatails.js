const BookDeatails = ({ card }) => {
    return (
        <article>
            <h2> subtitle: {card.volumeInfo.subtitle}</h2>
            <h2> publisher: {card.volumeInfo.publisher}</h2>
            <h2> maturityRating: {card.volumeInfo.maturityRating}</h2>
        </article>
    )
}
export default BookDeatails