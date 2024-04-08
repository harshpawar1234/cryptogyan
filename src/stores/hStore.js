import axios from 'axios';
import debounce from '../helpers/debounce';
import create from 'zustand';
 const hStore= create((set) => ({
    coins:[],
    trending:[],
    query:'',
    loading:false,
    searched:false,
    setQuery:(e)=>
    {
      set({query:e.target.value});
      hStore.getState().searchCoins();
    },
    searchCoins:debounce(async()=>
    { 
      set({loading:true});
      const {query,trending}=hStore.getState();
      console.log(query,trending);
      if(query.length>2)
      {
        const res=await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`);
  
        const coins=res.data.coins.map(coin=>
          {
            return{
              name:coin.name,
              image:coin.large,
            id:coin.id,
        
          }
        })
        set({coins,loading:false,searched:true});
      }else
      {
        console.log(trending);
        set({coins:trending,loading:false,searched:false})
      }
    },500),
    fetchCoins:async()=>
{
  const [trendingdata,priceData]=await Promise.all([axios.get("https://api.coingecko.com/api/v3/search/trending"),axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`)]);
  console.log(priceData.data.bitcoin.usd);
  const coins=trendingdata.data.coins.map(coin=>{
    return{
     name:coin.item.name,
     image:coin.item.large,
     id:coin.item.id,
     priceBTC:coin.item.price_btc.toFixed(10),
    priceUSD:(coin.item.price_btc*priceData.data.bitcoin.usd).toFixed(10),
    }
  })
  set({coins,trending:coins}); 
}
}));
export default hStore;