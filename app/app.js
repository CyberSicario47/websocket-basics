const socket = new WebSocket('ws://localhost:9000')
socket.onmessage = ({data}) =>{
    console.log({'Message from server': data});
    // socket.send('form the fornt end')
};

document.querySelector('button').onclick = ()=>{
    console.log('client1')

    socket.send('hello');
}

socket.addEventListener('message',(event)=>{
    console.log({message:'this is the evenrt',
    event:event})
    // socket.send('jhello from client 1');

})

 document.getElementById('2a').onclick=()=>{
    console.log('client2')
    socket.send('jhello from client 2');
}