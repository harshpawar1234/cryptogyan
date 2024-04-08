import React from 'react';
import { Link } from 'react-router-dom';
export default function Header({goBack}){

  return (
    <header className='appheader'>
    <div className="width">
    {goBack && (<Link to="/">
    <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' width="24"><path d="m32.75 44-20-20 20-20 2.8 2.85L18.4 24l17.15 17.15Z"/></svg>
    </Link> 
    )}
    <h1><Link to="/" className='appTitle'>Cryptogyaan!</Link></h1>
    </div>
    </header>
  );
}
