import React from 'react';
import { useState } from 'react';
import './css/JournalEntry.css';
import Axios from 'axios';


const JournalEntry = () => {

  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setPending] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const journal = { body, author};

    setPending(true);
  
    Axios.post('http://localhost:8080/api/createJournal', {
      body: journal.body,
      author: journal.author
    }).then(response => { 
      console.log(response)
      setPending(false);
    })
    .catch(error => {
        console.log(error.response)
    });
  }


  return (
    <div className='container'>
      <form className='formArea' onSubmit={handleSubmit}>
          <div className='entryArea'>
              <div className="textBox mb-3">
                  <label htmlFor="journalText" className="form-label">Journal Entry</label>
                  <textarea className="form-control" rows="1"  onChange={ (e) => setAuthor(e.target.value)}></textarea>
                  <textarea className="form-control" rows="10" onChange={ (e) => setBody(e.target.value)}></textarea>
              </div>          
          </div>
          { ! isPending && <button className='entryBtn'>Submit entry</button>}
          { isPending && <button disabled  className='entryBtn'>Adding journal...</button>}
      </form>
    </div>
  )
}

export default JournalEntry