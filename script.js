//your JS code here. If required.
function rotateLine() {
    let lineOne = document.getElementById('line');
    let angle = 0;

    function rotate() {
        angle = (angle + 2) % 360; 
        lineOne.style.transform = `rotate(${angle}deg)`;
        requestAnimationFrame(rotate); 
    }
    rotate();
}

window.onload = rotateLine;

