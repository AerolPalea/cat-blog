let usStates = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]


const byState = document.querySelector('.byState')
console.log(byState)

usStates.map((state) => {
    console.log(usStates.indexOf(state))
})

function getStates() {
    usStates.forEach(function run(state) {
        const byState = document.querySelector('.byState')
        byState.innerHTML += "<div class='state'>" + state + "</div>"
    })
}

getStates()
