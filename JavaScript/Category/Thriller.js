//JavaScript

let OS = navigator.userAgent || navigator.vendor || window.opera;
let ReadButton = document.getElementById("Read-Button");

function _112263() {
  openDescription(
    "11.22.63",
    "/Book-Cover/Thriller/11.22.63-Book-Cover.webp",
    "Stephen King",
    "2011",
    "717",
    "Science Fiction, Thriller"
  );
  ReadButton.setAttribute("href", "/Books/Thriller/11.22.63.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1AGiD-F5YMLt_mIPiho4CelvMVOZNlci8/view?usp=sharing"
    );
  }
}

function CrimeandPunishment() {
  openDescription(
    "Crime and Punishment",
    "/Book-Cover/Thriller/Crime-and-Punishment-Book-Cover.webp",
    "Fyodor Dostoevsky",
    "1866",
    "490",
    "Thriller, Fiction"
  );
  ReadButton.setAttribute("href", "/Books/Thriller/Crime and Punishment.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1-quBqLAUzr2UaVeHYa7986ivDRzYYRoN/view?usp=sharing"
    );
  }
}

function DarkMatter() {
  openDescription(
    "Dark Matter",
    "/Book-Cover/Thriller/Dark-Matter-Book-Cover.webp",
    "Blake Crouch",
    "2016",
    "303",
    "Science Fiction, Thriller"
  );
  ReadButton.setAttribute("href", "/Books/Thriller/Dark Matter.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/19bo7ZzPjaZ055IHCxIuxKEt8ikhIhJTj/view?usp=sharing"
    );
  }
}

function Misery() {
  openDescription(
    "Misery",
    "/Book-Cover/Thriller/Misery-Book-Cover.webp",
    "Stephen King",
    "1987",
    "311",
    "Psychological horror, Thriller"
  );
  ReadButton.setAttribute("href", "/Books/Thriller/Misery.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1b1fdzh0n2LFi-DhD2vrKeC1-JewnxT_D/view?usp=sharing"
    );
  }
}

function StrangersonaTrain() {
  openDescription(
    "Strangers on a Train",
    "/Book-Cover/Thriller/Strangers-on-a-Train-Book-Cover.webp",
    "Patricia Highsmith",
    "1950",
    "327",
    "Thriller"
  );
  ReadButton.setAttribute("href", "/Books/Thriller/Strangers on a Train.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1Yj4ofQyL4tqMXk7PDMj2FRQ6UnIox37y/view?usp=sharing"
    );
  }
}

function HelterSkelter() {
  openDescription(
    "Helter Skelter",
    "/Book-Cover/Thriller/Helter-Skelter-Book-Cover.webp",
    "Curt Gentry and Vincent Bugliosi",
    "1974",
    "733",
    "Crime, Thriller, Nonfiction"
  );
  ReadButton.setAttribute("href", "/Books/Thriller/Helter Skelter.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/17drdwbOYrz1fSi2xILJW0rYpWPC865UD/view?usp=sharing"
    );
  }
}

function openDescription(
  Title,
  BookCover,
  Author,
  PublicationDate,
  Pages,
  Genre
) {
  document.getElementById("Book-Description").style.width = "100%";
  document.getElementById("Book-Title").innerHTML = Title;
  document.getElementById("Book-Cover").setAttribute("src", BookCover);
  document.getElementById("Author").innerHTML = Author;
  document.getElementById("Publication-Date").innerHTML = PublicationDate;
  document.getElementById("Pages").innerHTML = Pages;
  document.getElementById("Genre").innerHTML = Genre;
}

function closeDescription() {
  document.getElementById("Book-Description").style.width = "0%";
}

class ThrillerBooks extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <!-- 1st Book Row -->
          <div class="Book-Row">
              <!-- 11.22.63 -->
              <a href="javascript:void(0)" onclick="_112263()">
                  <img
                  class="First-Book"
                  src="/Book-Cover/Thriller/11.22.63-Book-Cover.webp"
                  alt="11.22.63"
                  loading="lazy"
                  />
              </a>
              <!-- Crime and Punishment -->
              <a href="javascript:void(0)" onclick="CrimeandPunishment()">
                  <img
                  class="Second-Book"
                  src="/Book-Cover/Thriller/Crime-and-Punishment-Book-Cover.webp"
                  alt="Crime and Punishment"
                  loading="lazy"
                  />
              </a>
              </div>
              <!-- 2nd Book Row -->
              <div class="Book-Row">
              <!-- Dark Matter -->
              <a href="javascript:void(0)" onclick="DarkMatter()">
                  <img
                  class="First-Book"
                  src="/Book-Cover/Thriller/Dark-Matter-Book-Cover.webp"
                  alt="Dark Matter"
                  loading="lazy"
                  />
              </a>
              <!-- Misery -->
              <a href="javascript:void(0)" onclick="Misery()">
                  <img
                  class="Second-Book"
                  src="/Book-Cover/Thriller/Misery-Book-Cover.webp"
                  alt="Misery"
                  loading="lazy"
                  />
              </a>
              </div>
              <!-- 3rd Book Row -->
              <div class="Book-Row">
              <!-- Strangers on a Train -->
              <a href="javascript:void(0)" onclick="StrangersonaTrain()">
                  <img
                  class="First-Book"
                  src="/Book-Cover/Thriller/Strangers-on-a-Train-Book-Cover.webp"
                  alt="Strangers on a Train"
                  loading="lazy"
                  />
              </a>
              <!-- Helter Skelter -->
              <a href="javascript:void(0)" onclick="HelterSkelter()">
                  <img
                  class="Second-Book"
                  src="/Book-Cover/Thriller/Helter-Skelter-Book-Cover.webp"
                  alt="Helter Skelter"
                  loading="lazy"
                  />
              </a>
          </div>
      `;
  }
}

customElements.define("import-thriller-books", ThrillerBooks);
