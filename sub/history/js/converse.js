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