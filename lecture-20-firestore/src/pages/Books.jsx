import { useEffect, useState, useRef } from "react"
import { app } from "../config/firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const db = getFirestore(app)

const Books = () => {

    const [books, setBooks] = useState({
        bookName: '', authorName: '', isBn: ''
    });
    const [bookArr, setBookArr] = useState([]);
    const [isEdit, setIsEdit] = useState(null);
    const formRef = useRef(null);

    useEffect(() => {
        fetchBook();
    }, [])

    const fetchBook = async () => {
        try {
            const bookSnapshot = await getDocs(collection(db, "books"));
            const books = bookSnapshot.docs.map((book) => ({
                id: book.id,
                ...book.data()
            }))
            setBookArr(books);
        } catch (error) {
            toast.error(error.code);
        }
    }

    const handleSave = async () => {
        try {
            if (isEdit) {
                await updateDoc(doc(db, "books", isEdit), books);
                toast.success("Book updated successfully");
                setIsEdit(null);
            } else {
                await addDoc(collection(db, "books"), books);
                toast.success("Book added successfully");
            }
            fetchBook();
            setBooks({ bookName: '', authorName: '', isBn: '' });
        } catch (error) {
            toast.error(error.code);
        }
    }

    const deleteBook = async (id) => {
        try {
            await deleteDoc(doc(db, "books", id));
            fetchBook();
        } catch (error) {
            toast.error(error.code)
        }
    }

    const handleEditClick = (book) => {
        setBooks({
            bookName: book.bookName,
            authorName: book.authorName,
            isBn: book.isBn
        });
        setIsEdit(book.id);
    }

    const handleSumbit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container mx-auto">
            <form ref={formRef} onSubmit={handleSumbit}>
                <h1 className="text-center my-10 font-semibold text-2xl">
                    {isEdit ? "Edit Book" : "Add Books"}
                </h1>
                <div className="flex items-center justify-center">
                    <div className="flex flex-col gap-5 w-96">
                        <div>
                            <label htmlFor="bookName" className="block mb-2 text-sm font-medium text-gray-900">Book Name</label>
                            <input type="text" value={books.bookName} id="bookName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Bhagvat Gita" required onChange={(e) => {
                                setBooks({ ...books, [e.target.id]: e.target.value })
                            }} />
                        </div>
                        <div>
                            <label htmlFor="authorName" className="block mb-2 text-sm font-medium text-gray-900">Author Name</label>
                            <input type="text" value={books.authorName} id="authorName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Srila Prabhupada" required onChange={(e) => {
                                setBooks({ ...books, [e.target.id]: e.target.value })
                            }} />
                        </div>
                        <div>
                            <label htmlFor="isBn" className="block mb-2 text-sm font-medium text-gray-900">IsBn Number</label>
                            <input type="number" value={books.isBn} id="isBn" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="13123" required onChange={(e) => {
                                setBooks({ ...books, [e.target.id]: e.target.value })
                            }} />
                        </div>
                        <button
                            type="button"
                            className="px-3 py-2 border bg-blue-600 text-white rounded-xl"
                            onClick={handleSave}
                        >
                            {isEdit ? "Update Book" : "Add Book"}
                        </button>
                    </div>
                </div>
            </form>

            <div className="my-10">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase">
                            <tr>
                                <th scope="col" className="px-6 py-3">Book Name</th>
                                <th scope="col" className="px-6 py-3">Author Name</th>
                                <th scope="col" className="px-6 py-3">IsBn Number</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookArr.map((book) => {
                                    return <tr key={book.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 border-gray-200">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {book.bookName}
                                        </th>
                                        <td className="px-6 py-4">{book.authorName}</td>
                                        <td className="px-6 py-4">{book.isBn}</td>
                                        <td className="px-6 py-4 flex gap-5">
                                            <button
                                                className="font-medium border py-2 px-4 text-white rounded-xl bg-blue-600 hover:bg-blue-700"
                                                onClick={() => handleEditClick(book)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="font-medium border py-2 px-4 text-white rounded-xl bg-red-600 hover:bg-red-700"
                                                onClick={() => deleteBook(book.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Books
