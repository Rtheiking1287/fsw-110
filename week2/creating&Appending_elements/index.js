var newH1 = document.createElement('h1')
newH1.textContent = 'Welcome to my JS site!'
newH1.style.textAlign = 'center'
newH1.style.fontSize = '50px'
document.body.prepend(newH1)

var newP = document.createElement('p')
newP.textContent = 'All of this was created with Javascript!'
newP.style.textAlign = 'center'
newP.style.fontSize = '50px'
document.body.prepend(newP)

var newListItem1 = document.createElement('li')
newListItem1.textContent = 'Woke Up'
var newListItem2 = document.createElement('li')
newListItem2.textContent = 'Fell out of bed'
var newListItem3 = document.createElement('li')
newListItem3.textContent = 'Dragged a comb across my head'
var mylist = document.getElementById("aDayInTheLife")
mylist.appendChild(newListItem1)
mylist.appendChild(newListItem2)
mylist.appendChild(newListItem3)