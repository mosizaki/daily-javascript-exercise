const celsinput = document.getElementById('celsius')
const fahrinput = document.getElementById('fahrenheit')
const resetbtn = document.getElementById('reset')
const errorh3 = document.getElementById('error')



let betterValid = (x) => {
    let xnum = Number(x.value)
    console.log(xnum)
    if(Number.isNaN(xnum) || !Number.isFinite(xnum)) {
        return errorh3.textContent= 'Please Enter A Valid Number pipline'
    } else {
        return errorh3.textContent= ''
    }
}

let celToFahr = (x) => {
    return (x * 9/5) + 32
}

let fahrToCel = (x) => {
    return (x - 32) * 5/9
}


celsinput.addEventListener('input', ()=> {
    betterValid(celsinput)
    let celnum = Number(celsinput.value)
    let finalfahr = celToFahr(celnum)
    fahrinput.value = finalfahr
})

fahrinput.addEventListener('input', ()=> {
    betterValid(fahrinput)
    let fahrnum = Number(fahrinput.value)
    let finalcel = fahrToCel(fahrnum)
    celsinput.value = finalcel
})

resetbtn.addEventListener('click', () => {
    celsinput.value = ''
    fahrinput.value = ''
})