function handlerClick(){
    const handlerStatus = document.getElementById("handler-status");
    handlerStatus.innerText = 'This is event handler.'
}

// ----------another way-----
document.getElementById('event-listner').addEventListener('click', function(){
const handlerStatus = document.getElementById('handler-status');

handlerStatus.innerText ='This is another way to change defult text.'

})