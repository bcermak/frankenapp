import React from 'react'
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer';


const WeatherPage = () => {
    return (
        <div className="container">
            <Nav />
            <div className='row'>
                <div className="col-md-12" style={{textAlign: 'center', padding: '33px'}}>
                    <input type="text" placeholder='city name'/>
                    <button style={{backgroundColor: 'rebeccapurple', marginLeft: '10px', padding:'4px'}}> Search Weather </button>
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
