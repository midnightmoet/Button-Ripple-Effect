const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (e) => {
    // console.log(e.pageX, e.pageY); // this gives the position of the mouse
    const x = (e.pageX - e.target.offsetLeft); // this gives the position of the mouse relative to the button
    const y = (e.pageY - e.target.offsetTop); // this gives the position of the mouse relative to the button
    // console.log(x, y);  // this gives the position of the mouse relative to the button

    btnEl.style.setProperty("--xPos", `${x}px`); // this sets the value of the css variable --x to the value of x
    btnEl.style.setProperty("--yPos", `${y}px`); // this sets the value of the css variable --y to the value of y
})