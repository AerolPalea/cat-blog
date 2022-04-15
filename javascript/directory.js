let usStates = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]


const byState = document.querySelector('.byState')

function getStates() {
    usStates.forEach(function run(state) {
        const byState = document.querySelector('.byState')
        // byState.innerHTML += "<div class=" + state + ">" + "<div class='state'>" + state + "</div>" + "</div>"
        byState.innerHTML += `<div class='state'><div class='${state} currentState'>${state}</div></div>`
    })
}

getStates()

// const Arizona = document.querySelector('.Arizona')

// Arizona.innerHTML += `
// <div class="catfe">
// <div class="businessCard">
//     <img src="https://images.squarespace-cdn.com/content/v1/58e534c52e69cfd83dc862d9/1502212538759-LNBLPXREFEFMYEQIZDDP/la-gattara-cat-cafe-tempe-arizona?format=750w" alt="" width="220">
//     <div class="cafeDetails">
//         <div class="cafeName">La Gattara Cat Cafe</div>
//         <p>1301 East University</p>
//         <p>Suite 136</p>
//         <p>Tempe, AZ 85281</p>
//     </div>
// </div>
// <div class="addInfo">
//     <p><b>Address:</b> 1301 East University, Suite 136, Tempe AZ 85281</p>
//     <p><b>Partner Rescue:</b> <a href="">Lost Our Home Pet Rescue</a></p>
//     <p><b>Cost of Adult Admission:</b> $10 for 1 hour</p>
//     <p><b>Hours:</b> Mon-Tues CLOSED; All other days 11am-10pm</p>
//     <p><b>Reservations required? </b>recommended</p>
//     <button><a href="">Website</a></button>
// </div>
// </div>`
