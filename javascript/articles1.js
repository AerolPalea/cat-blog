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
readTextFile("../MOCK_DATA.json", function (text) {
    const data = JSON.parse(text)[0].articles
    const article = data[data.length - 1]
    const image = article.image
    const date = article.date

    // Checks if month has 1 or 2 digits in JSON file date
    function month1or2Digits() {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        if (date[1] == "/") {
            const month = date[0]
            return monthNames[month - 1]
        } else if (date[2] == "/") {
            const month = date[0] + date[1]
            return monthNames[month - 1]
        }
    }

    const month = month1or2Digits()

    // Checks if day has 1 or 2 digits in JSON file date
    function day1or2Digits() {
        if (date[1] == "/" && date[3] == "/") {
            const day = date[2]
            return day
        } else if (date[1] == "/" && date[4] == "/") {
            const day = date[2] + date[3]
            return day
        } else if (date[2] == "/" && date[5] == "/") {
            const day = date[3] + date[4]
            return day
        } else if (date[2] == '/' && date[4] == "/") {
            const day = date[3]
            return day
        }
    }

    const day = day1or2Digits()
    const headline = article.headline
    const articleType = article.articleType
    const articlesWrapper = document.querySelector('.articlesWrapper')
    function iterateNumber() {
        for (let i = 0; i <= data.length; i++) {
            data
        }
    }
    const html = `
            <div class="articleWrapper" id="articleWrapper">
            <a href="">
                <span class="darken"></span>
                <img class="thumbnail" src=${image} alt="">
            </a>
            <div class="dateUploaded">${month + `<br>` + day}</div>
            <div class="headlineWrapper">
                <a href="">
                    <h3 class="headline">${headline}</h3>
                </a> 
            </div>
            <div class="articleType">${articleType}</div>
            </div>
            `

    function iterate() {
        articlesWrapper.innerHTML += html
    }
    for (let i = 0; i <= 10; i++) {
        iterate()
    }
});



// data.forEach((item, index, array) => {
//     let article = 'data[' + index + ']'
//     console.log(article)
// })
