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
readTextFile("../JSON/articles.json", function (text) {
    const data = JSON.parse(text)[0].articles
    function loadArticles(num1, num2) {
        data.slice([num1], [num2]).map((article) => {
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
            const articleHeadline = article.headline
            const articleType = article.articleType
            const articlesWrapper = document.querySelector('.articlesWrapper')

            const headline = 'headline'

            const html = `
                <div class="articleWrapper" id="articleWrapper">
                    <a href="../html/articlePage.html">
                        <span class="darken"></span>
                        <img class="thumbnail" src=${image} alt="">
                    </a>
                    <div class="dateUploaded">${month + `<br>` + day}</div>
                    <div class="headlineWrapper">
                        <a href="#">
                            <h3 class=${headline}>${articleHeadline}</h3>
                        </a> 
                    </div>
                    <div class="articleType">${articleType}</div>
                </div>
                `

            articlesWrapper.innerHTML += html
        })
    }
    loadArticles(0, 40)

    const headline = document.getElementsByClassName('headline').item(1)



    headline.addEventListener("click", () => {
        console.log("hello")
    })
});

