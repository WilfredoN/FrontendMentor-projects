let expEl = document.querySelectorAll('.title');
expEl.forEach(li => {
    li.addEventListener('click', function() {
        this.classList.toggle('open')
    },
    false
    )
});