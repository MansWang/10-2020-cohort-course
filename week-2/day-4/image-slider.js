
var imgindex = 1;
function plusSlides(n) {
    showimg(imgindex += n);
}
function currentSlide(n) {
    showimg(imgindex = n);
}
function showimg(n) {
    var i;
    var slides = document.getElementsByClassName("slide")
    var dots = document.getElementsByClassName("dot")
    if (n > slides.length) {
        imgindex = 1;
    }
    if (n < 1) {
        imgindex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[imgindex - 1].style.display = "flex";
    dots[imgindex-1].className += " active";
}