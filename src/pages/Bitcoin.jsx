import React from 'react'
import styled from 'styled-components'


function Bitcoin() {
  return (
    <Box>
       <h2>What is Bitcoin ?</h2>
      <p>
      Bitcoin is a decentralized digital currency,
      without a central bank or single administrator,
      that can be sent from user to user on the peer-to-peer
      bitcoin network without the need for intermediaries.
      </p>
    </Box>
  )
}

export default Bitcoin;

const Box = styled.div`
   width: 85vw;
    max-width: 40rem;
    margin: 100px auto;
    font-size:21px;
    line-height: 80px;

  h2{
    color: blueviolet;
  }

  p{
    line-height: 2rem;
    font-weight: 400;
    letter-spacing: 2px;
    color:rgb(204, 204, 207);
    font-size:21px;
  }
`