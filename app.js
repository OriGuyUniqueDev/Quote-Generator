const btn = document.querySelector("#btn")
let quoteText = document.querySelector("#quoteGenerator");
let authorText = document.querySelector("#author");
let loaderAnimation = document.querySelector("#loaderAnimation");
let mainContainer = document.querySelector("#mainContainer");
let share = document.querySelector("#share");
let textAreaArray = [quoteText,authorText];

let updateSite = (data) => {
    quoteText.innerText = data[0].quote
    authorText.innerText = data[0].author
    stop()
}
let getQuoteFromApi = () => {
    start()
    fetch("https://api.breakingbadquotes.xyz/v1/quotes").then(response => response.json()).then(data =>updateSite(data))

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
        href: 'https://unique-quote-generator.netlify.app/',
      }, function(response){
          console.log(response)
      })
})

stop()