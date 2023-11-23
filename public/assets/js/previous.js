let qr1 = document.getElementById("question_reponse1");
let qr2 = document.getElementById("question_reponse2");
let qr3 = document.getElementById("question_reponse3");
let qr4 = document.getElementById("question_reponse4");
let qr5 = document.getElementById("question_reponse5");
let qr6 = document.getElementById("question_reponse6");
let qr7 = document.getElementById("question_reponse7");
let qr8 = document.getElementById("question_reponse8");

let back1 = document.getElementById("back_1");
let back2 = document.getElementById("back_2");
let back3 = document.getElementById("back_3");
let back4 = document.getElementById("back_4");
let back5 = document.getElementById("back_5");
let back6 = document.getElementById("back_6");
let back7 = document.getElementById("back_7");
let back8 = document.getElementById("back_8");

back2.addEventListener("click", function () {
    qr2.style.display = "none";
    qr1.style.display = "block";
});

back3.addEventListener("click", function () {
    qr3.style.display = "none";
    qr2.style.display = "block";
});

back4.addEventListener("click", function () {
    qr4.style.display = "none";
    qr3.style.display = "block";
});

back5.addEventListener("click", function () {
    qr5.style.display = "none";
    qr4.style.display = "block";
});

back6.addEventListener("click", function () {
    qr6.style.display = "none";
    qr5.style.display = "block";
});

back7.addEventListener("click", function () {
    qr7.style.display = "none";
    qr6.style.display = "block";
});

back8.addEventListener("click", function () {
    qr8.style.display = "none";
    qr7.style.display = "block";
});