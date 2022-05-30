// make the box disapear when the user clicks it
const squareColor = document.getElementsByClassName("red-box");

squareColor.addEventListener('mousedown', () => {
    document.getElementsByClassName("red-box").style.backgroundColor = 'white';
}); 

