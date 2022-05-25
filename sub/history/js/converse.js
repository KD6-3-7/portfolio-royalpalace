// window.onload = function() {

//     const clickOne = document.getElementById("clickOne");
//     const clickTwo = document.getElementById("clickTwo");
//     const clickThr = document.getElementById("clickThr");
//     const clickFour = document.getElementById("clickFour");
//     const clickFive = document.getElementById("clickFive");
    
//     const showOne = document.querySelector(".show-one");
//     const showTwo = document.querySelector(".show-two");
//     const showThr = document.querySelector(".show-thr");
//     const showFour = document.querySelector(".show-four");
//     const showFive = document.querySelector(".show-five");

//     clickOne.addEventListener("click", function(){
//         showOne.style.display = "block";
//     });

//     clickTwo.addEventListener("click", function(){
//         showTwo.style.display = "block";
//     });

//     clickThr.addEventListener("click", function(){
//         showThr.style.display = "block";
//     });

//     clickFour.addEventListener("click", function(){
//         showFour.style.display = "block";
//     });

//     clickFive.addEventListener("click", function(){
//         showFive.style.display = "block";
//     });
// }

$(function() {
    const del = $(".show-one, .show-two, .show-thr, .show-four, .show-five")

    $("#clickOne").on("click", function() {
        $(del).hide();
        $(".show-one").fadeIn(500);
    });

    $("#clickTwo").on("click", function() {
        $(del).hide();
        $(".show-two").fadeIn(500);
    });

    $("#clickThr").on("click", function() {
        $(del).hide();
        $(".show-thr").fadeIn(500);
    });

    $("#clickFour").on("click", function() {
        $(del).hide();
        $(".show-four").fadeIn(500);
    });

    $("#clickFive").on("click", function() {
        $(del).hide();
        $(".show-five").fadeIn(500);
    });
    $(del).hide();
});