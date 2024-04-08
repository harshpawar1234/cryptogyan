import axios from 'axios';
import create from 'zustand';
const showStore=create((set)=>
({
 graphData:[],
 data:null,
 reset:()=>
 {
  set({graphData:[],data:null});
 },
    fetchData:async(id)=>{
 const[graphRes,dataRes]=await Promise.all([

     axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30`)
    ,axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`),]);

 const graphData=await graphRes.data.prices.map((price)=>
 {
   const[timestamp,p]=price;
   const date=new Date(timestamp).toLocaleDateString('en-us');
   return{
    Date: date,
    Price:p,
   };

})
set({data:dataRes.data});
set({graphData}); 
}
}));
export default showStore;