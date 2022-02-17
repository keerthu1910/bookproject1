import React from 'react'
import Style from '../style/Bookcontainer.module.css'
import axios from 'axios'
import {useState,useEffect} from 'react'

const Bookstobedisplayed=()=>{

    const[books,setBooks]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3006/books')
            .then(res=>setBooks(res.data))
    },[])

//    async function fetchbooks(){
//         await axios.get('http://localhost:3006/books')
//            .then (res=>setBooks(res.data))
//     }

    // fetchbooks();

    function deletefilename(id){
        console.log(id)
        axios.delete(`http://localhost:3006/books/${id}`)
            // .then(res=>setBooks(res.data))
                .catch(err=>console.log(err))
        const newBookList=books.filter(book=>{
            return book.id!==id
        })
        setBooks(newBookList)        
    }

    return(
        <div>
            
            {books.map(book=>(
                <div className={Style.bookitem}>
                    <h2>{book.name}</h2>
                    <h3>{book.author}</h3><br></br><br></br>
                    <button className={Style.dustbin} onClick={()=>deletefilename(book.id)}>Delete</button>
                </div>    
            ))}
            
            
        </div>
    )
}


export default Bookstobedisplayed