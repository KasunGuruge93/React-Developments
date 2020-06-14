import React, {useContext} from 'react';
import { BookContext } from '../context/BookContext';
import BooksDetails from './BooksDetails';

const BookList = () => {
    const {books} = useContext(BookContext)
    return books.length? ( 
<div className="book-list">
    <ul>
        {books.map((book)=> {
            return(<BooksDetails book ={book} key={book.id}/>);
        })}
    </ul>
</div>

     ):(
         <div className="empty">No Books to Read ..!</div>
     )
}
 
export default BookList;

