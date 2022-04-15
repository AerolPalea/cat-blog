// Network request to load JSON data
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
const stateWrapper = document.querySelectorAll('.state')
readTextFile("../JSON/catfes.json", function (text) {
    let data = JSON.parse(text)[0].catfes
    data.slice([0], [40]).map((catfe) => {
        const image = catfe.image
        const cafeName = catfe.cafeName
        const streetNumber = catfe.streetNumber
        const city = catfe.city
        let state = catfe.state.toUpperCase()
        const zip = catfe.zip
        const partnerRescue = catfe.partnerRescue
        const admissionCost = catfe.admissionCost
        const hours = catfe.hours
        const reservationReq = catfe.reservationReq


        html = `
        <div class="catfe">
        <div class="leftSideCatfe">
            <img src="${image}" alt="" width="220px">
            <div class="cafeDetails">
                <div class="cafeName">${cafeName}</div>
                <p>${streetNumber} <br>${city},<br>${state + " " + zip}</p>
            </div>
        </div>
        <div class="rightSideCatfe">
            <p><b>Address:</b>${streetNumber}, ${city, state, zip}</p>
            <p><b>Partner Rescue:</b> <a href="">${partnerRescue}</a></p>
            <p><b>Cost of Adult Admission:</b>${admissionCost}</p>
            <p><b>Hours:</b> Mon-Tues CLOSED; All other days ${hours}</p>
            <p><b>Reservations required? </b>${reservationReq}</p>
            <button><a href="">Website</a></button>
        </div>
        </div>`

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }


        stateWrapper.forEach((arg) => {
            if (arg.innerText == state) {
                state = capitalizeFirstLetter(state)
                arg.innerHTML += html
            }
        })
    })
})


