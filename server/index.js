const express = require('express');
const app = express();
const server = require('http').createServer(app);

const WebSocket = require('ws');
const wss = new WebSocket.Server({ server });

wss.on('connection', socket=>{
    console.log("a new client connected")

    socket.send("connsection is ready");

    socket.on('message', message=>{
        console.log({message:message})
        wss.clients.forEach((client)=>{
            if(client !== socket && client.readyState === WebSocket.OPEN){
                client.send(message)
            }
        })
    })
})

app.get('/',(req, res )=>{
    res.send('hello world')
})

server.listen(9000, ()=>{
    console.log('listing to the server running ....')
})