import React from 'react'
import styled from 'styled-components'


function Crypto() {
  return (
    <Box>
      <h2>What is Crypto ?</h2>
      <p>
        Cryptocurrency, sometimes called crypto-currency
        or crypto, is any form of currency that exists
        digitally or virtually and uses cryptography
        to secure transactions. Cryptocurrencies don't
        have a central issuing or regulating authority,
        instead using a decentralized system to record
        transactions and issue new units.
      </p>
    </Box>
  )
}

export default Crypto

const Box = styled.div`
   width: 85vw;
    max-width: 40rem;
    margin: 100px auto;
    font-size:21px;
    line-height: 80px;

    h2{
      color: #0e8383;
    }

  p{
    line-height: 2rem;
    font-weight: 400;
    letter-spacing: 2px;
    color:rgb(204, 204, 207);
    font-size:21px;
  }
`