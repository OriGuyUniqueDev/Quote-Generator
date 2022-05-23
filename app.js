const btn = document.querySelector("#btn")
let quoteText = document.querySelector("#quoteGenerator");
let authorText = document.querySelector("#author");
let loaderAnimation = document.querySelector("#loaderAnimation");
let mainContainer = document.querySelector("#mainContainer");
let share = document.querySelector("#share");
let textAreaArray = [quoteText,authorText];

let updateSite = (data) => {
    quoteText.innerText = data.quotes[0].text
    authorText.innerText = data.quotes[0].author
    stop()
}
let getQuoteFromApi = () => {
    start()
    fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1").then(response => response.json()).then(data =>updateSite(data))

}
function start() {
    loaderAnimation.style.visibility = "visible"
    mainContainer.style.visibility = "hidden"
}
function stop() {
    loaderAnimation.style.visibility = "hidden"
    mainContainer.style.visibility = "visible"
}
btn.addEventListener("click",getQuoteFromApi)
share.addEventListener("click", () => {
    FB.ui({
        display: 'popup',
        method: 'share',
        href: 'http://127.0.0.1:5501/index.html',
      }, function(response){
          console.log(response)
      })
})

stop() 