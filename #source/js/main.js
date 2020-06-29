// ==========menu hamburger============

let but = document.querySelector(' .menu-hamburger');
let con = document.querySelector(' .navigation');

but.addEventListener('click', function () {
    this.classList.toggle('active-mobil-menu');
    con.classList.toggle('active-menu')
});



