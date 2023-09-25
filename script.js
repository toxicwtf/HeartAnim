const body = document.querySelector('body')

body.addEventListener('mousemove', (event) => {
    const spanEl = document.createElement('span')

    spanEl.style.left = event.pageX + 'px'
    spanEl.style.top = event.pageY + 'px'

    const randomesize = Math.random() * 100
    spanEl.style.width = randomesize + 'px'
    spanEl.style.height = randomesize + 'px'

    body.appendChild(spanEl)
    
    setTimeout(() => {
        spanEl.remove()
    }, 2000);
})