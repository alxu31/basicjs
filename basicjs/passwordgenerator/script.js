

function passwordCreate() {
    console.log('testfunctioncalled');
    const numUp = document.getElementById('up').value;
    const numLow = document.getElementById('low').value;
    const numNum = document.getElementById('num').value;
    const numSym = document.getElementById('sym').value;

    let result = document.getElementById('result');
    
    const Ups = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    
    const Lows = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    
    const Nums = [
        "1","2","3","4","5","6","7","8","9","0"
    ];
    
    const Syms = [
        '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', 
        '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', 
        '>', '/', '?', '`', '~'
    ];
    
    let password = [];
    for (let i = 0; i < numUp; i++){
        const rand = Math.floor(Math.random() * Ups.length);
        password.push(Ups[rand]);
        console.log(Ups[rand]);
    }
    for (let i = 0; i < numLow; i++){
        const rand = Math.floor(Math.random() * Lows.length);
        password.push(Lows[rand]);
        console.log(Lows[rand]);
    }
    for (let i = 0; i < numNum; i++){
        const rand = Math.floor(Math.random() * Nums.length);
        password.push(Nums[rand]);
        console.log(Nums[rand]);
    }
    for (let i = 0; i < numSym; i++){
        const rand = Math.floor(Math.random() * Syms.length);
        password.push(Syms[rand]);
        console.log(Syms[rand]);
    }
    console.log(`Unshuffled: ${password.join('')}`);
    randomize(password);
    result.textContent = `Password: ${password.join('')}`;
    console.log(`Shuffled: ${password.join('')}`);
}

function randomize(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {

    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}