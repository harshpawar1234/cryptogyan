import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import showStore from '../stores/showStore';
import Header from '../components/Header';
import { AreaChart, Area, XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer} from 'recharts';
export default function Show() {
 const store=showStore();
 const params=useParams();
 console.log(store);
 const data=store.graphData;
 useEffect(()=>
 {
   store.fetchData(params.id);
   return()=>
   {
    store.reset();
   }
},[]);

  return (
    <div>
      <Header goBack/>
      {store.data && <>
      <header className='m1'>
        <img src={store.data.image.large} alt="Not Found" />
       <h2> 
       {store.data.id}({store.data.symbol})
       </h2>
      </header>
      <div className="width">

      <div className="show-graph">
      <ResponsiveContainer width="100%" height="100%">
      <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
<CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Date"/>
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
      </ResponsiveContainer>  
      </div>
      </div>
   <div className="show-details">
   <div className="width">
    <h2>Details</h2>
    <div className='small-detail'>
    <h3>Market Cap rank</h3>
    <span>{store.data.market_cap_rank}</span>  
    </div>
    <div className='small-detail'>
     <h3>24h high</h3>
     <span>{store.data.market_data.high_24h.usd}</span> 
    </div>
    <div className='small-detail'>
     <h3>24h low</h3>
     <span>{store.data.market_data.low_24h.usd}</span> 
    </div>
    <div className='small-detail'>
     <h3>Circulating Supply</h3>
     <span>{store.data.market_data.circulating_supply}</span> 
    </div>
    <div className='small-detail'>
     <h3>Current Prices</h3>
     <span>$ {store.data.market_data.current_price.usd}</span>
    </div>
    <div className='small-detail'>
     <h3>1 year change</h3>
     <span>{store.data.market_data.price_change_percentage_1y.toFixed(2)}%</span> 
    </div>
  </div>
   </div>
      <div className='coindesc'>
      <div className='width'>
      <h2>Description</h2>
      <span>
        {store.data.description.en}
        </span>
      </div>
      </div>
   </>}
   </div>
  )
}
