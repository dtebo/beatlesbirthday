import React from 'react';
import beatles from '../../assets/beatles.gif';

const Header = props => {
    return (
        <div className='App-header'>
            <section className='title-container'>
                <h1>Happy Birthday Dad!</h1>
                <img src={beatles} alt='beatles birthday wishes' />
            </section>
        </div>
    );
};

export default Header;