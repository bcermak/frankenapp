import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ('./css/Journals.css')

const Journals = () => {
  return (
    <>
            <Nav />
            <div className='formArea'>
                <div className='displayPosts'>
                    <div> Post 1 </div>
                    <div> Post 2 </div>
                    <div> Post 3 </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default Journals