const circles = document.querySelectorAll('.circle'); // Added '=' sign to assign the result of querySelectorAll to the variable
let activeLight = 0;

setInterval(() => {
    changeLight(); // Changed function name to match the function definition
}, 1000);

function changeLight() { // Changed function name to match the function call
    circles[activeLight].className = 'circle'; // Fixed typo 'activelight' to 'activeLight'
    activeLight++;
    if(activeLight > 2) { // Fixed typo 'activelight' to 'activeLight'
        activeLight = 0;
    }
    const currentLight = circles[activeLight]; // Fixed typo 'circles [activeLight]' to 'circles[activeLight]'
    currentLight.classList.add(currentLight.getAttribute('color'));
}
