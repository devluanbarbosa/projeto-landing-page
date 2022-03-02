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

window.onscroll = function(){
    scroll();
}

function scroll(){
    var btn = document.getElementById("btnTop");
    if(document.documentElement.scrollTop > 400) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}