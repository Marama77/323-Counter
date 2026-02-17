//Function increase & decrease
const increase = count => count + 1;
const decrease = count => count - 1;

const updateDisplay = count => {
    document.getElementById("counter").textContent = count;
};

//State
let count = 0;
updateDisplay(count);

//Event-Handler
document.getElementById("increase").addEventListener("click", () => {
    count = increase(count);
    updateDisplay(count);
});
document.getElementById("decrease").addEventListener("click", () => {
    count = decrease(count);
    updateDisplay(count);
});
        