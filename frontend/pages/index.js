import { useState } from "react"
import { ethers } from "ethers"

export default function Home() {

  const [wallet,setWallet] = useState("")

  async function connectWallet(){

    if(!window.ethereum) return

    const provider = new ethers.providers.Web3Provider(window.ethereum)

    const accounts = await provider.send("eth_requestAccounts",[])

    setWallet(accounts[0])
  }

  return (

    <div style={{padding:40,fontFamily:"Arial"}}>

      <h1>HERG</h1>

      <p>Token distribution turned into a fair game.</p>

      {wallet ? (
        <p>Connected: {wallet}</p>
      ) : (
        <button onClick={connectWallet}>
          Connect Wallet
        </button>
      )}

    </div>

  )
}
