var typed = new Typed(".auto-type", {
    strings: ['Learner', 'Designer', 'Developer'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }
    })
}
