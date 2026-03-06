const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

let leaderboard = []

app.get("/players", (req,res)=>{
    res.json(leaderboard)
})

app.post("/join",(req,res)=>{

    const {wallet} = req.body

    leaderboard.push({
        wallet,
        joined: Date.now()
    })

    res.json({success:true})
})

app.listen(4000,()=>{
    console.log("Herg backend running on 4000")
})
