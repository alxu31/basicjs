function rollDice() {
    const numdice = document.getElementById('numdice');
    const result = document.getElementById('result');
    const image = document.getElementById('image');
    const values = [];
    const images = [];
    console.log('check');

    for(let i = 0; i < numdice.value; i++){
        const rand = Math.floor(Math.random() * 6) + 1;
        console.log(rand);
        values.push(rand);
        console.log(values);
        images.push(`<img src = "/dice_images/${rand}.png" alt = "Dice ${rand}">`);
    }
    result.textContent = `dice: ${values.join(', ')}`;
    image.innerHTML = images.join('');
}



