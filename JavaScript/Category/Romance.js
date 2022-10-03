//JavaScript

class RomanceBooks extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <!-- 1st Book Row -->
        <div class="Book-Row">
          <!-- The Fault in our Stars -->
          <a href="javascript:void(0)" onclick="TheFaultinourStars()">
            <img
              class="First-Book"
              src="/Book-Cover/Romance/The-Fault-in-our-Stars-Book-Cover.webp"
              alt="The Fault in our Stars"
            />
          </a>
          <!-- Book Lovers -->
          <a href="javascript:void(0)" onclick="BookLovers()">
            <img
              class="Second-Book"
              src="/Book-Cover/Romance/Book-Lovers-Book-Cover.webp"
              alt="Book Lovers"
            />
          </a>
        </div>
        <!-- 2nd Book Row -->
        <div class="Book-Row">
          <!-- Pride and Prejudice -->
          <a href="javascript:void(0)" onclick="PrideandPrejudice()">
            <img
              class="First-Book"
              src="/Book-Cover/Romance/Pride-and-Prejudice-Book-Cover.webp"
              alt="Pride and Prejudice"
            />
          </a>
          <!-- Jane Eyre -->
          <a href="javascript:void(0)" onclick="JaneEyre()">
            <img
              class="Second-Book"
              src="/Book-Cover/Romance/Jane-Eyre-Book-Cover.webp"
              alt="Jane Eyre"
            />
          </a>
        </div>
        <!-- 3rd Book Row -->
        <div class="Book-Row">
          <!-- Emma -->
          <a href="javascript:void(0)" onclick="Emma()">
            <img
              class="First-Book"
              src="/Book-Cover/Romance/Emma-Book-Cover.webp"
              alt="Emma"
            />
          </a>
          <!-- The Phantom of the Opera -->
          <a href="javascript:void(0)" onclick="ThePhantomoftheOpera()">
            <img
              class="Second-Book"
              src="/Book-Cover/Romance/The-Phantom-of-the-Opera-Book-Cover.webp"
              alt="The Phantom of the Opera"
            />
          </a>
        </div>
    `;
  }
}

customElements.define("import-romance-books", RomanceBooks);

let OS = navigator.userAgent || navigator.vendor || window.opera;
let ReadButton = document.getElementById("Read-Button");

function TheFaultinourStars() {
  openDescription(
    "The Fault in our Stars",
    "/Book-Cover/Romance/The-Fault-in-our-Stars-Book-Cover.webp",
    "John Green",
    "2012",
    "201",
    "Romance"
  );
  ReadButton.setAttribute("href", "/Books/Romance/The Fault in our Stars.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1G_8MqG336GJsEmIozWzoOo0_oXt7h9Z9/view?usp=sharing"
    );
  }
}

function BookLovers() {
  openDescription(
    "Book Lovers",
    "/Book-Cover/Romance/Book-Lovers-Book-Cover.webp",
    "Emily Henry",
    "2022",
    "346",
    "Romance"
  );
  ReadButton.setAttribute("href", "/Books/Romance/Book Lovers.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1xqUl_cS4oX3Mt2XQxEApZOtMwMcJhOgD/view?usp=sharing"
    );
  }
}

function PrideandPrejudice() {
  openDescription(
    "Pride and Prejudice",
    "/Book-Cover/Romance/Pride-and-Prejudice-Book-Cover.webp",
    "Jane Austen",
    "1813",
    "315",
    "Classics, Fiction, Romance"
  );
  ReadButton.setAttribute("href", "/Books/Romance/Pride and Prejudice.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1UyoE-3UmPNCMWAnZSzSmiVdd3rBw6evf/view?usp=sharing"
    );
  }
}

function JaneEyre() {
  openDescription(
    "Jane Eyre",
    "/Book-Cover/Romance/Jane-Eyre-Book-Cover.webp",
    "Charlotte Brontë",
    "1847",
    "508",
    "Classics, Romance, Fiction"
  );
  ReadButton.setAttribute("href", "/Books/Romance/Jane Eyre.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1DT8dG4WwhJL7h6gYDaj7z3lIbn06NpA7/view?usp=sharing"
    );
  }
}

function Emma() {
  openDescription(
    "Emma",
    "/Book-Cover/Romance/Emma-Book-Cover.webp",
    "Jane Austen",
    "1815",
    "381",
    "Romance, Classics"
  );
  ReadButton.setAttribute("href", "/Books/Romance/Emma.pdf");

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1lnCwnva5xiKtYmI2lk9aq5CbgO_WM7_f/view?usp=sharing"
    );
  }
}

function ThePhantomoftheOpera() {
  openDescription(
    "The Phantom of the<br>Opera",
    "/Book-Cover/Romance/The-Phantom-of-the-Opera-Book-Cover.webp",
    "Gaston Leroux",
    "1909",
    "255",
    "Horror, Fiction, Romance"
  );
  ReadButton.setAttribute(
    "href",
    "/Books/Romance/The Phantom of the Opera.pdf"
  );

  if (/android/i.test(OS)) {
    ReadButton.setAttribute(
      "href",
      "https://drive.google.com/file/d/1Q9aI5e0epZmL_hAdy4T_5hDhU3q9bTJG/view?usp=sharing"
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
