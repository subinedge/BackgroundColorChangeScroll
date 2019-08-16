function bgChange() {
    // console.log(this.scrollY);
    if (this.scrollY > this.innerHeight / 2) {
        document.body.classList.add('bg-change');
    } else {
        document.body.classList.remove('bg-change');
    }
}

window.addEventListener('scroll', bgChange);