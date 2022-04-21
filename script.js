/*function to make the menu visible */
function menuToggle() {
    const getColorMenu = document.querySelector("#color-menu ul");

    if(getColorMenu.style.visibility === "visible") {
        getColorMenu.style.visibility ="hidden";
    } else {
        getColorMenu.style.visibility = "visible";
    }
}

/*functions to change the background color and the color name*/
function grayBackground() {
    document.getElementById('body').style.background="gray";
    document.getElementById('colorName').innerHTML = "Gray";
    menuToggle();
}
function redBackground() {
    document.getElementById('body').style.background="red";
    document.getElementById('colorName').innerHTML = "Red";
    menuToggle();
}
function blueBackground() {
    document.getElementById('body').style.background="blue";
    document.getElementById('colorName').innerHTML = "Blue";
    menuToggle();
}
function purpleBackground() {
    document.getElementById('body').style.background="purple";
    document.getElementById('colorName').innerHTML = "Purple";
    menuToggle();
}
function pinkBackground() {
    document.getElementById('body').style.background="pink";
    document.getElementById('colorName').innerHTML = "Pink";
    menuToggle();
}


