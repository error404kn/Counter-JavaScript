let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");
let counterValue = document.querySelector("#counterValue");
let reset = document.querySelector('#reset')

let counter = 1;

increase.addEventListener("click", () => {
    if(counter < 10){
        counter++;
        counterValue.innerText = counter;
    }
})
decrease.addEventListener("click", () => {
    if(counter > 1){
        counter--;
        counterValue.innerText = counter;
    }
})

reset.addEventListener("click", () => {
    counter = 1;
    counterValue.innerText = counter;
})