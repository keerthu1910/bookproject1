import React from 'react'

// import axios from 'axios'
// import Bookstobedisplayed from './Bookstobedisplayed'
import {useNavigate} from 'react-router-dom'

const Bookcontainer=()=>{

    const navigate=useNavigate()
    
    
    return(
        <fragment>
            <div>
                <button onClick={()=>navigate('/bookstobedisplayed')}>viewbooks</button>
                <button onClick={()=>navigate('/addbooks')}>Add books</button>
                <button onClick={()=>navigate('/')}>Home</button>
            </div>
            
            {/* <Bookstobedisplayed books={books}/> */}
    
        </fragment>
    
    )}
            


export default Bookcontainer