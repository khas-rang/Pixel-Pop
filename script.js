let menu = document.querySelector("#menu-icons")
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function(){

    navbar.classList.toggle("active");
});

window.onscroll=()=>{
    navbar.classList.remove("active");
}


const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year:"numeric"
  };

  const d = today.getFullYear();
  document.querySelector(".year").innerHTML= d;



  // document.getElementById('iconButton').addEventListener('click', function() {
  //   prompt('Icon button clicked!');

  // });

  function openNewPage() {
   window.location.href = 'game.html';
   // window.open("game.html") //opens new tabs
  }

