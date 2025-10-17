let bulb = document.querySelector(`#img`);
let onBtn = document.querySelector(`#onBtn`);
let ofBtn = document.querySelector(`#ofBtn`);

ofBtn.addEventListener(`click`, function () {
    bulb.src = "./assets/image/lightof.jpeg";
})
onBtn.addEventListener(`click`, function () {
    bulb.src = "./assets/image/lighton.jpeg";
})

bulb.addEventListener(`dblclick`, function () {
    if (bulb.src.includes("lightof.jpeg")) {
        bulb.src = "./assets/image/lighton.jpeg"
    }
    else if (bulb.src.includes("lighton.jpeg")) {
        bulb.src = "./assets/image/lightof.jpeg"
    }
})