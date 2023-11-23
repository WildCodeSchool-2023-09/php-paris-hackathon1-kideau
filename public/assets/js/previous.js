let qrr1 = document.getElementById("question_reponse1");
let qrr2 = document.getElementById("question_reponse2");
let qrr3 = document.getElementById("question_reponse3");
let qrr4 = document.getElementById("question_reponse4");
let qrr5 = document.getElementById("question_reponse5");
let qrr6 = document.getElementById("question_reponse6");
let qrr7 = document.getElementById("question_reponse7");
let qrr8 = document.getElementById("question_reponse8");

let back1 = document.getElementById("back_1");
let back2 = document.getElementById("back_2");
let back3 = document.getElementById("back_3");
let back4 = document.getElementById("back_4");
let back5 = document.getElementById("back_5");
let back6 = document.getElementById("back_6");
let back7 = document.getElementById("back_7");
let back8 = document.getElementById("back_8");

back2.addEventListener("click", function () {
    qrr2.style.display = "none";
    qrr1.style.display = "block";
});

back3.addEventListener("click", function () {
    qrr3.style.display = "none";
    qrr2.style.display = "block";
});

back4.addEventListener("click", function () {
    qrr4.style.display = "none";
    qrr3.style.display = "block";
});

back5.addEventListener("click", function () {
    qrr5.style.display = "none";
    qrr4.style.display = "block";
});

back6.addEventListener("click", function () {
    qrr6.style.display = "none";
    qrr5.style.display = "block";
});

back7.addEventListener("click", function () {
    qrr7.style.display = "none";
    qrr6.style.display = "block";
});

back8.addEventListener("click", function () {
    qrr8.style.display = "none";
    qrr7.style.display = "block";
});