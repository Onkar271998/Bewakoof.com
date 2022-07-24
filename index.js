document.querySelector(".midleft").addEventListener("click", frwdToMen);
function frwdToMen() {
  window.location.href = "/menPage.html"; // change link as per their need...
}
document.querySelector(".midright").addEventListener("click", frwdToWomen);

function frwdToWomen() {
  window.location.href = "womenPage.html"; //// change link as per their need...
}

document.querySelector("#searchIcon").addEventListener("click", formd);
function formd() {
  //console.log("inside")
  //write remaining function as per their need..
  console.log(document.querySelector("#search").value);
}

// document.querySelector(".p-logo").addEventListener("click", goToHome);

// function goToHome() {
//   window.location.href = "./index.html";
// }
