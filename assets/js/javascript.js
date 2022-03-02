$("a.scroll").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        let hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 5000, function() {
            window.location.hash = hash;
        });
    }
});
$(document).ready(function () {
    $(".back-to-top").css("display", "none");
$("body").scroll(function() {
    if($(this).scrollTop() == 0){
        $(".back-to-top").css("display", "none");
    } else {
        $(".back-to-top").css("display", "block");
    }
    });
$(".back-to-top").click(function() {
    $("html, body").animate({scrollTop: 0}, 800);
    });
});

$("body").scroll(function() {
    if($(this).scrollTop() == 0){
    $(".back-to-top").css("display", "none");
    } else {
    $(".back-to-top").css("display", "block");
    }
});