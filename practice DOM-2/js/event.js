

function makeBlue(){
    document.body.style.backgroundColor = 'blue'
}


const yellow = document.getElementById("make-yellow");
yellow.onclick = makeYellow;

function makeYellow(){
    document.body.style.backgroundColor = 'yellow'
}

// option 4

const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener('click', makePink)

function makePink(){
    document.body.style.backgroundColor = 'pink'
}

// option 4 another

const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green'
})


// And finall যেটা বেশি  use হবে 


document.getElementById('make-orange').addEventListener('click', function(){
    document.body.style.backgroundColor = ' orange'
}) 






