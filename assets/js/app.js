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
    else {
        bulb.src = "./assets/image/lightof.jpeg"
    }
})





let dice = document.querySelector(`#dice `);
dice.addEventListener(`click`, function () {
    let luduResult = Math.ceil(Math.random() * 6);
    let imgSrc = `assets/image/` + luduResult + `.png`;
    document.querySelector(`#ludu`).src = imgSrc;
})
let ludu = document.querySelector(`#ludu `);
ludu.addEventListener(`click`, function () {
    let luduResult = Math.ceil(Math.random() * 6);
    let imgSrc = `assets/image/` + luduResult + `.png`;
    document.querySelector(`#ludu`).src = imgSrc;
})

let number = document.getElementById(`input`);
let result = document.getElementById(`result`)
// number = Number(number)
// console.log(typeof number);
document.getElementById(`btn`).addEventListener
    (`click`, function () {
        document.getElementById(`btn`).innerText = `Result`
        if (number.value % 2 === 0 && number.value > 0) {
            result.innerHTML = `${number.value} this is an even number & positive number`;
            result.style.color = "#68de7c";
        } 
        else if (number.value % 2 === 0 && number.value < 0) {
            result.innerHTML = `${number.value} this is an even number & negative number`;
            result.style.color = "#003008";
        } 
        else if (number.value % 2 === 1 && number.value > 0) {
            result.innerHTML = `${number.value} this is an odd number & positive number`;
            result.style.color = "#d63638";
        } 
        else if (number.value % 2 === -1 && number.value < 0) {
            result.innerHTML = `${number.value} this is an odd number & negative number`;
            result.style.color = "#691c1c";
        } 
        else if (number.value % 2 !== 0 && number.value > 0) {
            result.innerHTML = `${number.value} this is an decimal number & positive number`;
            result.style.color = "#2271b1";
        } 
        else if (number.value % 2 !== 0 && number.value < 0) {
            result.innerHTML = `${number.value} this is an decimal number & negative number`;
            result.style.color = "#0a4b78";
        } 
        else {
            result.innerHTML = `${number.value} this is an neutral number`;
            result.style.color = "#50575e";
        }
    })
