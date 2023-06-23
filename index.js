const projectNames = {
  1: {
    name: "owoticon",
    live: "https://apps.apple.com/us/app/owoticon/id1500103502",
    repo: "https://github.com/alexhlee6/owoticon",
    technologies: "React Native, Redux, Expo",
    description: "A simple IOS/Android application where users can quickly find cute emoticon text faces to use in conversations."
  },
  2: {
    name: "DokiCupid",
    live: "https://dokicupid.herokuapp.com",
    repo: "https://github.com/alexhlee6/DokiCupidApp",
    technologies: "React-Redux, Ruby on Rails, Postgres, AWS, WebSockets, AJAX",
    description: "Anime-inspired dating app based on OkCupid featuring profiles, matchmaking, filtered search, and real-time chat."
  },
  3: {
    name: "Yuki's Guitar",
    live: "https://yukisguitar-c8ecb0e21612.herokuapp.com/",
    repo: "https://github.com/alexhlee6/YukisGuitar",
    technologies: "JavaScript, React, Canvas, jQuery, MongoDB, Express",
    description: "Responsive music rhythm game similar to Guitar Hero where players score points by clicking buttons to the timing of the music."
  },
  4: {
    name: "SpotToCry",
    live: "https://spottocry.herokuapp.com",
    repo: "https://github.com/alexhlee6/SpotToCry",
    technologies: "JavaScript, React, Apollo, GraphQL, MongoDB, Node.js, Express",
    description: "Music streaming web application based on Spotify where users can ride out their melancholic moods."
  },
  5: {
    name: "Netflex",
    live: "https://netflex80s.herokuapp.com",
    repo: "https://github.com/mitchellreiss/netflex",
    technologies: "React, Redux, Node.js, Express, MongoDB, BCrypt, Validator",
    description: "Retro workout-themed video streaming service based on Netflix for tubular time travelers to get movin' and groovin'."
  },
  6: {
    name: "Synthagram",
    live: "https://synthagram.herokuapp.com",
    repo: "https://github.com/eliraybon/synthagram",
    technologies: "React, Node, MongoDB, Express, GraphQL, Apollo, HTML, CSS",
    description: "Music-themed mobile-first photo sharing application based on Instagram."
  },
}

document.addEventListener("DOMContentLoaded", () => {
  let slides = document.getElementsByClassName("mySlides");
  slides[0].style.display = "block";
  document.getElementById("current-slide-info").innerHTML = `
    <span>
      <h2>owoticon</h2>
      <h2>
        <a href="https://apps.apple.com/us/app/owoticon/id1500103502" target="_blank">
          <i class="fas fa-external-link-alt"></i>
        </a>
        <a href="https://github.com/alexhlee6/owoticon">
          <i class="fab fa-github"></i>
        </a>
      </h2>
    </span>
  `;
  document.getElementById("current-slide-description").innerHTML = `
    <p><i>${projectNames[1].technologies}</i></p>
    <p>${projectNames[1].description}</p>
  `;
  document.addEventListener("keydown", (e) => {
    // left: 37, right: 39
    if (e.keyCode === 37) {
      plusSlides(-1);
    } else if (e.keyCode === 39) {
      plusSlides(1);
    }
  });
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
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  if (slides[slideIndex-1]) {
    slides[slideIndex - 1].style.display = "block";

    let inner = `<span>
      <h2>${projectNames[slideIndex].name.toUpperCase()}</h2> 
      <h2>
      <a href=${projectNames[slideIndex].live} target="_blank"><i class="fas fa-external-link-alt"></i></a>
      <a href=${projectNames[slideIndex].repo}><i class="fab fa-github"></i></a>
      </div>
    </h2>`;
    document.getElementById("current-slide-info").innerHTML = inner;

    document.getElementById("current-slide-description").innerHTML = `
      <p><i>${projectNames[slideIndex].technologies}</i></p>
      <p>${projectNames[slideIndex].description}</p>
    `;
  }
}