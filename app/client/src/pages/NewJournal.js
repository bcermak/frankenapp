import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import JournalEntry from '../components/JournalEntry';

const NewJournal = () => {
    return (
        <>
            <div className='container'>
                <Nav />
                <JournalEntry />
                <Footer /> 
            </div>
        </>
    );
};

export default NewJournal
