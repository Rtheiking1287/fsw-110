var newP = document.createElement('p')
newP.textContent = 'When Sgt. Pepper taught the band to play!'
newP.style.textAlign = 'center'
newP.style.fontSize = '20px'
document.body.prepend(newP)

var newH1 = document.createElement('h1')
newH1.textContent = 'It was twenty years ago today!'
newH1.style.textAlign = 'center'
document.body.prepend(newH1)

var newListItem1 = document.createElement('li')
newListItem1.textContent = "It's wonderful to be here"
newListItem1.style.textAlign = 'center'
var newListItem2 = document.createElement('li')
newListItem2.textContent = "It's certainly a thrill."
newListItem2.style.textAlign = 'center'
var newListItem3 = document.createElement('li')
newListItem3.textContent = "You're such a lovely audience."
newListItem3.style.textAlign = 'center'
var mylist = document.getElementById("sgtPepper")

document.body.append(newListItem1)
document.body.append(newListItem2)
document.body.append(newListItem3)

var newFooter = document.createElement('footer')
newFooter.textContent = "Sgt Pepper's Lonely Hearts Club Band - The Beatles"
newFooter.style.textAlign = 'center'
newFooter.style.fontSize = '10px'
document.body.append(newFooter)

var link1 = document.createElement('nav')
var anchorElement = document.createElement("A");
 anchorElement.setAttribute("href", "/html");
var txt1 = document.createTextNode("HTML");
 anchorElement.appendChild(txt1);

link1.appendChild(anchorElement);
var myNav = document.getElementById("navbar")


