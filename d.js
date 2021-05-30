var a = document.querySelector(".burger");
var b = document.querySelector(".right");
var c = document.querySelector(".navbar");
var d = document.querySelector(".search");
a.addEventListener('click', () => {
    c.classList.toggle('b');
    b.classList.toggle('a');
    d.classList.toggle('a');
})