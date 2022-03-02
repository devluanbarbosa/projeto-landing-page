$("a.scroll").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        let hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 5000, function () {
            window.location.hash = hash;
        });
    }
});
// $(document).ready(function () {
//     // $(".back-to-top").css("display", "none");
//     console.log($(this).scrollTop());

//     $("body").scroll(function() {
//         console.log($(this).scrollTop());

//             if($(this).scrollTop() >= 0){
//                 $(".back-to-top").css("display", "block");
//             }
//             if($(this).scrollTop() == 0){
//                 $(".back-to-top").css("display", "none");
//             }
//     });
//     $(".back-to-top").click(function() {
//         $("html, body").animate({scrollTop: 0}, 200);
//         });
// });