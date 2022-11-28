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
    // document.querySelector("#modalII").style.display = "flex"
    
    
}
function closeUpcomingEventForm(){
    document.querySelector("#add-upcoming-event-form").style.display = "none"
    document.querySelector("#modalII").style.display = "none"
    

    location.reload()
}
function addModalII() {
  document.querySelector("#modalII").style.display = "flex"
  document.querySelector("#add-upcoming-event-form").style.display = "none"
}