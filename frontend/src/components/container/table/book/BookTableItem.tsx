import { AuthContext } from "../../../../context/auth"
import { Book } from "../../../../types/Book"
import { BookStatus } from "./BookStatus"
import { useContext, useState, useEffect } from "react"

type Props = {
	item: Book
}

export function BookTableItem(props: Props) {
	const [book, setBook] = useState(props.item)
	const authState = useContext(AuthContext)

	async function returnBook() {
        if(!authState.isLibrarian) return
		const backend_url = "http://127.0.0.1:5000/return_book"

		try {
			await fetch(backend_url, {
				method: "POST",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					return_isbn: book.ISBN,
				}),
			})
			setBook({
				...book,
				isAvailable: true,
				availableAmount: book.availableAmount + 1,
			})
		} catch (e) {
			console.error(e)
			alert("Server error")
		}
	}
	async function checkOutBook() {
        if(!authState.isLibrarian) return

		const backend_url = "http://127.0.0.1:5000/checkout_book"
		try {
			await fetch(backend_url, {
				method: "POST",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					checkout_isbn: book.ISBN,
				}),
			})
			setBook({
				...book,
				isAvailable: false,
				availableAmount: 0,
			})
		} catch (e) {
			console.error(e)
			alert("Server error")
		}
	}
	return (
		<>
			<td>
				<img className="book-img table-img" src={book.imageUrl || "book.png"}></img>
			</td>
			<td>{book.name}</td>
			<td>{book.author}</td>
			<td>{book.category}</td>
			<td>{book.availableAmount}</td>
			<td>
				<BookStatus isAvaliable={book.isAvailable} />
			</td>
			{authState.isLibrarian && (
				<td>
					{book.isAvailable ? (
						<button className="book-btn" onClick={checkOutBook}>
							Checkout
						</button>
					) : (
						<button onClick={returnBook} className="book-btn">
							Return
						</button>
					)}
				</td>
			)}
		</>
	)
}
