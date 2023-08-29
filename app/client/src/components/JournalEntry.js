import React from 'react';
import './css/JournalEntry.css'

const JournalEntry = () => {
  return (
    <div className='container'>
      <div className='formArea'>
          <div className='entryArea'>
              <div class="textBox mb-3">
                  <label for="journalText" class="form-label">Journal Entry</label>
                  <textarea class="form-control" rows="10"></textarea>
              </div>          
          </div>
      </div>
      <button className='entryBtn'>Submit entry</button>
    </div>
  )
}

export default JournalEntry