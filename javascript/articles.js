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
    const articles = JSON.parse(text)[0].articles
    function iterateArticles() {
        for (let i = 0; i < articles.length; i++) {
            let images = articles[i].image
            const articlesWrapper = document.querySelector('.articlesWrapper')
            for (let i = 0; i < images; i++) {
                articlesWrapper.innerHTML = images[i]
            }
        }
    }
    iterateArticles()
})
