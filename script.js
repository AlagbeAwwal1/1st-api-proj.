const button = document.querySelector('.dice')
const title = document.querySelector('.title')
const body = document.querySelector('.content')



button.addEventListener('click', loadAdvice);
window.addEventListener('load',loadAdvice)


function loadAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then((res)=>res.json())
    .then((advice)=>{
        title.innerHTML = `ADVICE #${advice.slip.id}`
        body.innerHTML  = `${advice.slip.advice}`
    })
}