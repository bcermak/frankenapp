import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import ('./css/Journals.css')


const Journals = () => {

    const [journal, setJournal] = useState([ 
        { body: "", author: ""}
    ])

    useEffect( () => {
        Axios.get("http://localhost:8080/api/journals", {
        }).then( (res) => {
            setJournal(res.data)
        })
    }, []);

  return (
    <>
        <div className='container'>
            <Nav />
                <div className='formArea'>
                    {journal.map((journal) => {
                        return (
                            <div className='displayPosts'>
                                <p> {journal.body}</p>
                                <p> {journal.author}</p>
                            </div>    
                        )
                    })}
                    </div>
            <Footer />
        </div>
    </>
  )
}

export default Journals