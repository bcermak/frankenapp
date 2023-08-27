import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './css/Home.css';



const Home = () => {

    return (
        <div className='container'>
        <Nav />
        <div className='titleText'>
          <h1> Welcome to <span>Triptails</span></h1>
        </div>
        <Footer />
      </div>
    );
};

export default Home;

