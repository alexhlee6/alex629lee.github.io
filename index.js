const projectNames = {
  1: {
    name: "DokiCupid",
    live: "http://dokicupid.herokuapp.com",
    repo: "https://github.com/alex629lee/DokiCupidApp",
    technologies: "React-Redux, Ruby on Rails, Postgres, AWS, WebSockets, AJAX",
    description: "Anime-inspired dating app based on OkCupid featuring profiles, matchmaking, filtered search, and real-time chat."
  },
  2: {
    name: "Yuki's Guitar",
    live: "http://yukisguitar.herokuapp.com",
    repo: "https://github.com/alex629lee/YukisGuitar",
    technologies: "JavaScript, React, Canvas, jQuery, MongoDB, Express",
    description: "Responsive music rhythm game similar to Guitar Hero where players score points by clicking buttons to the timing of the music."
  },
  3: {
    name: "SpotToCry",
    live: "http://spottocry.herokuapp.com",
    repo: "https://github.com/alex629lee/SpotToCry",
    technologies: "JavaScript, React, Apollo, GraphQL, MongoDB, Node.js, Express",
    description: "Music streaming web application based on Spotify where users can ride out their melancholic moods."
  },
  // 4: {
  //   name: "Synthagram",
  //   live: "http://synthagram.herokuapp.com",
  //   repo: "https://github.com/eliraybon/synthagram",
  //   technologies: "",
  //   description: ""
  // },
  4: {
    name: "Netflex",
    live: "http://netflex80s.herokuapp.com",
    repo: "https://github.com/mitchellreiss/netflex",
    technologies: "React, Redux, Node.js, Express, MongoDB, BCrypt, Validator",
    description: "Retro workout-themed video streaming service based on Netflix for tubular time travelers to get movin' and groovin'."
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let slides = document.getElementsByClassName("mySlides");
  slides[0].style.display = "block";
  document.getElementById("current-slide-info").innerHTML = `
    <span>
      <h2>DOKICUPID</h2>
      <h2>
        <a href="http://dokicupid.herokuapp.com">
          <i class="fas fa-external-link-alt"></i>
        </a>
        <a href="https://github.com/alex629lee/DokiCupidApp">
          <i class="fab fa-github"></i>
        </a>
      </h2>
    </span>
  `;
  document.getElementById("current-slide-description").innerHTML = `
    <p><i>${projectNames[1].technologies}</i></p>
    <p>${projectNames[1].description}</p>
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

  slides[slideIndex - 1].style.display = "block";

  let inner = `<span>
    <h2>${projectNames[slideIndex].name.toUpperCase()}</h2> 
    <h2>
    <a href=${projectNames[slideIndex].live}><i class="fas fa-external-link-alt"></i></a>
    <a href=${projectNames[slideIndex].repo}><i class="fab fa-github"></i></a>
    </div>
  </h2>`;
  document.getElementById("current-slide-info").innerHTML = inner;

  document.getElementById("current-slide-description").innerHTML = `
    <p><i>${projectNames[slideIndex].technologies}</i></p>
    <p>${projectNames[slideIndex].description}</p>
  `;
}