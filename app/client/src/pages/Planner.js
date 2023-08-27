import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './css/Planner.css'


const Planner = () => {
    return (
        <div className="container">
            <Nav />
            <div className='row'>
                <div className="col-md-12" style={{textAlign: 'center', padding: '33px'}}>
                    <input type="text" placeholder='city name'/>
                    <button className='btn'> Search something</button>
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

export default Planner
