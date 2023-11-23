let question10 = document.getElementById("question_10");
let question11 = document.getElementById("question_11");
let question12 = document.getElementById("question_12");
let question13 = document.getElementById("question_13");
let question14 = document.getElementById("question_14");
let question15 = document.getElementById("question_15");
let question16 = document.getElementById("question_16");
let question17 = document.getElementById("question_17");

let reponse10 = document.getElementById("reponse_10");
let reponse11 = document.getElementById("reponse_11");
let reponse12 = document.getElementById("reponse_12");
let reponse13 = document.getElementById("reponse_13");
let reponse14 = document.getElementById("reponse_14");
let reponse15 = document.getElementById("reponse_15");
let reponse16 = document.getElementById("reponse_16");
let reponse17 = document.getElementById("reponse_17");

let qr10 = document.getElementById("question_reponse10");
let qr11 = document.getElementById("question_reponse11");
let qr12 = document.getElementById("question_reponse12");
let qr13 = document.getElementById("question_reponse13");
let qr14 = document.getElementById("question_reponse14");
let qr15 = document.getElementById("question_reponse15");
let qr16 = document.getElementById("question_reponse16");
let qr17 = document.getElementById("question_reponse17");


reponse10.addEventListener("click", function () {
    qr10.style.display = "none";
    qr11.style.display = "block";
});

reponse11.addEventListener("click", function () {
    qr11.style.display = "none";
    qr12.style.display = "block";
});

reponse12.addEventListener("click", function () {
    qr12.style.display = "none";
    qr13.style.display = "block";
});

reponse13.addEventListener("click", function () {
    qr13.style.display = "none";
    qr14.style.display = "block";
});

reponse14.addEventListener("click", function () {
    qr14.style.display = "none";
    qr15.style.display = "block";
});

reponse15.addEventListener("click", function () {
    qr15.style.display = "none";
    qr16.style.display = "block";
});

reponse16.addEventListener("click", function () {
    qr16.style.display = "none";
});

reponse17.addEventListener("click", function () {
    qr17.style.display = "none";
    qr10.style.display = "block";
});