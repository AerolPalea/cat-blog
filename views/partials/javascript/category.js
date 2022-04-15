const textContainer = document.querySelector('.textContainer')
const categoriesList = document.querySelectorAll('.categoriesList li a')

textContainer.innerHTML += `<div>All in ""</div>`


function iterateCategories(time) {
    for (let i = 0; i < time; i++) {
        console.log(categoriesList.item([i]).innerHTML)
    }
}

iterateCategories(3)
