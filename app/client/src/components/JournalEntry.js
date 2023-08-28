import React from 'react';
import './css/JournalEntry.css'

const JournalEntry = () => {
  return (
    <div className='formArea'>
        <div className='entryArea'>
            <div class="textBox mb-3">
                <label for="journalText" class="form-label">Journal Entry</label>
                <textarea class="form-control" rows="10"></textarea>
            </div>
            <button className='btn'>Submit entry</button>
        </div>
    </div>
  )
}

export default JournalEntry