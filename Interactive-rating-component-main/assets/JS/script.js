
const ratings = document.querySelectorAll('li')
const submit = document.querySelector('button')
const thanks = document.querySelector('.rating_state_end')
let star

console.log(star);
function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}

ratings.forEach( rating => {
    rating.addEventListener('click', e => {
        star = e.target.value;
        removeActive()
        rating.classList.add('active')
    })
})

function choice() {
    const selected = document.querySelector('.selected')
    if ( star === undefined) {
        alert('You need to choose an option')
        return;
    }
    selected.innerText = `You selected ${star} out of 5`;
    thanks.classList.add('display-show')
}

submit.addEventListener('click', choice)