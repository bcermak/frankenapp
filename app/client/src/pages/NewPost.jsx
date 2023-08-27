import React from 'react';
import Nav from '../components/Nav/Nav';
import PostForm from '../components/PostForm';
import Footer from '../components/Footer';

const NewPost = () => {
    return (
        <div className="container">
            <Nav />
            <PostForm /> 
            <Footer /> 
        </div>
    );
};

export default NewPost
