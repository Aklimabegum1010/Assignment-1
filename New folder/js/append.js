

// 1 where to add

const foodList = document.getElementById('food-list');

// 2 what to be added
const li = document.createElement('li');
li.innerText = 'polaw'


//  3 add the child
foodList.appendChild(li)


// একই ভাবে একটা section add  করবো 

//  1 where to add 

const mainContent = document.getElementById('main-content');

//  2 what to be added

const section = document.createElement('section');
const h1 = document.createElement("h1")
h1.innerText = 'Name List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Aklima'
ul.appendChild(li1);


const li2 = document.createElement('li');
li2.innerText = 'Muslima'
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Kulsuma'
ul.appendChild(li3);

section.appendChild(ul)
mainContent.appendChild(section)



// another sistem  section add  করবো 


const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> my Dress section </h1>
<ul>
    <li>shari</li>
    <li>dress</li>
    <li>kamij</li>
</ul>
`
mainContent.appendChild(sectionDress)




