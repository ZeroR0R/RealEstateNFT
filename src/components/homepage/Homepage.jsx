import React from 'react';
import './homepage.css';
import { Contract, ethers } from 'ethers'

const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner();

async function connectMetaMask() {
  try {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  } catch (error) {
}
}

const Homepage = () => {
  return (
    <div className='home section__padding' id='home'> 
        <div className='home__content'>
            <h1 className='gradient__text'>
                Real Estate Non Fungible Token (NFT)
            </h1>
            <div className='wallet__connect'>
                <button className='wallet__connect-button' onClick={connectMetaMask}>Connect</button>
            </div>
        </div>
    </div>
  )
}

export default Homepage