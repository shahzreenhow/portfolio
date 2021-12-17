var openSideBar = document.getElementById("open");
var sideBarDiv = document.getElementById("sidebar")
var closeSideBar = document.getElementById("close")
var nightMode = document.getElementById("nightmode");
// var container = document.getElementById("container");
// var pEle = document.querySelector("body")

openSideBar.addEventListener("click", open);
closeSideBar.addEventListener("click", close);
nightMode.addEventListener("click", dark);

function open() {
    sideBarDiv.style.display = "inline"
}

function close() {
    sideBarDiv.style.display = "none"
}

// function dark() {
//     container.style.backgroundColor = "#064663";
//     container.style.color = "white";
//     pEle.style.color = "white";
// }

