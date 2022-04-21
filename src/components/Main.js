import React from 'react';
import {useEffect, useState} from "react";
import Axios from "axios";
import Crypto from './Crypto' 
import styled from 'styled-components'

function Main() {
  const [crypto, setCrypto] = useState([]);
  const [searchCrypto, setSearchCrypto] = useState("") 

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then((response)=>{
    setCrypto(response.data.coins);
    })
  }, [])

  //search component
  const filteredCoins = crypto.filter((coin)=> {
    return coin.name.toLowerCase().includes(searchCrypto.toLowerCase());
  });
 

  return (
    <MainContainer>
      <SearchBox>
        <Input type="text" placeholder='Search...' onChange={(event)=>{setSearchCrypto(event.target.value)}}/>
      </SearchBox>

      <CardsBox>
        {filteredCoins.map((coin)=> {
         return <Crypto key={coin.id} {...coin}
         name={coin.name}
         icon={coin.icon}
         price={coin.price}
         symbol={coin.symbol}
         />;
      })}
      </CardsBox>
    </MainContainer>
  );
}

export default Main; 

const MainContainer = styled.main`
  padding-top: 100px;
`

const SearchBox = styled.div`
  text-align: center;
  margin-top: -20px;
  position: relative;
  align-items: center;
  justify-content: center;
`
const Input = styled.input`
  outline: none;
  padding: 20px 10%;
  border-radius: 10px;
  border: none;
  margin-bottom: 5%;
  background: rgba(250, 250, 250, 0.85);
  font-size: 20px;
  flex: 1;
`

const CardsBox = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`