for (let i = 0; i < 5; i ++) {
    const newH2 = document.createElement("h2");
    newH2.innerHTML = "All in all we're just another brick in the wall";
    newH2.style.fontSize = "20px";
    newH2.style.fontWeight = "lighter";
    newH2.style.fontFamily = "sans-serif";
    newH2.style.color = "cornflowerblue";
    document.body.appendChild(newH2);
}

body.classList.add('border');
