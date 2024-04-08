import React from 'react'
import "../../src/style.scss"
export const AboutCrypto = () => {
  return (
    <div className='faqbox'>
    <h2 style={{margin:'40px 0px',fontWeight:'900',fontSize:'3rem'}}>What is cryptocurrency ?</h2>
    <div className='listwrapper'>
    <div className='cryptomain'>
    <img src="/maincrypto2.webp" alt=""/>
    </div>    
   <div className='cryptodetail'>
    Cryptocurrency is a digital payment system that doesn't rely on banks to verify transactions. It’s a peer-to-peer system that can enable anyone anywhere to send and receive payments. Instead of being physical money carried around and exchanged in the real world, cryptocurrency payments exist purely as digital entries to an online database describing specific transactions. When you transfer cryptocurrency funds, the transactions are recorded in a public ledger. Cryptocurrency is stored in digital wallets.    
    Cryptocurrency received its name because it uses encryption to verify transactions. This means advanced coding is involved in storing and transmitting cryptocurrency data between wallets and to public ledgers.    
    </div>
    </div>
    <h2 className="mainheadline">How does cryptocurrency works<span style={{fontSize:'4rem',fontWeight:'900'}}>_</span></h2>
    <div className='listwrapper'>
    <div className='cryptomain'>
    <img src="/maincrypto.webp" alt=""/>
    </div>    
   <div className='cryptodetail'>
   Cryptocurrencies run on a distributed public ledger called blockchain, a record of all transactions updated and held by currency holders.Units of cryptocurrency are created through a process called mining, which involves using computer power to solve complicated mathematical problems that generate coins. Users can also buy the currencies from brokers, then store and spend them using cryptographic wallets.If you own cryptocurrency, you don’t own anything tangible. What you own is a key that allows you to move a record or a unit of measure from one person to another without a trusted third party.
   Although Bitcoin has been around since 2009, cryptocurrencies and applications of blockchain technology are still emerging in financial terms, and more uses are expected in the future.
    </div>
    </div>
    <h2>
    Cryptocurrency examples    
    </h2>
    <div className='iconwrapper'>
    <div className='iconlogo'>
    <img src="/Dash-Crypto-Logo-PNG-Cutout.png" alt=""/>
    <h2>Dash</h2>
    </div>    
    <div className='iconlogo'>
    <img src="/ethereum-eth-logo.png" alt=""/>
    <h2>Ethereum</h2>
    </div>    
    <div className='iconlogo'>
    <img src="/litecoin-ltc-badge-crypto-3d-rendering-free-png.webp" alt=""/>
    <h2>Litecoin</h2>
    </div>    
    </div>
    <h2>Four tips to invest in cryptocurrency safely</h2>
    <div className="listwrapper1">
    <div className='insideBox'>
    <p style={{position:'absolute',bottom:'20px',color:'#fff',padding:'0px 20px',fontSize:'16px',textAlign:'left'}}>
It’s estimated that there are over 500 exchanges to choose from. Do your research,talk with more experienced investors before moving forward.
    </p>
    </div>
    <div className='insideBox'>
    <p style={{position:'absolute',bottom:'20px',color:'#fff',padding:'0px 20px',fontSize:'16px',textAlign:'left'}}>
    If you buy cryptocurrency, you have to store it. You can keep it on an exchange or in a digital wallet. 
    </p>
    </div>
    <div className='insideBox'>
     <p style={{position:'absolute',bottom:'20px',color:'#fff',padding:'0px 20px',fontSize:'16px',textAlign:'left'}}>
     While there are different kinds of wallets, each has its benefits, technical requirements, and security. As with exchanges, you should investigate your storage choices before investing.
     </p>
    </div>
    <div className='insideBox'>
    <p style={{position:'absolute',bottom:'20px',color:'#fff',padding:'0px 20px',fontSize:'16px',textAlign:'left'}}>
    Diversification is key to any good investment strategy, and this holds true when you are investing in cryptocurrency. Don't put all your money in Bitcoin.
     </p>
    </div>
    </div>
    </div>
    );
}
