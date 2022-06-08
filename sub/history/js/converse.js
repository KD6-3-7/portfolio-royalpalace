$(function() {
    const hideImage = $(".show-one, .show-two, .show-thr, .show-four, .show-five")
    $(hideImage).hide();

    $("#slideOne").on("click", function() {
        $(hideImage).hide();
        $(".show-one").fadeIn(500);
    });

    $("#slideTwo").on("click", function() {
        $(hideImage).hide();
        $(".show-two").fadeIn(500);
    });

    $("#slideThr").on("click", function() {
        $(hideImage).hide();
        $(".show-thr").fadeIn(500);
    });

    $("#slideFour").on("click", function() {
        $(hideImage).hide();
        $(".show-four").fadeIn(500);
    });

    $("#slideFive").on("click", function() {
        $(hideImage).hide();
        $(".show-five").fadeIn(500);
    });
});