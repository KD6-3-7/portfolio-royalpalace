$(function() {
    const del = $(".show-one, .show-two, .show-thr, .show-four, .show-five")
    $(del).hide();

    $("#slideOne").on("click", function() {
        $(del).hide();
        $(".show-one").fadeIn(500);
    });

    $("#slideTwo").on("click", function() {
        $(del).hide();
        $(".show-two").fadeIn(500);
    });

    $("#slideThr").on("click", function() {
        $(del).hide();
        $(".show-thr").fadeIn(500);
    });

    $("#slideFour").on("click", function() {
        $(del).hide();
        $(".show-four").fadeIn(500);
    });

    $("#slideFive").on("click", function() {
        $(del).hide();
        $(".show-five").fadeIn(500);
    });
});