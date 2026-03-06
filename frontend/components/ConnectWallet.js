import { useState } from "react"
import { ethers } from "ethers"

export default function ConnectWallet(){

  const [account,setAccount] = useState()

  async function connect(){

    const provider = new ethers.providers.Web3Provider(window.ethereum)

    const accounts = await provider.send("eth_requestAccounts",[])

    setAccount(accounts[0])
  }

  return(

    <div>

      {account
        ? <p>{account}</p>
        : <button onClick={connect}>Connect Wallet</button>
      }

    </div>
  )
}
