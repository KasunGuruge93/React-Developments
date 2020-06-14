import React, { createContext, useState, useReducer, useEffect } from 'react';
import uuid from 'react-uuid';
import { bookReducer } from '../reducers/BookReducer';


export const BookContext = createContext();

const BookContextProvider =  (props) =>{

const [books, dispatch] = useReducer(bookReducer, [], ()=>{
    const localData = localStorage.getItem('book');
    return localData ? (
        JSON.parse(localData)
    ): []
})

useEffect(()=>{
localStorage.setItem("book",  JSON.stringify(books))
}, [books])


return (
    <BookContext.Provider value={{books, dispatch}}>

        {props.children}

    </BookContext.Provider>
)



}
export default BookContextProvider;
  



 