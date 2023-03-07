const container = document.querySelector('.container');

function createNums() {
    let arr = [];
    for(let i = 1; i <= 5; i++) {
        arr.push(Math.floor(Math.random() * (10 - 1) + 1));
    }
    return arr;
}


let nums = createNums();


for(let j = 0; j < nums.length; j++) {
    container.innerHTML += `<span>${nums[j]}</span>`;
}

setTimeout(() => {
    container.classList.add('hidden');

}, 1000);

setTimeout(() => {
    let userNums = [];
    let vinto = true;
    for(let i = 1; i <= 5; i++) {
        let num = prompt(`${i} Inserisci Numero`);
        userNums.push(parseInt(num));
    }
    for(let n = 0; n < nums.length; n++) {
        if(nums[n] !== userNums[n]) {
            vinto = false;
            console.log('Perso');
        }
    }
    console.log(nums, userNums);
}, 2000);