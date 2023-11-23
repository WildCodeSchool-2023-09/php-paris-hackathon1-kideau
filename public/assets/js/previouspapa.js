let qrr10 = document.getElementById("question_reponse10");
let qrr11 = document.getElementById("question_reponse11");
let qrr12 = document.getElementById("question_reponse12");
let qrr13 = document.getElementById("question_reponse13");
let qrr14 = document.getElementById("question_reponse14");
let qrr15 = document.getElementById("question_reponse15");
let qrr16 = document.getElementById("question_reponse16");

let back10 = document.getElementById("back_10");
let back11 = document.getElementById("back_11");
let back12 = document.getElementById("back_12");
let back13 = document.getElementById("back_13");
let back14 = document.getElementById("back_14");
let back15 = document.getElementById("back_15");
let back16 = document.getElementById("back_16");


back11.addEventListener("click", function () {
    qrr11.style.display = "none";
    qrr10.style.display = "block";
});

back12.addEventListener("click", function () {
    qrr12.style.display = "none";
    qrr11.style.display = "block";
});

back13.addEventListener("click", function () {
    qrr13.style.display = "none";
    qrr12.style.display = "block";
});

back14.addEventListener("click", function () {
    qrr14.style.display = "none";
    qrr13.style.display = "block";
});

back15.addEventListener("click", function () {
    qrr15.style.display = "none";
    qrr14.style.display = "block";
});

back16.addEventListener("click", function () {
    qrr16.style.display = "none";
    qrr15.style.display = "block";
});