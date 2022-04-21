import React from 'react';
import styled from 'styled-components'


function Crypto({name, icon, price, symbol}) {
  return (
    <CoinBox>
      <CoinContainer>
      <h1>Name: {name}</h1>
      <img src={icon} atl=''/>
      <h3>Price: {price}</h3>
      <h3><span>Symbol: {symbol}</span></h3>
      </CoinContainer>
    </CoinBox>
  )
}

export default Crypto;

const CoinContainer = styled.div`
  margin-top: 20px;
  line-height: 50px;
`

const CoinBox = styled.div`
  width: 350px;
  height: 320px;
  background-color: rgb(3, 33, 34);
  color: rgb(161, 6, 78);
  box-shadow: rgba(0, 0, 0, 0) 0px 3px 8px;
  border-radius: 20px;
  margin: 20px;
  text-align: center;

  img {
    width: 70px;
  }

  span{
    color: blueviolet;
  }

  h1 {
  font-size: 28px;
 }

  h3 {
  color:#808000;
}
`