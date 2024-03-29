
const btn = document.querySelector("#btn");
let quoteText = document.querySelector("#quoteGenerator");
let authorText = document.querySelector("#author");
let loaderAnimation = document.querySelector("#loaderAnimation");
let mainContainer = document.querySelector("#mainContainer");
let share = document.querySelector("#share");
let yearGrabber = document.querySelector("#year");
let textAreaArray = [quoteText, authorText];
let year = new Date().getFullYear()

let updateSite = (data) => {
  quoteText.innerText = data[0].quote;
  authorText.innerText = data[0].author;
  stop();
};
let getQuoteFromApi = () => {
  start();
  fetch("https://api.breakingbadquotes.xyz/v1/quotes")
    .then((response) => response.json())
    .then((data) => updateSite(data)).catch(err => alert("The Service is Currently Unavailable 😔"));
};
function start() {
  loaderAnimation.style.display = "block";
  mainContainer.style.opacity = 0;
}
function stop() {
  loaderAnimation.style.display = "none";
  mainContainer.style.opacity = 1;
}
btn.addEventListener("click", getQuoteFromApi);
share.addEventListener("click", () => {
  FB.ui(
    {
      display: "popup",
      method: "share",
      href: "https://unique-quote-generator.netlify.app/",
    },
    function (response) {
      console.log(response);
    }
  );
});
yearGrabber.innerText = year

setTimeout(() => {
  stop();
}, 1500);

