const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector("#navbar");
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});

const sliderss = document.querySelectorAll("#sliders");
let first = 0;

OtomatisSliders();
function OtomatisSliders() {
  for (let i = 0; i < sliderss.length; i++) {
    sliderss[i].style.display = "none";
  }

  if (first >= sliderss.length) {
    first = 0;
  }
  sliderss[first].style.display = "block";
  first++;

  setTimeout(OtomatisSliders, 3000);
}

const slider = document.querySelectorAll("#slide");
let awal = 0;

OtomatisSlide();
function OtomatisSlide() {
  for (let i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
  }

  if (awal >= slider.length) {
    awal = 0;
  }
  slider[awal].style.display = "block";
  awal++;

  setTimeout(OtomatisSlide, 3600);
}

const sliders = document.querySelectorAll("#slider");
let start = 0;

SliderAuto();
function SliderAuto() {
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";
  }

  if (start >= sliders.length) {
    start = 0;
  }
  sliders[start].style.display = "block";
  start++;

  setTimeout(SliderAuto, 4000);
}

window.addEventListener("beforeunload", () => {
  const loading = document.querySelector("#loading");
  loading.style.display = "flex";
});
const button = document.querySelector("#search-button");
button.addEventListener("click", async function () {
  const loading = document.querySelector("#loading");
  loading.style.display = "flex";
  try {
    const input = document.querySelector("#search-input");
    const movies = await GetMovies(input.value);
    UpdateUi(movies);
  } catch {
    alert("Eror");
  } finally {
    loading.style.display = "none";
  }
});
function GetMovies(keyword) {
  return fetch("https://www.omdbapi.com/?apikey=bf016f4a&s=" + keyword).then(
    (response) => response.json().then(response)
  );
}
function GetAllMovies() {
  const allMovies = fetch("./movies-2020s.json").then((success) =>
    success.json().then({ success })
  );
  return allMovies;
}

let jumlahfilmperhalaman = 24;
let halamanaktif = 0;
const totalfilm = 1153;
totalpages = Math.ceil(totalfilm / jumlahfilmperhalaman);

const showAllFilm = async function () {
  const allFilm = await GetAllMovies();
  const next = document.querySelector("#next");
  const prev = document.querySelector("#prev");
  let cards = "";
  const mov = allFilm;
  mov.forEach((m) => (cards += ShowAllCard(m)));
  const container = document.querySelector("#movie-list");
  container.innerHTML = cards;
};

showAllFilm();

function UpdateUi(film) {
  const movi = film;
  let cards = "";
  movi.Search.forEach((m) => (cards += ShowCard(m)));
  const container = document.querySelector("#movie-list");
  container.innerHTML = cards;
}
function ShowCard(m) {
  return `
            <div class="aspect-square border-4 border-teal-600 rounded-md">
              <div class="relative overflow-hidden group">
                <img src="${m.Poster}" alt="" class="w-full mx-auto" />
                  <div class="absolute h-[100%] bottom-0 top-[100%] left-0 right-0 text-white text-center  text-sm bg-gradient-to-t from-black  group transition-all ease-in-out duration-700 group-hover:top-0 ">
                    <div class="absolute bottom-0 top-0 left-0 right-0 flex items-center justify-center transition-all ease-out duration-1000">
                      <a href="${m.videos}" class="">
                      <img src="./icon/play.png" alt="" class="w-14 mx-auto">
                      </a>
                    </div>
                  </div>
              </div>
            </div>`;
}

function ShowAllCard(film) {
  return `
  <div class="aspect-square border-4 border-teal-600 rounded-md">
    <div class="relative overflow-hidden group">
        <img src="${film.thumbnail}" alt="" class="w-full mx-auto" />
      <div class="absolute h-[100%] bottom-0 top-[100%] left-0 right-0 text-white text-center  text-sm bg-gradient-to-t from-black  group transition-all ease-in-out duration-700 group-hover:top-0 ">
        <div class="absolute bottom-0 top-0 left-0 right-0 flex items-center justify-center transition-all ease-out duration-1000">
          <a href="${film.videos}" class="">
            <img src="./icon/play.png" alt="" class="w-14 mx-auto">
          </a>
        </div>
    </div>
    </div>
  </div>`;
}

const username = document.querySelector("#username");
console.log(username.value);
