import React from 'react';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';


const mainPage = () => {

    return (
        <div className='container'>
        <LoginForm/>
        <Footer />
      </div>
    );
};

export default mainPage;

