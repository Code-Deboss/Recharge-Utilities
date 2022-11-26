/** @format */


const resizeArrow = document.querySelector(".resize-icon");

const sideBar = document.querySelector(".hero-left");

resizeArrow.addEventListener("click", () => {
	sideBar.classList.contains("increase-bar")
		? sideBar.classList.remove("increase-bar")
		: sideBar.classList.add("increase-bar");
});

// for the display bar to show
const showCard = document.querySelector(".toggle");

const card = document.querySelector(".phone-card");

showCard.addEventListener("click", () => {
	card.classList.toggle("display-card");
});

// function toggle() {
// 	var blur = document.getElementById("blur");
// 	blur.classList.toggle("active");
// 	// var modal = document.getElementsById("modal");
// 	// modal.classList.toggle("active");
// }
function addUpcomingEventForm(){
    document.querySelector("#add-upcoming-event-form").style.display = "flex"
}
function closeUpcomingEventForm(){
    document.querySelector("#add-upcoming-event-form").style.display = "none"
    document.querySelector("#edit-upcoming-event-form").style.display = "none"

    location.reload()
}
function showinfo(x){
    var element = document.getElementById("toggle");
    element.classList.toggle("menushow");
    var x = document.getElementById("switch2");
    if (x.innerHTML === "keyboard_double_arrow_right") {
      x.innerHTML = "keyboard_double_arrow_left";
      x.style.color = "rgb(181, 181, 181)"
    } else {
      x.innerHTML = "keyboard_double_arrow_right";
      x.style.color = "rgb(5, 0, 58)"
    }
}