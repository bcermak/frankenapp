import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './css/Weatherpage.css'


const WeatherPage = () => {
    return (
        <div className="container">
            <Nav />
            <div className='row'>
                <div className="col-md-12" style={{textAlign: 'center', padding: '33px'}}>
                    <input type="text" placeholder='city name'/>
                    <button className='btn'> Weather button</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6"></div>
            </div>
            <Footer />
        </div>
    );
};

export default WeatherPage
