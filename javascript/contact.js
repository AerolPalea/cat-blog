let names = []

const addName = (e) => {
    e.preventDefault()
    let name = {
        id: Date.now(),
        name: {
            first_name: document.getElementById('fname').value,
            last_name: document.getElementById('lname').value
        }
    }
    names.push(name)
    document.forms[0].reset()

    console.log('added', { names })


}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitButton').addEventListener('click', addName)
})

