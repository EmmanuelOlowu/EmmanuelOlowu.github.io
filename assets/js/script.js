function reveal() {
    var animation = document.querySelectorAll(".animated");

    for (var i = 0; i < animation.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = animation[i].getBoundingClientRect().top;
        var elementVisible = 130;

        if (elementTop < windowHeight - elementVisible) {
            animation[i].classList.add("reveal");
        }
    }
}

window.addEventListener("scroll", reveal);