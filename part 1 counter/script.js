let count = 0

const numb = document.getElementById('num')
numb.textContent = count

const button = document.getElementById('butt')

const buttondec = document.getElementById('buttdec')

const step = document.getElementById('steps')

const resetbut = document.getElementById('resetbtt')



const disbuthand = () => {
    button.disabled = true;
    buttondec.disabled = true
}

const abebuthand = () => {
    button.disabled = false;
    buttondec.disabled = false
}


disbuthand()


step.addEventListener('input', () => {
let stepnumb = Number(step.value)
if (stepnumb < 1) {
    disbuthand()
} else {
    abebuthand()
}
})


button.addEventListener("click", () => {
    let realnumb = Number(step.value)
    if (realnumb >= 1) 
        count = count + realnumb
    
    numb.textContent = count
})

buttondec.addEventListener("click", () => {
    let realnumb = Number(step.value)
    if (realnumb >= 1) 
        count = count - realnumb
    
    numb.textContent = count
})

resetbut.addEventListener("click", () => {
        count = 0
        numb.textContent = count
        step.value = ""
        disbuthand()
    }
)
