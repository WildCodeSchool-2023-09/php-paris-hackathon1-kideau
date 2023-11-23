let question1 = document.getElementById("question_1");
let question2 = document.getElementById("question_2");
let question3 = document.getElementById("question_3");
let question4 = document.getElementById("question_4");
let question5 = document.getElementById("question_5");
let question6 = document.getElementById("question_6");
let question7 = document.getElementById("question_7");
let question8 = document.getElementById("question_8");

let reponse1 = document.getElementById("reponse_1");
let reponse2 = document.getElementById("reponse_2");
let reponse3 = document.getElementById("reponse_3");
let reponse4 = document.getElementById("reponse_4");
let reponse5 = document.getElementById("reponse_5");
let reponse6 = document.getElementById("reponse_6");
let reponse7 = document.getElementById("reponse_7");
let reponse8 = document.getElementById("reponse_8");

let qr1 = document.getElementById("question_reponse1");
let qr2 = document.getElementById("question_reponse2");
let qr3 = document.getElementById("question_reponse3");
let qr4 = document.getElementById("question_reponse4");
let qr5 = document.getElementById("question_reponse5");
let qr6 = document.getElementById("question_reponse6");
let qr7 = document.getElementById("question_reponse7");
let qr8 = document.getElementById("question_reponse8");

reponse1.addEventListener("click", function () {
    qr1.style.display = "none";
    qr3.style.display = "block";
});

reponse2.addEventListener("click", function () {
    qr2.style.display = "none";
    qr1.style.display = "block";
});

reponse3.addEventListener("click", function () {
    qr3.style.display = "none";
    qr4.style.display = "block";
});

reponse4.addEventListener("click", function () {
    qr4.style.display = "none";
    qr5.style.display = "block";
});

reponse5.addEventListener("click", function () {
    qr5.style.display = "none";
    qr6.style.display = "block";
});

reponse6.addEventListener("click", function () {
    qr6.style.display = "none";
    qr7.style.display = "block";
});

reponse7.addEventListener("click", function () {
    qr7.style.display = "none";
    qr8.style.display = "block";
});

reponse8.addEventListener("click", function () {
    qr8.style.display = "none";
});
