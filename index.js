document.addEventListener("DOMContentLoaded", () => {
  let slides = document.getElementsByClassName("mySlides");
  slides[0].style.display = "block";
  document.getElementById("current-slide-info").innerHTML = `
    <span>
      <span>DokiCupid</span>
      <div>
        <a href="http://dokicupid.herokuapp.com">
          <i class="fas fa-external-link-alt"></i>
        </a>
        <a href="https://github.com/alex629lee/DokiCupidApp">
          <i class="fab fa-github"></i>
        </a>
      <div>
    </span>
  `;
})
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  let descriptions = document.getElementsByClassName("project-description");
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  const projectNames = {
    1: {
      name: "DokiCupid",
      live: "http://dokicupid.herokuapp.com",
      repo: "https://github.com/alex629lee/DokiCupidApp"
    },
    2: {
      name: "Yuki's Guitar",
      live: "http://yukisguitar.herokuapp.com",
      repo: "https://github.com/alex629lee/YukisGuitar"
    },
    3: {
      name: "SpotToCry",
      live: "http://spottocry.herokuapp.com",
      repo: "https://github.com/alex629lee/SpotToCry"
    },
    4: {
      name: "Synthagram",
      live: "http://synthagram.herokuapp.com",
      repo: "https://github.com/eliraybon/synthagram"
    },
    5: {
      name: "Netflex",
      live: "http://netflex80s.herokuapp.com",
      repo: "https://github.com/mitchellreiss/netflex"
    }
  }

  slides[slideIndex - 1].style.display = "block";

  let inner = `<span>
    <span>${projectNames[slideIndex].name}</span> 
    <a href=${projectNames[slideIndex].live}><i class="fas fa-external-link-alt"></i></a>
    <a href=${projectNames[slideIndex].repo}><i class="fab fa-github"></i></a>
  </span>`;
  document.getElementById("current-slide-info").innerHTML = inner;
}