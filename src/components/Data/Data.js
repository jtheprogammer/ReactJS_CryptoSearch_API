import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Data.css";
import Header from "../Header/Header"
import Coin from "../Coin/Coin";

function Data() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState("")
  
  useEffect(() => {
    axios.get(process.env.REACT_APP_COINGECKO_URL)
    .then(res => {
      setCoins(res.data);
      console.log(res.data);
    })
    .catch(err => console.log(err))
  })

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )
  
  return (
    <div className="coin__app">
      <div className="coin__search">
        <h1 className="coin__text">
          Search for a cryptocurrency
        </h1>
        <form>
          <input 
            type="text" placeholder="Search..."
            className="coin__input"
            onChange={handleChange}
          />
        </form>
      </div>
      <Header />
      {filteredCoins.map(coin => {
        return (
          <Coin 
            key={coin.id}
            crypto={coin.name} 
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            volume={coin.total_volume}
            priceChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}
          />
        )
      })}
    </div>
  );
}

export default Data;