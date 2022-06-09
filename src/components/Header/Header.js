import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className="coin__header">
      <div className="coin__headerItems">
        <p> Ticker </p>
        <p> Current Price </p>
        <p> Total Volume </p>
        <p> Percent Change </p>
        <p> Market Cap </p>
      </div>
    </div>
  )
}

export default Header