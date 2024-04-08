import React from 'react';
import { Link } from 'react-router-dom';
export default function Listitems({coin}) {
   console.log(coin);
    return (
            <div key={coin.id} className="home-crypto"> 
          <Link to={`/${coin.id}`} className="coinName">
             <span className='home-crypto-image'><img src={coin.image}/></span>
            <span className='home-crypto-name'>{coin.name}</span>
         {coin.priceBTC &&
         <span className='home-crypto-prices'>
            <span className='home-crypto-btc'>
                <img src="./bitcoin.webp" alt="Not Found" />{coin.priceBTC} BTC</span>    
            <span className='home-crypto-usd'>{coin.priceUSD} USD</span>
            </span>
         }   
            </Link>  
          </div>  
  )
}
