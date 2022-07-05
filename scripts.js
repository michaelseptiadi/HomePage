let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
    showSlides((slideIndex += n))
}

function showSlides(n) {
    let i
    let slides = document.getElementsByClassName("item")
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slides[slideIndex - 1].style.display = "block"
}

function readMore() {
    let dots = document.getElementById("dots")
    let moreText = document.getElementById("more")
    let btn = document.getElementById("btn")

    if (dots.style.display === "none") {
        dots.style.display = "inline"
        btn.innerHTML = "Read more"
        moreText.style.display = "none"
    } else {
        dots.style.display = "none"
        btn.innerHTML = "Read less"
        moreText.style.display = "inline"
    }
}
