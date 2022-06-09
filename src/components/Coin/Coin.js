import React from "react"
import "./Coin.css"

const Coin = ({ image, crypto, symbol, price, volume, priceChange, marketCap }) => {
  return (
    <div className="coin__container">
      <div className="coin__row">
        <div className="coin__desc">
          <img src={image} alt="crypto" />
          <h1>{crypto}</h1>
          <p className="coin__symbol">{symbol}</p>
        </div>
        <div className="coin__data">
          <p className="coin__price">${price}</p>
          <p className="coin__volume">${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin__percent dec">{priceChange.toFixed(2)}%</p>
            ) : (
            <p className="coin__percent inc">{priceChange.toFixed(2)}%</p>
            )
          }
          <p className="coin__marketCap">
            ${marketCap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Coin