const hexDisplay = document.getElementById("hexDisplay");

function newColour() {
    let hex =randomHexColorCode();
    // Display hex
    hexDisplay.textContent = `Hex: ${hex}`
    // Replace background with colour
    document.body.style.backgroundColor = hex;
}

function randomHexColorCode() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

