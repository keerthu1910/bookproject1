import React from 'react'
import Style from '../style/Addbooks.module.css'
import {useState} from 'react'
import axios from 'axios'

const Addbooks=()=>{

    const[name,setName]=useState("")
    const[author,setAuthor]=useState("")

    const[book,setBook]=useState([
        {
            name,
            author
        }
    ])
    

    

    const addcontacthandler=()=>{
        
        const request={
            name,
            author
        }
        

        const response= axios.post('http://localhost:3006/books',request)
        // const json=JSON.stringify(response)
        setBook([...book,response])
    }


    return(
        <div>
            <form className={Style.uiform}>
                {/* <label for="bid" className={Style.bid}>Book id</label>
                <input type="text" name="bid" value={book.id} placeholder="book id" onChange={(e)=>setBook({id:e.target.value})}></input>
                <br></br> */}
                <label for="bname" className={Style.bnamelabel}>Book name</label>
                <input type="text"  value={book.name} placeholder="book name" onChange={(e)=>setName(e.target.value)}></input>
                <br></br>
                <label for="bauthor" className={Style.bauthorlabel}>Author of the book</label>
                <input type="text"  value={book.author} placeholder="author name" onChange={(e)=>setAuthor(e.target.value)}></input>
                <br></br>
                <button onClick={addcontacthandler}>Add book!</button>
            </form>
        </div>
    )
}


export default Addbooks