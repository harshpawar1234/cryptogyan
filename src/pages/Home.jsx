import React from 'react';
import {useEffect} from 'react';
import Header from '../components/Header';
import Listitems from '../components/Listitems';
import classNames from 'classnames/bind';
import hStore from "../stores/hStore";
import { AboutCrypto } from '../components/AboutCrypto';
export default function Home() {
   const store=hStore();
     useEffect(() => {
    
    if(store.trending.length==0)  store.fetchCoins();
      },[]);
    return (
      <div>
      <Header/>
      <header className='header-search'>
        <div className="width">
       <h2>Search for a crypto coin</h2> 
    <div className={classNames("home-search-input",{loading:store.loading,})}>
    <input type="text" id="userinput" value={store.query} onChange={store.setQuery}/>
    <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' width="20" viewBox="0 0 512 512"><path d="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z"/></svg>
    </div>
        </div>
      </header>
      <div className="home-cryptos">
       <div className="width">
       <h2>{store.searched?("Search results"):("Trending coins")}</h2> 
       <div className="home-crypto-list">
       {
         store.coins.map((coin)=>{
           return <Listitems key={coin.id} coin={coin}/>
          })
        }
        </div>
       </div>
      </div>  
      <AboutCrypto/>
    </div>
  );
}

